//taks1

let head = document.querySelector("#main-heading");
let para = document.querySelector("#sub-text");
 let list = document.querySelector("#color-list");
console.log(head.textContent);
console.log(list.children.length);
console.log(para.textContent);

//task 2
let para1 = document.querySelector("#message");
let para2 = document.querySelector("#info");
console.log(para1.textContent="Hello from JavaScript!");
console.log(para2.textContent=  "This information has been updated.");

//task 3
const head1 = document.getElementById("color-box");
const para3 = document.getElementById("highlight");
const para4 = document.getElementById("text-size");
head1.style.color="blue";
para3.style.backgroundColor="yellow";
para4.style.fontSize="24px";
para4.style.color="red";