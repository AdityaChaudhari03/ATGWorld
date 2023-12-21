// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

//Filter
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide(1000);
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

//Signup Modal
document.addEventListener("DOMContentLoaded", function () {
  const signupModal = document.getElementById("signupModal");
  const signupButton = document.querySelector(".navbar-toggler");
  const closeBtn = document.querySelector(".close");
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");
  const switchToSignIn = document.getElementById("switchToSignIn");
  const switchToSignUp = document.getElementById("switchToSignUp");

  signupButton.addEventListener("click", function () {
    signupModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    signupModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === signupModal) {
      signupModal.style.display = "none";
    }
  });

  switchToSignIn.addEventListener("click", function () {
    signupForm.style.display = "none";
    signinForm.style.display = "block";
  });

  switchToSignUp.addEventListener("click", function () {
    signupForm.style.display = "block";
    signinForm.style.display = "none";
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your signup logic here
    console.log("Username:", document.getElementById("username").value);
    console.log("Password:", document.getElementById("password").value);
    // Add more form field values as needed
    signupModal.style.display = "none";
  });

  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your signin logic here
    console.log(
      "Signin Username:",
      document.getElementById("signinUsername").value
    );
    console.log(
      "Signin Password:",
      document.getElementById("signinPassword").value
    );
    // Add more form field values as needed
    signupModal.style.display = "none";
  });
});
