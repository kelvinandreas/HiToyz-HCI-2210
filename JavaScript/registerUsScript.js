// Kelvin Andreas - 2602121794
function validateRegister() {
  let name = document.getElementById("inputName").value;
  let password = document.getElementById("inputPassword").value;
  let email = document.getElementById("inputEmail").value;
  let date = document.getElementById("inputDate").value;
  let checkBox = document.getElementById("inputCheckBox");

  if (validateName(name) == false) return;
  else if (validatePassword(password) == false) return;
  else if (validateEmail(email) == false) return;
  else if (validateDate(date) == false) return;
  else if (validateCheckBox(checkBox) == false) return;
  else {
    window.alert("Registration successful!");
    window.location.href = "./homePage.html";
  }
}

function validateName(name) {
  if (name.length < 5) {
    window.alert("Name must be at least 5 characters long");
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.length < 8) {
    window.alert("Password must be at least 8 characters long");
    return false;
  }
  return true;
}

function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".com")) {
    window.alert("Invalid email address");
    return false;
  }
  return true;
}

function validateDate(date) {
  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 13,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const inputDate = new Date(date);
  if (inputDate > minDate) {
    window.alert("You must be at least 13 years old to register");
    return false;
  }
  return true;
}

function validateCheckBox(checkBox) {
  if (!checkBox.checked) {
    window.alert("Please agree to the regulations");
    return false;
  }
  return true;
}
