let no = document.getElementById("no");
let yes = document.getElementById("yes");
let head = document.getElementById("h");

no.addEventListener("mouseover",()=>{
    let i = Math.floor(Math.random()*500)+1;
    let j = Math.floor(Math.random()*500)+1;
    let l = Math.floor(Math.random()*500)+1;
    let m = Math.floor(Math.random()*500)+1;
    no.style.left=i+"px";
    no.style.top=j+"px";
    no.style.right=l+"px";
    no.style.bottom=m+"px";
})
yes.addEventListener("click",()=>{
    h.innerHTML= "I Love You Too :)"
})