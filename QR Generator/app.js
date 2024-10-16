let input = document.getElementById("input");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let download = document.getElementById("downbtn");

btn1.addEventListener("click",()=>{
    if (input.value!=""){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
        qrimg.classList.add("showimg");
        input.value="";
        
    }
    else{
        alert("Please enter text or url");
    }
});

download.addEventListener('click', ()=>{
    
    if(qrimg != null){
        let imgAtrr = qrimg.getAttribute("src");
        download.setAttribute("href", imgAtrr);
    }
    else{}
    
});