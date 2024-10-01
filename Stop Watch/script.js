const display = document.getElementById("display");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


let [hr,min,sec]= [0,0,0];

start.addEventListener("click",()=>{
   let timer = setInterval(()=>{
         sec++;
         if(sec==60){
            sec=0;
            min++;
            if(min==60){
                min=0;
                hr++
            }
        }

        let h =  hr<10 ? "0"+hr:hr; 
        let m =  min<10 ? "0"+min:min; 
        let s =  sec<10 ? "0"+sec:sec; 

        display.innerHTML= h+":"+m+":"+s;
    },1000) 

    stop.addEventListener("click",()=>{
        clearInterval(timer);
    })
   
    reset.addEventListener("click",()=>{
        clearInterval(timer);
        [hr,min,sec]= [0,0,0];
        display.innerHTML="00:00:00";
    }) 
});

