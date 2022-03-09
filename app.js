const showPassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector(".submit-button");
const passwordInput = document.querySelector(".password-input");

showPassword.addEventListener("click", viewPassword);

function viewPassword(e) {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
  console.log(`You want to see your password!, it's ${password.value}`);
}

confirmPassword.addEventListener("keyup", checkPasswords);

function checkPasswords() {
  console.log(`password is ${password.value}`);
  console.log(`confirm password is ${confirmPassword.value}`);
  if (password.value == confirmPassword.value) {
    confirmPassword.classList.add("success");
    confirmPassword.classList.remove("error");
    password.classList.add("success");
    password.classList.remove("error");
    submitButton.disabled = false;
  } else {
    console.log(`NO MATCH!`);
    confirmPassword.classList.remove("success");
    confirmPassword.classList.add("error");
    password.classList.remove("success");
    password.classList.add("error");
    submitButton.disabled = true;
  }
}

// Strength check

let timeout;
let strengthBar = document.querySelector(".strength-bar");
let mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");

password.addEventListener("keydown", checkStrength);
password.addEventListener("keydown", checkStrength);

function checkStrength() {
  console.log(`password is ${password.value}`);
  if (strongPassword.test(password.value)) {
    console.log("STRONG!!");
    strengthBar.classList.add("strong");
    strengthBar.classList.remove("weak");
    strengthBar.classList.remove("medium");
  } else if (mediumPassword.test(password.value)) {
    console.log("MEDIUM");
    strengthBar.classList.add("medium");
    strengthBar.classList.remove("weak");
  } else {
    console.log("WEAK!");
    strengthBar.classList.add("weak");
  }

  timeout = setTimeout(() => checkStrength(password.value), 500);

  if (password.value.length !== 0) {
  } else {
    strengthBar.classList.remove("weak");
    strengthBar.classList.remove("medium");
    strengthBar.classList.remove("strong");
  }
}
