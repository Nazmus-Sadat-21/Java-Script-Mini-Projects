const rock =  document.getElementById("rock")
const paper =  document.getElementById("paper")
const scissor =  document.getElementById("scissors")
const mssg =  document.getElementById("mssg")
const count =  document.getElementById("count")

// rock =1;
// paper = 2
// scissor = 3
var aicounter =0;
var youcounter = 0;
var draw = 0;

rock.addEventListener("click",()=>{

    ai= Math.floor(Math.random()*3)+1;

    if(ai==1){
        mssg.style.color = "black"
        mssg.innerHTML = `Game is tie ! `
        draw++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else if (ai==2){
       
        mssg.style.color = "rgb(181, 10, 10)"
        mssg.innerHTML= `Sorry you lost , paper warp your rock`
        aicounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else{
        mssg.style.color = "rgb(26, 134, 11)"
         mssg.innerHTML= `Congratulation you win , Your rock destroy scissor`
        youcounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    
})

paper.addEventListener("click",()=>{

    ai= Math.floor(Math.random()*3)+1;

    if(ai==2){
        mssg.style.color = "black"
        mssg.innerHTML = `Game is tie ! `
        draw++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else if (ai==3){
         mssg.style.color = "rgb(181, 10, 10)"
        mssg.innerHTML= `Sorry you lost , scissor cut your paper`
        aicounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else{
        mssg.style.color = "rgb(26, 134, 11)"
        mssg.innerHTML= `Congratulation you win , Your paper warp rock`
        youcounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    
})

scissor.addEventListener("click",()=>{

    ai= Math.floor(Math.random()*3)+1;
   
    if(ai==3){
        mssg.style.color = "black"
        mssg.innerHTML = `Game is tie ! `
        draw++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else if (ai==1){
         mssg.style.color = "rgb(181, 10, 10)"
        mssg.innerHTML= `Sorry you lost , rock destroy your scissor`
        aicounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    else{
        mssg.style.color = "rgb(26, 134, 11)"
        mssg.innerHTML= `Congratulation you win , Your scissor cut paper`
        youcounter++
        count.innerHTML = `AI = ${aicounter} , You = ${youcounter} , Draw = ${draw}`
    }
    
})

