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
const btn3 = document.querySelector("#btn-3")
const userInput = document.getElementById("user-input")

btn3.addEventListener("click" , () => {
if(userInput.value === "") {
    alert("Please enter text..")
    return;
}else{
    alert(userInput.value)
}
}) 

// --------------------------------------------------------
const btn4 = document.querySelector("#btn-4")
const link = document.querySelector("#my-link")

btn4.addEventListener("click" , () => {
    link.innerHTML = "<a href= https://youtube.com > Go to YouTube </a>"
})

// --------------------------------------------------------

const btn5 = document.querySelector("#btn-5")
const myImage = document.querySelector("#my-image")

btn5.addEventListener("click" , () => {
    myImage.style.display = "none"
})

// --------------------------------------------------------

    const incbtn = document.querySelector("#inc-btn")
    const decbtn = document.querySelector("#dec-btn")
    const counterValue = document.querySelector("#counter-value")

// incbtn.addEventListener("click" , () => {
//  const Value = counterValue.value++
// })

// ----------------------------------------------------------

const toggleMode = document.querySelector("#toggle-mode")
const body = document.body
toggleMode.addEventListener("click" , () => {
  body.style.backgroundColor = "black";
})
 