let pics = document.getElementById("myPics");
let tagged = document.getElementById("myTaggedPics");
let line = document.getElementById("line");
let picsTab = document.getElementById("taggedPics");
let pictures = document.getElementById("pics");
function myPics() {
  line.classList.remove("float-right");
  picsTab.classList.add("hidden");
  pictures.classList.remove("hidden");
}
function myTaggedPics() {
  line.classList.add("float-right");
  picsTab.classList.remove("hidden");
  pictures.classList.add("hidden");
}
