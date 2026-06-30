const addbtn = document.getElementById("addbtn");
const taskinput = document.getElementById("taskInput");
const tasklist = document.getElementById("tasklist");
const ct = document.querySelector("#ct");
const tt = document.querySelector("#tt");
let completedcount = 0;
let totalcount = 0;

addbtn.addEventListener("click", addtask)
function addtask(){
    event.preventDefault();
let tasktext = taskinput.value.trim();
if(tasktext===""){
    alert('please enter any task! 🖊️')
        return;}

const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
checkbox.style.marginRight = "8px";

 let listtext = document.createElement("li");
    listtext.innerText = tasktext;


    const deletbtn = document.createElement("button");
    deletbtn.innerText="Delete";
    function updateCounts(){
    tt.textContent=tasklist.children.length;

}
     listtext.prepend(checkbox);
    tasklist.append(listtext);
    updateCounts();
   listtext.append(deletbtn);
   deletbtn.style.margin= "10px";
deletbtn.addEventListener("click",()=>{
    tasklist.removeChild(listtext);
    updateCounts();
    
});
taskinput.value="";


    checkbox.addEventListener("change",() => {
    if(checkbox.checked){
        completedcount++;
       listtext.style.textDecoration="line-through";
       listtext.style.color = "rgba(0,0,0,0.6)"
    }else{
     completedcount--;
      listtext.style.textDecoration="none"; 
       listtext.style.color = "black";
       updateCounts();
    }
    ct.textContent = completedcount;
});


}
