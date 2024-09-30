const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");
const btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    if(inputbox.value ==""){
        alert("you have to write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML=`<i class="fa-sharp fa-solid fa-trash" id="icon"></i>`;
        li.appendChild(span);

        const del = span.querySelector("#icon");
        del.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.remove();
        })    
        
    }
    inputbox.value="";
    
     
});

