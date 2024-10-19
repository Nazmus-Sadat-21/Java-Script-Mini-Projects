const user =  document.getElementById("user");
const email=  document.getElementById("email");
const phn =  document.getElementById("phn");
const pass =  document.getElementById("pass");
const repass =  document.getElementById("repass");
const otpcode =  document.getElementById("otp");
const send =  document.getElementById("sendotp");
const btn =  document.getElementById("btn");
const input = document.querySelector(".input")

let passlength = 8;

// let otp ="";

send.addEventListener("click",()=>{  
    otp="";
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    otp += Math.floor(Math.random()*9)+1;
    alert(`Your OTP is ${otp}`);
})

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(user.value==""||email.value==""||phn.value==""||pass.value==""||repass.value==""||otpcode.value==""){      
        alert("Please fill up the form!")
       
    }
    else if(passlength>pass.value.length){
        alert("Please enter valid password!")
    }
    else if(pass.value!=repass.value){
        alert("please retype your password again!");
    }
    else if (otp!=otpcode.value){
       alert("Please check your otp again")
       send.innerHTML="Resend";
       otp="";
       otpcode.value="";
    }
    else{
        alert("Thank you very much!")
        send.innerHTML="Send"
        
    }
    
});

