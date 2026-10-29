/* Portfolio — Viridiana Meza Escobedo
   1) Avatar pixel  2) Filtros de proyectos */
// Pixel avatar
(function(){
  var rows=[
    "......HHHH......",
    "....HHHHHHHH....",
    "...HHHHHHHHHH...",
    "..hhhhhhhhhhhh..",
    "..DDDDDDDDDDPD..",
    ".DDDSSSSSSSSDDD.",
    ".DDSSSSSSSSSSDD.",
    ".DDSSeSSSSeSSDD.",
    ".DDSrSSSSSSrSDD.",
    ".DDSSSSppSSSSDD.",
    "..DDSSSSSSSSDD..",
    "..DDDBBWWBBDDD..",
    "..DDBBBBBBBBBD..",
    ".BBBBBBBBBBBBBB.",
    ".BBBBBBBBBBBBBB.",
    "..BBBBBBBBBBBB..",
    "..BBBB....BBBB..",
    "..KKKK....KKKK.."
  ];
  var col={H:"#ffffff",h:"#c9cfe6",D:"#2b1d2e",S:"#f9d9c4",G:"#1f2a4d",e:"#1f2a4d",P:"#f48fb1",p:"#e86a9a",r:"#f6a5b8",B:"#263a6e",W:"#f6f6fb",K:"#1f2a4d"};
  var svg=document.getElementById("sprite"),out="";
  rows.forEach(function(r,y){
    for(var x=0;x<r.length;x++){
      var c=r[x]; if(c!=="."){ out+='<rect x="'+x+'" y="'+y+'" width="1.02" height="1.02" fill="'+col[c]+'"/>'; }
    }
  });
  svg.innerHTML=out;
})();

// Project filters
document.getElementById("filters").addEventListener("click",function(e){
  var b=e.target.closest(".chip"); if(!b) return;
  document.querySelectorAll(".chip").forEach(function(c){c.classList.remove("on")});
  b.classList.add("on");
  var f=b.getAttribute("data-f");
  document.querySelectorAll(".card").forEach(function(card){
    var show=f==="all"||card.getAttribute("data-tags").split(" ").indexOf(f)>-1;
    card.classList.toggle("hide",!show);
  });
});
