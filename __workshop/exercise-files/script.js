// add js here

// agreement to terms and conditions Alert

let checkBox = document.getElementById("terms");
let submitForm = document;
let passwordText = document.getElementById("password");
let confirmPwd = document.getElementById("confirm");
let submitBtn = document.querySelector(".submit");

// console.log(checkBox.checked);

// check if terms accepted
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (checkBox.checked !== true) {
    window.alert("You need to agree to the terms.");
  } else {
    console.log("success");
  }

  checkPassword(passwordText);
});

// check if password valid
// console.log(passwordText);

function checkPassword(passwordText) {
  passw = /^[A-Za-z]\w{10,20}$/;
  if (passwordText.value.match(passw)) {
    window.alert("password accepted");
    return true;
  } else if (passwordText.value !== confirmPwd.value) {
    confirmPwd.classList.add("mistake");
    confirmPwd.autofocus = true;
    return false;
  } else {
    document.getElementById(
      "error"
    ).innerHTML = `Your password is too short! Please provide a password that is at least 10 characters long.`;
    passwordText.classList.add("mistake");
    // window.alert("password does not match requirements");
    return false;
  }
}