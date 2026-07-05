//task 1

const form = document.getElementById("user-form");
const dis = document.getElementById("display-name");
const username = document.getElementById("username-input");

form.addEventListener("submit", ()=>{
    event.preventDefault();
    dis.innerHTML=`${username.value}`
    form.reset();
});

//task 2
const deletebtn = document.querySelectorAll(".delete-btn");
const list = document.getElementById("task-list");
deletebtn.forEach((deletebtn)=>{
    deletebtn.addEventListener("click",(e)=>{
        e.target.parentElement.remove();
    })
});


//task3
const box = document.getElementById("container-box");
const colorbtn = document.getElementById("color-parent-btn");
console.log(box.children.length);
colorbtn.addEventListener("click", (e)=>{
e.target.parentElement.style.backgroundColor = "lightblue";
})
