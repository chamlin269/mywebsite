function menuFunction() {
  var menuBar = document.getElementById("ulo");

  if (menuBar.className === "head") {
    menuBar += "responsive";
  } else {
    menuBar.className = "head";
  }
}
var typed = new Typed(".typing", {
  strings: ["Programmer", "Web Developer"],
  typeSpeed: 200,
  BackSpeed: 10,
  loop: true,
});
   var content = document.getElementsByTagName("body")[0];
   var darkMode = document.getElementById("dark-mode");
   darkMode.addEventListener("click", function () {
     darkMode.classList.toggle("active");
     content.classList.toggle("night");
   });
