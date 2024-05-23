var logo = document.getElementById("logo");
var sidebar = document.getElementById("sidebar");
var closebtn = document.getElementById("closebtn")
var sidebartytle = document.getElementById("sidebartytle")
var sidebartext = document.getElementById("sidebartext")


logo.addEventListener("click", function () {
   //    sidebar.style.left = "0px";
   sidebar.classList.toggle("active-sidebar");
});
closebtn.addEventListener("click", function () {
   sidebar.classList.remove("active-sidebar");
});
sidebartytle.addEventListener("click", function () {
   sidebar.classList.remove("active-sidebar");
});
sidebartext.addEventListener("click", function () {
   sidebar.classList.remove("active-sidebar");
});

