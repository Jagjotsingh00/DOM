const btn1 = document.getElementById("btn-1");
const heading = document.getElementById("main-heading");

btn1.addEventListener("click", () => {
  heading.innerHTML = "Welcome to the DOM!";
});

// -------------------------------------------------------

const btn2 = document.getElementById("btn-2");
const colorBox = document.getElementById("color-box");

btn2.addEventListener("click", () => {
    colorBox.style.backgroundColor = "blue"
});

// -------------------------------------------------------
const btn3 = document.querySelector("btn-3")
const userInput = document.getElementById("user-input")

btn3.addEventListener("click" , () => {
    userInput = alert(userInput.value)
}) 