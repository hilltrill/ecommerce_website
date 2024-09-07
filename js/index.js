// Select the buttons
const loginButton = document.querySelector(".login-btn");
const signupButton = document.querySelector(".signup-btn");
const shopNowButton = document.querySelector(".shop-now-btn");
const learnMoreButton = document.querySelector(".learn-more-btn");

// Login Button EventListener
loginButton.addEventListener("click", function (){
    window.location.href = "login.html";
});

// Event listener for the Sign Up button
signupButton.addEventListener("click", function(){
    window.location.href = "signup.html";   
});

// Event listener for Shop Now button

shopNowButton.addEventListener("click", function() {
    window.location.href = "shopnow.html";
}); 

// Event listener for Learn More button

learnMoreButton.addEventListener("click", function() {
    window.location.href = "learnmore.html";
}); 