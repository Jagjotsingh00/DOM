const usernameField = document.getElementById("username");  
const passwordField = document.getElementById("pass");
const confirmPasswordField = document.getElementById("confirm-pass");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("signup-form")

const showError = (id) => {
document.getElementById(id).style.display = "block"  // show error dynamic
}

const hideError = (id) => {
document.getElementById(id).style.display = "none"   // hide error dynamic
}

const validateForm = () => {
  let username = usernameField.value;
  let password = passwordField.value;
  let confirmPassword = confirmPasswordField.value;
  let isvalid = true;

  if (username.length < 5){
    // document.getElementById("user-error").style.display = "block"  // show error
    showError("user-error");
    isvalid = false;
  }else{
    // document.getElementById("user-error").style.display = "none"  // hide error
    hideError("user-error");
  }

  if(password.length < 8) {
    // document.getElementById("pass-error").style.display = "block"
    showError("pass-error");
    isvalid = false;
  }else{
    // document.getElementById("pass-error").style.display = "none"
    hideError("pass-error");
  }

  if( password !== confirmPassword) {
    // document.getElementById("match-error").style.display = "block";
    showError("match-error");
    isvalid = false;
  }else{
    // document.getElementById("match-error").style.display = "none"
    hideError("match-error")
  }

  submitBtn.disabled = !isvalid;
}

form.addEventListener("input" ,validateForm);  // getting all input type values of form

// usernameField.addEventListener("input" , validateForm)
// passwordField.addEventListener("input" ,validateForm)
// confirmPasswordField.addEventListener("input" , validateForm)

// [usernameField,passwordField,confirmPasswordField].forEach(i => {   // another way to call validate form using array method
//   i.addEventListener("input", validateForm);
// });