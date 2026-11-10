#!/bin/sh
# Run from Terminal to publish both prototypes to a new GitHub Pages repository.
set -eu
cd "$(dirname "$0")"
node --check app.js
node --check data.js
gh auth status
if [ ! -d .git ]; then
  git init -b main
fi
git add index.html vendor.html app.js data.js styles.css assets .nojekyll .gitignore AGENTS.md README.md publish.sh
if ! git diff --cached --quiet; then
  git commit -m "Add PRFM vendor and market map prototypes"
fi
if ! git remote get-url origin >/dev/null 2>&1; then
  owner=$(gh api user --jq .login)
  owned_repos=$(gh api --paginate 'user/repos?affiliation=owner&per_page=100' --jq '.[].name')
  repo_name=prfm
  if printf '%s\n' "$owned_repos" | grep -Fxq prfm; then
    repo_name=prfm-demo
  fi
  if printf '%s\n' "$owned_repos" | grep -Fxq "$repo_name"; then
    printf 'Both prfm and prfm-demo already exist; no repository was changed.\n' >&2
    exit 1
  fi
  printf 'Creating %s/%s\n' "$owner" "$repo_name"
  gh repo create "$owner/$repo_name" --public --source=. --remote=origin --push
else
  git push -u origin HEAD
fi
repo=$(gh repo view --json nameWithOwner --jq .nameWithOwner)
if ! gh api "repos/$repo/pages" >/dev/null 2>&1; then
  gh api --method POST "repos/$repo/pages" -f 'source[branch]=main' -f 'source[path]=/'
fi
gh api "repos/$repo/pages" --jq '"Map: " + .html_url + "\nVendor page: " + .html_url + "vendor.html"'
printf '\nGitHub Pages may take a few minutes to finish deploying.\n'
