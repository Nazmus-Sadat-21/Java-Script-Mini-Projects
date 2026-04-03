const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

let weeks= ["Sunday","Monday","Tuesday","Wednesday","Thurskday","Friday","Saturday"];
let months = ["january","February","March","April","May","June","July","August","September","October","November","December"];

day.innerHTML= today.getDate();
week.innerHTML= weeks[today.getDay()];
month.innerHTML= months[today.getMonth()];
year.innerHTML= today.getUTCFullYear();