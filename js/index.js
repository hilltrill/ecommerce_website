document.addEventListener("DOMContentLoaded", function () {
    // Handle the Login button click
    const loginButton = document.querySelector(".login-btn");
    loginButton.addEventListener("click", function (){
        console.log("Login button clicked");
    });

    // Handle the Sign up button click
    const signupButton = document.querySelector(".signup-btn");
    signupButton.addEventListener("click", function(){
        console.log("Sign up button clicked");
        
    });
});