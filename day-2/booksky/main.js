
function deleteBook(event) {
    console.log("delete book called")
    event.target.closest(".book-card").remove();
}

var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var abtn = document.querySelector(".add-btn");
abtn.addEventListener("click", function() {
    overlay.style.display = "block";
    popup.style.display = "block";
})

var cbtn = document.querySelector(".close-btn");
cbtn.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
})
var addbtn = document.querySelector(".submit-btn");
addbtn.addEventListener("click", function() {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
    var bookTitle = document.getElementById("book-title").value;
    var bookAuthor = document.getElementById("book-author").value;
    var bookDescription = document.getElementById("book-description").value;
    var divclass = document.querySelector(".container");
    var divel = document.createElement("div");
    divel.className = "book-card";
    divel.innerHTML = `<h2 class="poppins">${bookTitle}</h2>
            <h2>${bookAuthor}</h2>
            <p class="poppins-thin">${bookDescription}</p>
            <button class="delete-btn" onclick='deleteBook(event)'>Delete</button>`;
    divclass.append(divel);
    document.getElementById("book-form").reset();
})

