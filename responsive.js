//multi item slider
const preBtn = document.querySelector('.btn-pre');
const nxtBtn = document.querySelector('.btn-nxt');

const projContainer = document.querySelector('.proj-container');

const slideAmount = 400; 

const slidePrevious = () => {
  projContainer.scrollBy(-slideAmount, 0);
};

const slideNext = () => {
  projContainer.scrollBy(slideAmount, 0);
};

preBtn.addEventListener('click', slidePrevious);
nxtBtn.addEventListener('click', slideNext);
//end multi item slider

//contact copy to clipboard
const myphone = document.getElementById("phoneNum").innerHTML.toString();
const myEmail = document.getElementById("email").innerHTML.toString();

var copy1 = document.getElementById('copy1');
var copy2 = document.getElementById('copy2');

function copyNumber(){
  navigator.clipboard.writeText(myphone);
  copy1.innerHTML = "Copied!";
  copy2.innerHTML = "Copy";
}

function copyEmail(){
  navigator.clipboard.writeText(myEmail);
  copy2.innerHTML = "Copied!";
  copy1.innerHTML = "Copy";
}

function btnReset(){
  copy2.innerHTML = "Copy";
  copy1.innerHTML = "Copy"
}
//end contact copy to clipboard

//scroll to top
let mybutton = document.querySelector(".topScroll");

window.onscroll = function() {toggleBtnVisiblity()};

function toggleBtnVisiblity() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click",goTop);
//end scroll to top

//scroll to About
function scrollAbout(){
  let aboutDiv = document.getElementById("About");
  aboutDiv.scrollIntoView()
}
//end scroll to About