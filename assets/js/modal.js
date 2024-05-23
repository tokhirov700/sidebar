var loginBtn = document.getElementById("login-btn");
var authModal = document.getElementById("auth-modal");
var loginForm = document.getElementById("login-form");
var closemodal = document.getElementById("closemodal");
loginBtn.addEventListener("click", function () {
   authModal.style.display = "flex";
});

loginForm.addEventListener("click", function () {
   authModal.style.display = "none";
});
closemodal.addEventListener("click", function () {
   authModal.style.display = "none";
});

//     authModal.addEventListener("click", function () {
//        authModal.style.display = "none";
//     });
