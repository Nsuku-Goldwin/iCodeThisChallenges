const eyeOpen = document.getElementById("eye-open");
const eyeClose = document.getElementById("eye-close");
const password = document.getElementById("password");
const toggleOn = document.getElementById("toggle-on");
const toggleOff = document.getElementById("toggle-off");
let pass = document.getElementById("password");

let count = 2;
let toggleCounter = 2;
toggleEye();
toggle();
function toggleEye() {
  if (count % 2 === 0) {
    eyeOpen.style.display = "none";
    eyeClose.style.display = "block";
    password.type = "Password";
  } else {
    eyeOpen.style.display = "block";
    eyeClose.style.display = "none";
    password.type = "Text";
  }
  count++;
}

function toggle() {
  if (toggleCounter % 2 === 0) {
    toggleOn.style.display = "block";
    toggleOff.style.display = "none";
  } else {
    toggleOn.style.display = "none";
    toggleOff.style.display = "block";
  }
  toggleCounter++;
}

function logIn() {
  let message = pass.value;
  if (message === "") {
    alert("Password field required");
  } else {
    alert("Sign in successful");
  }
  pass.value = "";
}
