// Select the buttons
const loginButton = document.querySelector(".login-btn");
const signupButton = document.querySelector(".signup-btn");

// Login Button EventListener
loginButton.addEventListener("click", function () {
  window.location.href = "login.html";
  console.log("Login button clicked!");
});

// Event listener for the Sign Up button
signupButton.addEventListener("click", function () {
  window.location.href = "signup.html";
  console.log("Sign Up button clicked!");
});
