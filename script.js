var switchDot = 0;
var registerText1 = document.querySelector(".login_textLogin");
var registerText2 = document.querySelector(".login_textRegister");
registerText2.style.color = "grey";
function loginOrRegister() {
  var headSquare = document.querySelector(".login_btnSquare");
  var registerContainer = document.querySelector(".login_registerContainer");
  var loginContainer = document.querySelector(".login_loginContainer");
  var boxRight = document.querySelector(".getWidth").offsetWidth;
  switch (switchDot) {
    case 0:
      registerContainer.style.display = "block";
      loginContainer.style.display = "none";
      headSquare.style.transform = `translateX(${boxRight + "px"})`;
      registerText1.style.color = "grey";
      registerText2.style.color = "white";

      switchDot = 1;
      break;

    case 1:
      registerContainer.style.display = "none";
      loginContainer.style.display = "block";
      headSquare.style.transform = "translateX(0px)";
      registerText1.style.color = "white";
      registerText2.style.color = "grey";

      switchDot = 0;
      break;
  }
}
function showPass() {
  var pass = document.querySelector(".getPass");
  var showBtn = document.querySelector(".showBtn");
  var getAttr = pass.getAttribute("type");
  pass.setAttribute("type", "text");
  showBtn.innerHTML = "hide";
  if (getAttr == "text") {
    pass.setAttribute("type", "password");
    showBtn.innerHTML = "show";
  }
  document.querySelector(".consoleContainer").innerHTML = getAttr;
}
