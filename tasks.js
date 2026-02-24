// // TASKS:
// // • The Text Changer
// // Select the button with id btn-1.
// // When clicked, change the text of h1 (id="main-heading") to "Welcome to the DOM!".

// const { createElement } = require("react");

// const btn1 = document.getElementById("btn-1");
// const heading = document.getElementById("main-heading");

// btn1.addEventListener("click", () => {
//   heading.innerHTML = "Welcome to the DOM!";
// });

// // -------------------------------------------------------
// // • The Color Painter
// // Select the button btn-2.
// // When clicked, change the background color of the div (id="color-box") to "blue".

// const btn2 = document.getElementById("btn-2");
// const colorBox = document.getElementById("color-box");

// btn2.addEventListener("click", () => {
//   colorBox.style.backgroundColor = "blue";
// });

// // -------------------------------------------------------
// // • The Input Reader
// // Select the input user-input and the button btn-3.
// // When clicked, read the value from the input and show it in a standard browser alert().

// const btn3 = document.querySelector("#btn-3");
// const userInput = document.getElementById("user-input");

// btn3.addEventListener("click", () => {
//   if (userInput.value === "") {
//     alert("Please enter text..");
//     return;
//   } else {
//     alert(userInput.value);
//   }
// });

// // --------------------------------------------------------
// // • The Link Update
// // Select the link my-link.
// // When btn-4 is clicked, change the link's href attribute to "https://youtube.com" and its text to "Go to YouTube".

// const btn4 = document.querySelector("#btn-4");
// const link = document.querySelector("#my-link");

// btn4.addEventListener("click", () => {
//   link.innerHTML = "<a href= https://youtube.com > Go to YouTube </a>";
// });

// // --------------------------------------------------------
// // • The Vanishing Image
// // Select the image my-image.
// // When btn-5 is clicked, change its style.display to "none" so it disappears.

// const btn5 = document.querySelector("#btn-5");
// const myImage = document.querySelector("#my-image");

// btn5.addEventListener("click", () => {
//   myImage.style.display = "none";
// });

// // --------------------------------------------------------
// // • The Counter (+ and -)
// // You have a span counter-value that starts at 0.
// // When inc-btn is clicked, increase the number by 1.
// // When dec-btn is clicked, decrease the number by 1.
// // Hint: You will need to convert the text to a number using parseInt() or Number().

// const incbtn = document.querySelector("#inc-btn");
// const decbtn = document.querySelector("#dec-btn");
// const counterValue = document.querySelector("#counter-value");

// incbtn.addEventListener("click" , () => {
//  let Value = Number(counterValue.innerText);
//  Value++;
//  counterValue.innerText = Value ;
// })
// decbtn.addEventListener("click" , () => {
//  let Value = Number(counterValue.innerText);
//  Value--;
//  counterValue.innerText = Value ;
// })

// // ----------------------------------------------------------
// // • The Dark Mode Toggle
// // Select the button toggle-mode.
// // When clicked, toggle the CSS class "dark-mode" on the document.body.

// const toggleMode = document.querySelector("#toggle-mode");
// const body = document.body;
// let isdark = false;
// toggleMode.addEventListener("click", () => {
//     isdark = !isdark
//   if (isdark) {
//     body.style.backgroundColor = "black";
//     body.style.color = "white"
// } else {
//       body.style.backgroundColor = "white";
//       body.style.color = "black"
//   }
// });
// // ---------------------------------------------------------
// // • The Password Validator
// // Select password-input and login-btn.
// // When clicked, check if the password is less than 5 characters.
// // If it is too short, show the text "Password too short!" in the error-msg paragraph.
// // If it is long enough, show "Login Successful!" in green color.

// const passwordInput = document.getElementById("password-input");
// const loginBtn = document.getElementById("login-btn");
// const errorMsg = document.getElementById("error-msg");

// loginBtn.addEventListener("click", () => {
//   if (passwordInput.value.length > 5) {
//     errorMsg.innerHTML = "Login Successful!";
//     errorMsg.style.color = "green";
//   } else {
//     errorMsg.innerHTML = "Password too short!";
//   }
// });

// // ------------------------------------------------------------
// // • The Shopping List (Create Elements)
// // Select item-input, add-item-btn, and the ul shopping-list.
// // When clicked, take the text from the input, create a new <li> element, set its text, and appendChild it to the list.

// const shoppingList = document.getElementById("shopping-list");
// const itemInput = document.getElementById("item-input");
// const addItemBtn = document.getElementById("add-item-btn");
// addItemBtn.addEventListener("click", (event) => {
//   const value = itemInput.value;
//   if (value === "") {
//     alert("Please enter a task!");
//     return;
//   }
//   const newListItem = document.createElement("li");
//   newListItem.innerText = value;
//   shoppingList.appendChild(newListItem);
//  itemInput.value = "";
// });

// shoppingList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// // --------------------------------------------------------------
// // • The Toggle "Show/Hide" Button
// // Select secret-msg and toggle-msg-btn.
// // When clicked, check if the message is visible.
// // If visible -> Hide it and change button text to "Show Message".
// // If hidden -> Show it and change button text to "Hide Message".

//  const secretMsg = document.getElementById("secret-msg")
//  const toggleMsgBtn = document.getElementById("toggle-msg-btn")

//  toggleMsgBtn.addEventListener("click" , () => {
//   // secretMsg.style.color = "red"
//   if(toggleMsgBtn.innerText === "Hide Message"){
//     toggleMsgBtn.innerText = "Show Message"
//     secretMsg.style.display = "none";
//   }else {
//     secretMsg.style.display = "";
//     toggleMsgBtn.innerText = "Hide Message"
//   }
//  })

//  ====================================================================================================================

// const questions = [
//   { text: "What is 2+2?", answer: "4", options: ["2", "4", "5", "6"] },
//   {
//     text: "Capital of India?",
//     answer: "Delhi",
//     options: ["Mumbai", "Delhi", "Goa", "Pune"],
//   },
// ];

// const questions = [
//   { text: "What is 2 + 2?", answer: "4", options: ["2", "4", "5", "6"] },
//   {
//     text: "Capital of India?",
//     answer: "Delhi",
//     options: ["Mumbai", "Delhi", "Goa", "Pune"],
//   },
//   {
//     text: "Which language is used for Web?",
//     answer: "JavaScript",
//     options: ["Java", "Python", "JavaScript", "C++"],
//   },
//   {
//     text: "What does DOM stand for?",
//     answer: "Document Object Model",
//     options: [
//       "Data Object Model",
//       "Document Object Model",
//       "Desktop Orientation Mode",
//       "Digital Ordinance Model",
//     ],
//   },
// ];

// // --- STATE VARIABLES ---
// let currentQuestionIndex = 0;
// let score = 0;

// // --- SELECT ELEMENTS ---
// const questionText = document.getElementById("question-text");
// const scoreText = document.getElementById("quiz-score");
// const answerButtons = document.querySelectorAll(".answer-btn"); // Selects all 4 buttons

// // --- FUNCTION TO LOAD QUESTION ---
// function loadQuestion() {
//   // 1. Get the current question object
//   const currentQuestion = questions[currentQuestionIndex]; // 2. Update the Question Text

//   questionText.innerText = currentQuestion.text; // 3. Update the Buttons
//   // We loop through the 4 buttons and assign the matching option text

//   answerButtons.forEach((btn, index) => {
//     btn.innerText = currentQuestion.options[index]; // CRITICAL STEP: Handle the Click
//     // We use .onclick instead of addEventListener here to prevent adding
//     // duplicate listeners every time the question reloads.

//     btn.onclick = () => {
//       checkAnswer(currentQuestion.options[index]);
//     };
//   });
// }

// // --- FUNCTION TO CHECK ANSWER ---
// function checkAnswer(selectedOption) {
//   const correctOption = questions[currentQuestionIndex].answer; // 1. Check Logic

//   if (selectedOption === correctOption) {
//     alert("Correct! ");
//     score++;
//   } else {
//     alert(`Wrong!  The correct answer was: ${correctOption}`);
//   } // 2. Update Score Text

//   scoreText.innerText = "Score: " + score; // 3. Move to Next Question

//   currentQuestionIndex++; // 4. Check if Quiz is finished

//   if (currentQuestionIndex < questions.length) {
//     loadQuestion(); // Load next
//   } else {
//     // End of Quiz
//     questionText.innerText =
//       "Quiz Over! You scored " + score + "/" + questions.length; // Disable buttons so they can't click anymore

//     answerButtons.forEach((btn) => (btn.disabled = true));
//   }
// }

// // --- START THE APP ---
// loadQuestion();

// ==================================================================================================================



// let cart = [];
//  let addToCart = (name , price) => {
//   cart.push({name : name , price : price })
//   let cartList = document.getElementById("cart-list")
//   cartList.innerText = "";
//   for (let i = 0 ; i < cart.length ; i++){
//     let li = document.createElement("li");
//     li.textContent = cart[i].name + "$" + cart[i].price;
//     cartList.appendChild(li)
//   }
//   let total = 0;
//   for(let i = 0 ; i < cart.length ; i++){
//     total += cart[i].price
//   }
//   document.getElementById("total-price").textContent = total;
//  }

// ===========================================================================


// const submitBtn = document.getElementById("submit-btn");
// const username = document.getElementById("username");
// const userError = document.getElementById("user-error");

// const password = document.getElementById("pass");
// const passError = document.getElementById("pass-error");
// const confirmPass = document.getElementById("confirm-pass");
// const matchError = document.getElementById("match-error");

// function validateForm() {
//     let isValid = true;
//     if (username.value.length < 5) {
//         userError.style.display = 'block';
//         isValid = false;
//     } else {
//         userError.style.display = 'none';
//     }
//     if (password.value.length < 8) {
//         passError.style.display = 'block';
//         isValid = false;
//     } else {
//         passError.style.display = 'none';
//     }

//     if (password.value !== confirmPass.value || confirmPass.value === "") {
//         matchError.style.display = 'block';
//         isValid = false;
//     } else {
//         matchError.style.display = 'none';
//     }

//    if(isValid){
//     submitBtn.disabled = false;
//    }else {
//      submitBtn.disabled = true;
//    }
// }
// username.addEventListener('input', validateForm);
// password.addEventListener('input', validateForm);
// confirmPass.addEventListener('input', validateForm);

