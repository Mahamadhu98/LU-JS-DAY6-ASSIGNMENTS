var x=document.getElementById("background")
var color=["blue","green","red","yellow"];
setInterval(function(){
    for(let y=0;y<4;y++)
    {
        x.style.backgroundColor=color[Math.floor(Math.random()*4)];
    }
},300)
