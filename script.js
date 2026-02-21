const btn1 = document.getElementById("btn-1");
const heading = document.getElementById("main-heading");

btn1.addEventListener("click", () => {
  heading.innerHTML = "Welcome to the DOM!";
});

// -------------------------------------------------------

const btn2 = document.getElementById("btn-2");
const colorBox = document.getElementById("color-box");

btn2.addEventListener("click", () => {
  colorBox.style.backgroundColor = "blue";
});

// -------------------------------------------------------
const btn3 = document.querySelector("#btn-3");
const userInput = document.getElementById("user-input");

btn3.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please enter text..");
    return;
  } else {
    alert(userInput.value);
  }
});

// --------------------------------------------------------
const btn4 = document.querySelector("#btn-4");
const link = document.querySelector("#my-link");

btn4.addEventListener("click", () => {
  link.innerHTML = "<a href= https://youtube.com > Go to YouTube </a>";
});

// --------------------------------------------------------

const btn5 = document.querySelector("#btn-5");
const myImage = document.querySelector("#my-image");

btn5.addEventListener("click", () => {
  myImage.style.display = "none";
});

// --------------------------------------------------------

const incbtn = document.querySelector("#inc-btn");
const decbtn = document.querySelector("#dec-btn");
const counterValue = document.querySelector("#counter-value");

incbtn.addEventListener("click" , () => {
 let Value = Number(counterValue.innerText);
 Value++;
 counterValue.innerText = Value ;
})
decbtn.addEventListener("click" , () => {
 let Value = Number(counterValue.innerText);
 Value--;
 counterValue.innerText = Value ;
})

// ----------------------------------------------------------

const toggleMode = document.querySelector("#toggle-mode");
const body = document.body;
let isdark = false;
toggleMode.addEventListener("click", () => {
    isdark = !isdark
  if (isdark) {
    body.style.backgroundColor = "black";
    body.style.color = "white"
} else {
      body.style.backgroundColor = "white";
      body.style.color = "black"
  }
});
// ---------------------------------------------------------
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener("click", () => {
  if (passwordInput.value.length > 5) {
    errorMsg.innerHTML = "Login Successful!";
    errorMsg.style.color = "green";
  } else {
    errorMsg.innerHTML = "Password too short!";
  }
});

// ------------------------------------------------------------

const shoppingList = document.getElementById("shopping-list");
const itemInput = document.getElementById("item-input");
const addItemBtn = document.getElementById("add-item-btn");
addItemBtn.addEventListener("click", (event) => {
  const value = itemInput.value;
  if (value === "") {
    alert("Please enter a task!");
    return;
  }
  const newListItem = document.createElement("li");
  newListItem.innerText = value;
  shoppingList.appendChild(newListItem);
 itemInput.value = "";
});


// --------------------------------------------------------------
 const secretMsg = document.getElementById("secret-msg")
 const toggleMsgBtn = document.getElementById("toggle-msg-btn")

 toggleMsgBtn.addEventListener("click" , () => {
  // secretMsg.style.color = "red"
  if(toggleMsgBtn.innerText === "Hide Message"){
    toggleMsgBtn.innerText = "Show Message"
    secretMsg.style.display = "none";
  }else {
    secretMsg.style.display = "";
    toggleMsgBtn.innerText = "Hide Message"
  }
 })