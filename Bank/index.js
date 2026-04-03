const name = document.getElementById("name")

const d_amount = document.getElementById("a-d")
const w_amount = document.getElementById("a-w")
const b_amount = document.getElementById("a-b")

const i_deposite = document.getElementById("i-deposite")
const i_withdraw = document.getElementById("i-withdraw")
const user = document.getElementById("user")
const pin = document.getElementById("pin")

const deposite_btn =  document.getElementById("deposite-btn")
const withdraw_btn =  document.getElementById("withdraw-btn")
const e_btn =  document.getElementById("e-btn")





e_btn.addEventListener("click" ,()=>{
    if(user.value==""|| pin.value==""){
        alert("Please enter your information !")
    }
    else if(pin.value.length<4||pin.value.length>4){
        alert("Please enter your pin correctly")
        pin.value=""

    }
    else{
        balance= 0;
        balance += Math.floor(Math.random()*100000)+1;
        b_amount.innerHTML=balance+" TK"
        d_amount.innerHTML = balance+" TK"
        name.innerHTML=user.value;
        user.value=""
        pin.value=""
    }
})

var amount = 0;
var d =0;
deposite_btn.addEventListener("click", ()=>{
    if(name.innerHTML==""){
        alert("Please enter your PIN first !")
        i_deposite.value="";
    }
    else if(i_deposite.value==""){
        alert("Please enter your amount")
    }
    else {
        amount+= parseInt(b_amount.innerHTML)+parseInt(i_deposite.value);
        d+= parseInt(d_amount.innerHTML)+parseInt(i_deposite.value);
        b_amount.innerHTML= amount+ " TK"
        d_amount.innerHTML = d +"TK"
        a = parseInt(b_amount.innerHTML)
        amount = 0;
        d=0;
        i_deposite.value=""
    }

})

var w =0;

withdraw_btn.addEventListener("click", ()=>{
    if(name.innerHTML==""){
        alert("Please enter your PIN first !")
        i_withdraw.value="";
    }
    else if(i_withdraw.value==""){
        alert("Please enter your amount")
    }
    else {
        a-=parseInt(i_withdraw.value);
        w+=parseInt(i_withdraw.value)
        w_amount.innerHTML= w+" TK"
        b_amount.innerHTML= a+" TK"
        
        i_withdraw.value=""
    }

})

console.log(a)