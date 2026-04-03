const input = document.getElementById("input2");
const btn =  document.getElementById("btn2");
const copy = document.getElementById("i");
btn.addEventListener("click",()=>{
    let otp ="";
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;

    input.value= otp;
})

copy.addEventListener("click",()=>{
    input.select();
    document.execCommand("copy");
    alert("otp has been copied!")
})