//carousel
const buttons = document.querySelectorAll("[data-carousell-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carousellButton === "next" ? 1 : -1
    const sllides = button
      .closest("[data-carousell]")
      .querySelector("[data-sllides]")

    const activeSllide = sllides.querySelector("[data-active]")
    let newIndex = [...sllides.children].indexOf(activeSllide) + offset
    if (newIndex < 0) newIndex = sllides.children.length - 1
    if (newIndex >= sllides.children.length) newIndex = 0

    sllides.children[newIndex].dataset.active = true
    delete activeSllide.dataset.active
  })
})
//end carousel
const btnAuto = document.querySelectorAll(".imgCaro>.carousell-button");

autoSlide();



function autoSlide() {
    const offset = 1
    const sllides = btnAuto[0].closest("[data-carousell]")
      .querySelector("[data-sllides]")

    const activeSllide = sllides.querySelector("[data-active]")
    let newIndex = [...sllides.children].indexOf(activeSllide) + offset
    if (newIndex >= sllides.children.length) newIndex = 0

    sllides.children[newIndex].dataset.active = true
    delete activeSllide.dataset.active

    setTimeout(autoSlide, 5000);
  }


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