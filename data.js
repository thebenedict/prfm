/* Booth geometry traced from PRFM indoor floor plan v4.1. Coordinates are illustrative, not surveyed. */
const BOOTHS=[];
const booth=(id,x,y,w,h)=>BOOTHS.push({id:String(id),x,y,w,h});
// East perimeter, bottom to top.
[1,2,3,4,5,6,7,8,9,10,11,12].forEach((n,i)=>{const ys=[1054,981,921,843,769,695,625,557,488,399,310,198];const ends=[1132,1054,981,921,843,769,695,625,557,488,399,310];booth(n,1219,ys[i],88,ends[i]-ys[i]);});
[17,16,15,14,13].forEach((n,i)=>booth(n,881+i*67,198,67,60));
function column(ids,x,y,w,heights){ids.forEach((id,i)=>{let h=Array.isArray(heights)?heights[i]:heights;booth(id,x,y,w,h);y+=h;});}
column([37,36,35,34,33,32,31],1022,473,71,66);
column([26,25,24,23,22,21,20],1093,473,72,66);
column([59,58,57,56,55,54,53],828,473,73,66);
column([48,47,46,45,44,43,42],901,473,73,66);
column([68,67,66,65,64,63,62],704,473,69,66);
column([73,72,71,'71a','71b'],648,473,56,[88,94,79,74,84]);
[[[50,49],947],[[38,39],1013],[[28,27],1082]].forEach(([ids,x])=>column(ids,x,313,68,53));
[[[30,29],1022],[[19,18],1095],[[52,51],826],[[41,40],900],[[70,69],621],[[61,60],699]].forEach(([ids,x])=>column(ids,x,976,76,78));
[80,79,78,77].forEach((n,i)=>booth(n,617+i*68,368,68,50));
column([76,75,74],497,525,62,[74,66,71]);booth(81,497,386,55,65);
booth('112a',448,525,49,74);booth('112b',393,738,39,62);booth('105a',432,738,55,62);booth('105b',487,738,58,62);
[100,99,98].forEach((n,i)=>booth(n,322+i*79,976,79,77));booth('100a',253,976,69,77);
[97,96,95].forEach((n,i)=>booth(n,322+i*79,1053,79,78));
[104,103,102,101].forEach((n,i)=>booth(n,258+i*76,894,76,47));
[107,106,105].forEach((n,i)=>booth(n,355+i*79,847,79,47));
booth(108,260,798,60,96);booth(109,260,748,60,50);booth(110,96,953,98,84);booth(111,289,624,77,59);booth('111a',196,624,93,59);
[94,93,92,91,90,89,88,87,86,85,84,83,82,'82a'].forEach((n,i)=>{let edges=[196,290,370,451,527,582,642,696,754,818,879,943,1012,1068,1120];booth(n,edges[i],1188,edges[i+1]-edges[i],54);});
booth(112,383,449,59,56);booth(113,544,221,70,76);booth(114,615,221,70,76);booth(115,769,286,98,64);booth(116,586,338,94,27);booth('50a',890,309,30,56);
const CATEGORIES=[
 {name:'Art & prints',color:'#ffb6ad',image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&auto=format&fit=crop',desc:'Original illustrations, small-run prints and art for your walls.',names:['Paper Riot','Night Shift Press','Ghost Town Prints','Static Studio','Loose Ink','Pink Noise Paper']},
 {name:'Vintage',color:'#e3c790',image:'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&auto=format&fit=crop',desc:'Well-loved denim, vintage tees and secondhand finds.',names:['Secondhand Saints','Velvet Underground Vintage','Rerun Clothing','Good Riddance Vintage','Deadstock Department','Yesterday Shop']},
 {name:'Records & zines',color:'#ffdf00',image:'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=700&auto=format&fit=crop',desc:'Records, independent zines and things worth taking home to read.',names:['Basement Records','Staple & Spine','Feedback Records','Copy Machine Club','Side B Sounds','Small Press Society']},
 {name:'Jewelry',color:'#ebac74',image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&auto=format&fit=crop',desc:'Handmade silver, bold earrings and everyday oddities.',names:['Heavy Petal','Lucky Teeth','Scrap Metal Jewelry','Little Hex','Silver Static','Found Object Studio']},
 {name:'Objects & oddities',color:'#d4cbb8',image:'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700&auto=format&fit=crop',desc:'Handmade ceramics, curious objects and gifts with a little character.',names:['Moss & Bone','Odd Company','Crooked Clay','Tiny Curiosities','Strange Goods','Greenhouse Objects']},
];
const VENDORS=BOOTHS.map((b,i)=>{const cat=CATEGORIES[i%5];return {...b,name:cat.names[Math.floor(i/5)%cat.names.length]+(i>=30?' '+['Collective','Workshop','Studio'][Math.floor(i/30)-1]:''),category:cat.name,color:cat.color,image:cat.image,description:cat.desc};});
Object.assign(VENDORS.find(v=>v.id==='45'),{name:'Seattle Transit Live',category:CATEGORIES[0].name,color:CATEGORIES[0].color,image:'assets/transit.webp',description:'Seattle’s trains and ferries, moving in real time on a handmade LED map. Built right here in Seattle.',url:'https://seattletransitlive.com',instagram:'https://www.instagram.com/seattletransitlive/'});
Object.assign(VENDORS.find(v=>v.id==='46'),{name:'Paper Riot'});
Object.assign(VENDORS.find(v=>v.id==='44'),{name:'Heavy Petal',category:CATEGORIES[3].name,color:CATEGORIES[3].color,image:CATEGORIES[3].image,description:CATEGORIES[3].desc});
Object.assign(VENDORS.find(v=>v.id==='56'),{name:'Basement Records',category:CATEGORIES[2].name,color:CATEGORIES[2].color,image:CATEGORIES[2].image,description:CATEGORIES[2].desc});
