let username = "";
let password = "";
const passwordInput = document.getElementById("password");
const usernameValidation = function () {
  const usernameInput = document.getElementById("username");
  username = usernameInput.value;

  if (username === null || username === "") {
    // console.log("cannot be empty");
    usernameInput.style = "border-color: greenyellow, color: greenyellow;";
    return;
  }

  if (username.length <= 3) {
    console.log("cannot be less or equal to 3");
    usernameInput.style = "border-color: red; color: red;";
  } else if (username.length > 10) {
    username = username.slice(0, 10);
    usernameInput.value = username;
    console.log("cannot exceed 10 characters");
    usernameInput.style = "border-color: red; color: red;";
    return;
  } else {
    // console.log(`username = ${username}`);
    usernameInput.style = "border-color: greenyellow, color: greenyellow;";
    return true;
  }
};

const passwordValidation = function () {
  password = passwordInput.value;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  if (password === null || password === "") {
    // console.log("cannot be empty");
    passwordInput.style = "border-color: greenyellow, color: greenyellow;";
    return;
  }

  if (password.length <= 3) {
    console.log("cannot be less or equal to 3");
    passwordInput.style = "border-color: red; color: red;";
  } else if (password.length > 20) {
    password = password.slice(0, 20);
    passwordInput.value = password;
    console.log("cannot exceed 20 characters");
    passwordInput.style = "border-color: red;";
  } else if (!passwordRegex.test(password)) {
    console.log(
      `Password must contain at least one letter, one number, and one symbol.`
    );
    passwordInput.style = "border-color: red; color: red;";
  } else {
    // console.log(`password = ${password}`);
    passwordInput.style = "border-color: greenyellow; color: greenyellow;";
    return true;
  }
};

const togglePassword = function () {
  event.preventDefault();
  const passwordField = passwordInput;
  const icon = document.getElementById("locker-icon");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    icon.className = "fas fa-lock-open";
  } else {
    passwordField.type = "password";
    icon.className = "fas fa-lock";
  }
};

const login = function () {
  if (usernameValidation() === true && passwordValidation() === true) {
    window.location.href = "demoSiteHome.html";
    return false;
  } else {
    return false;
  }
};
