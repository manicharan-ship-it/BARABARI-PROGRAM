let timeElement = document.querySelector("#time");
let dateElement = document.querySelector("#date");
let toggleBtn = document.querySelector("#toggle-btn");
let is24format = false;
function updatetime(){
   let now = new Date();
   let hours = now.getHours();
   const minutes = now.getMinutes().toString().padStart(2,"0");
const seconds=now.getSeconds().toString().padStart(2,"0");
timeElement.textContent= `${hours}:${minutes}:${seconds}`;

if(is24format){
   timeElement.textContent = `${hours.toString().padStart(2,'0')}:${minutes}:${seconds}`;
}else{
    const ampm = hours>= 12 ?"pm":"am";
    hours = hours%12||12;
    timeElement.textContent= `${hours.toString().padStart(2,'0')}:${minutes}:${seconds}`;
    timeElement.append(ampm);
    
}
toggleBtn.addEventListener("click",()=>{
    is24format=!is24format;
    toggleBtn.textContent = is24format  ? "switch to 12-hours format":"switch to 24-hour format";
});
}
updatetime();
setInterval(updatetime,1000);

function updatedate(){
   let now = new Date();
   let year= now.getFullYear();
   const month= (now.getMonth()+1).toString().padStart(2,"0");
   let day = now.getDate();
dateElement.textContent= `${day}/${month}/${year.toString().padStart(2,"0")}`;
}
updatedate();
setInterval(updatedate,1000);
