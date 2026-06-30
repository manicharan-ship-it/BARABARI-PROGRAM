let addBooksection = document.querySelector(".add-book-section");
let toggleFormBtn = document.getElementById("toggle-form");
const typeSelect = document.getElementById("type");
let ebookDetails = document.getElementById("ebook-details");
const filesize = document.querySelector("#file-size");
const bookForm = document.getElementById("book-list");
const titlev = document.getElementById("title");
const authorv = document.getElementById("author");
const addbook = document.querySelector(".btn-primary");


let booklist = JSON.parse(localStorage.getItem("booklist")) || [];

toggleFormBtn.addEventListener("click", function () {
   if (addBooksection.style.display === "none") {
      addBooksection.style.display = "block";
      toggleFormBtn.innerHTML = "Hide Form";
   } else {
      addBooksection.style.display = "none";
      toggleFormBtn.innerHTML = "Add Book";
   }
});
typeSelect.addEventListener("change", function () {
   if (typeSelect.value === "ebook") {
      ebookDetails.style.display = "block";
   } else {
      ebookDetails.style.display = "none";
   }
});
function booklistadd() {
   bookForm.innerHTML = "";
   booklist.forEach((bookdetalis, index) => {

      const conataier = document.createElement("div");
      conataier.id = "box";
      const titelediv = document.createElement("h3");

      const authordiv = document.createElement("p");
      const typedive = document.createElement("p");
      const sizediv = document.createElement("p")
      const btndiv = document.createElement("div");
      const browsebtn = document.createElement("button");
      const downbtn = document.createElement("button");
      downbtn.id = "down";
      browsebtn.id = "bbtn";
      browsebtn.textContent = "Browse";
      const removebtn = document.createElement("button");
      removebtn.textContent = "Remove";
      removebtn.id = "rbtn";
      btndiv.id = "btnd";
      downbtn.textContent = "download";



      titelediv.innerHTML = `${bookdetalis.title}`;
      authordiv.innerHTML = `<p>Author:${bookdetalis.author}</p>`;
      typedive.innerHTML = `<p>Status: Available</p>`;
      sizediv.innerHTML = `file size :${bookdetalis.filesize}MB`;
      conataier.appendChild(titelediv);
      conataier.appendChild(authordiv);
      if (bookdetalis.typeSelect === "ebook") {
         conataier.appendChild(sizediv);

         btndiv.appendChild(downbtn);
      } else {
         btndiv.appendChild(browsebtn);
      }
      conataier.appendChild(typedive);

      btndiv.appendChild(removebtn);
      conataier.appendChild(btndiv);

      browsebtn.addEventListener("click", () => {
         if (browsebtn.textContent === "Browse") {
            browsebtn.textContent = "Return";
            browsebtn.style.backgroundColor = "blue";
         } else {
            browsebtn.textContent = "Browse"
            browsebtn.style = "#bbtn";
         }
      });
      downbtn.addEventListener("click", () => {
         if (downbtn.textContent === "download") {
            downbtn.textContent = "Return";
            downbtn.style.backgroundColor = "blue";
         } else {
            downbtn.textContent = "download";
            downbtn.style.backgroundColor = "#12ae53";
         }
      });
      removebtn.addEventListener("click", () => {
         booklist.splice(index, 1);
         localStorage.setItem("booklist", JSON.stringify(booklist));
         booklistadd();

      })
      bookForm.appendChild(conataier);
   });
}


addbook.addEventListener("click", function (event) {
   event.preventDefault();

   let bookdetalis = {
      title: titlev.value,
      author: authorv.value,
      filesize: filesize.value,
      typeSelect: typeSelect.value
   }
   booklist.push(bookdetalis);

   localStorage.setItem("booklist", JSON.stringify(booklist));
   booklistadd();

});

booklistadd();