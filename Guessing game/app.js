const inputbox = document.getElementById("inputbox");
const btn = document.getElementById("btn");
const para = document.getElementById("showmssg");
const para2 = document.getElementById("winloss");

let win =0;
let loss=0;


btn.addEventListener("click",(e)=>{
    e.preventDefault();  
    let randomnum = Math.floor(Math.random()*10)+1;
    if(inputbox.value <1 || inputbox.value>10){
        alert("please pick a number between 1-10")
    }
    else if(inputbox.value==""){
        alert("Enter a number");
       
    }
    else if(inputbox.value==randomnum){
        para.innerHTML= `Congratulation,You have won!`;
        win++;
        
    }
    else{
        para.innerHTML=`You have lost,random number was: ${randomnum}`;
        loss++
    }
    para2.innerHTML =`Win: ${win} , Loss: ${loss}`;
    inputbox.value="";
    
 });



