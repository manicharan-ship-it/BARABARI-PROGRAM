let title = document.querySelector("#websiteTitle");
let ulr = document.querySelector("#websiteUrl");
let category = document.querySelector("#category");
let addbook = document.querySelector("#addbook");
let bookmarksList = document.querySelector("#bookmarksList");
const filter = document.querySelectorAll(".filter-btn");


//creates the arr 
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))  || [];
//creates the  elemets like list, divs , delets .adds them to the boomarks array and bookmarkslist
  function renderbookmarks(bookmarksToShow){
    bookmarksList.innerHTML ="";
    if(bookmarksToShow.length ===0){
      bookmarksList.innerHTML= "<h4>no books found here, please enter the books</h4>"
      return;
    }
    bookmarksToShow.forEach((bookmark,index)=>{
      const deletebtn = document.createElement("button");
deletebtn.textContent = "delete";
deletebtn.addEventListener("click",()=>{
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
  renderbookmarks(bookmarks);
})

const li = document.createElement("div");
const titlediv = document.createElement("div");
const urldiv = document.createElement("div");
const categorydiv = document.createElement("div");
li.id="lil";
categorydiv.id="cat";
urldiv.id="u"
deletebtn.id="d"

titlediv.innerHTML = `<h3>${bookmark.title}</h3>`;
 
 urldiv.innerHTML = `<a href="${bookmark.ulr}">${bookmark.ulr}</a> `  ; 
 categorydiv.innerHTML=`<span > ${bookmark.category} </span>`;

li.appendChild(titlediv);
li.appendChild(urldiv);
li.appendChild(categorydiv);
li.appendChild(deletebtn);
bookmarksList.appendChild(li);

    });

  }
// submit button
function addbookmark(event){
event.preventDefault();
     let bookmark = {
      title : title.value,
      ulr : ulr.value,
      category : category.value
    } 
    bookmarks.push(bookmark);
   
  
//localstorage stoes the items with inedx
localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
renderbookmarks(bookmarks);
title.value ="";
ulr.value ="";
category.value = "Work";
}

addbook.addEventListener("click", addbookmark)
 // filter button
filter.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
   filter.forEach(button => button.classList.remove("active"));
   btn.classList.add("active") ;
   const selectCategory = btn.dataset.category;

let arrfilter = [];

if (selectCategory === "All") {
    arrfilter = bookmarks;
} else {
    bookmarks.forEach(bookmark => {
        if (bookmark.category === selectCategory) {
            arrfilter.push(bookmark);
        }
    });
}


renderbookmarks(arrfilter);
  });
});

renderbookmarks(bookmarks);




