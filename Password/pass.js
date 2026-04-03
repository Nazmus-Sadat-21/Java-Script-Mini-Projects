let pinput = document.getElementById("input2");
let  gbtn =  document.getElementById("btn2");
let copy = document.getElementById("i");

let input = prompt("enter something")
const length = 16;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol ="~!@#$%^&*()_+-=*/|}{][;><?/";

const allchars = uppercase+lowercase+number+symbol;

gbtn.addEventListener("click",()=>{
     let pass = input+"";
     pass += lowercase[Math.floor(Math.random()*lowercase.length)];
     pass += number[Math.floor(Math.random()*number.length)];    
     pass += symbol[Math.floor(Math.random()*symbol.length)];
     pass += uppercase[Math.floor(Math.random()*uppercase.length)];

     while(length>pass.length){
        pass += allchars[Math.floor(Math.random()*allchars.length)];
     }
     pinput.value = pass;
    
});

copy.addEventListener("click",()=>{
    pinput.select();
    document.execCommand("copy");
    alert("password copied");
})

