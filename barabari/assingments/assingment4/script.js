//task1

const chatinput = document.getElementById("chat-input");
const chatmessage = document.getElementById("chat-messages");
chatinput.addEventListener("keydown", (e)=>{
    
if(e.key ==='Enter'){
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `${chatinput.value}`;
    chatmessage.appendChild(li);
    chatinput.value="";
}

})


//task2-A
const alertbtn = document.getElementById("alert-btn");
const alertmsg = document.getElementById("alert-msg");
alertbtn.addEventListener("click", (e)=>{
    alertmsg.style.display="block";
    setTimeout(() => {
     alertmsg.style.display="none";   
    }, 3000);
});

//task2-B
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");
const counter = document.getElementById("counter-display");
let count = 0;

startbtn.addEventListener("click", ()=>{
 const timerId = setInterval(()=>{
    
    counter.innerHTML=`${count++}`
 },1000)

stopbtn.addEventListener("click", ()=>{
    clearInterval(timerId);
    timerId = null;
});
});

//task3
const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const greeting = document.getElementById("greeting-name");
saveBtn.addEventListener("click", (e)=>{
const name = nameInput.value;
     localStorage.setItem("name",name);
 
    e.preventDefault();
   
   greeting.innerHTML=`${name}`;
  
   nameInput.value=" ";
});
 const savedname= localStorage.getItem("name");
  if(savedname){
    greeting.textContent=savedname;
  }

  //task 4
  const delegationList = document.getElementById("delegation-list");
  delegationList.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
      e.target.classList.toggle("completed");
    }
  });