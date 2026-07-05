
//task 1
const togglebtn = document.querySelector("#theme-btn");
const body =document.body;
togglebtn.addEventListener("click", ()=>{
   body.classList.toggle("dark-mode")
});

//task 2
const divbtn = document.getElementById("hover-box");
divbtn.addEventListener("mouseenter",()=>{
    divbtn.classList.add("highlight");
});
divbtn.addEventListener("mouseleave",()=>{
    divbtn.classList.remove("highlight");
});

const swapbtn = document.getElementById("swap-btn");
const profile = document.getElementById("profile-pic");
swapbtn.addEventListener("click", ()=>{
    profile.setAttribute("src","https://media.istockphoto.com/id/1173074943/photo/beautiful-pink-flower-blossom-in-night-skies-with-full-moon.jpg?s=612x612&w=0&k=20&c=8wmpdnsG1XoEiIOwhMJROYrqMhMHEB_z95SqNLll8N8=" );
})
const disable = document.getElementById("disable-btn");
disable.addEventListener("click", ()=>{
    profile.removeAttribute("src","https://media.istockphoto.com/id/1173074943/photo/beautiful-pink-flower-blossom-in-night-skies-with-full-moon.jpg?s=612x612&w=0&k=20&c=8wmpdnsG1XoEiIOwhMJROYrqMhMHEB_z95SqNLll8N8=" );
});

//task 3
const list = document.getElementById("item-list");
const listbtn = document.getElementById("add-item-btn");
let n=3;
listbtn.addEventListener("click", ()=>{
   
   
    const li = document.createElement("li");
     
li.innerHTML=`Existing item ${n}`
    
    list.appendChild(li);
    n++;
})
