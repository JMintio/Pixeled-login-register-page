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
  var rPass = document.querySelector(".rGetPass");
  var rPass2 = document.querySelector(".rGetPass2");
  var showBtn = document.querySelector(".showBtn");
  var getAttr = pass.getAttribute("type");
  pass.setAttribute("type", "text");
  rPass.setAttribute("type", "text");
  rPass2.setAttribute("type", "text");
  showBtn.innerHTML = "hide";
  if (getAttr == "text") {
    pass.setAttribute("type", "password");
    rPass.setAttribute("type", "password");
    rPass2.setAttribute("type", "password");
    showBtn.innerHTML = "show";
  }
  document.querySelector(".consoleContainer").innerHTML = getAttr;
}
function registerBtn() {
  var register = document.querySelector(".rGetPass");
  var register2 = document.querySelector(".rGetPass2");
  var msgPassMatch = document.querySelector(".msgPassMatch");
  register.setAttribute("type", "text");
  register2.setAttribute("type", "text");
  var registerValue = register.value;
  var registerValue2 = register2.value;
  if (registerValue == registerValue2) {
    msgPassMatch.style.color = "green";
    msgPassMatch.innerHTML = "ok";
  } else {
    msgPassMatch.style.color = "red";
    msgPassMatch.innerHTML = "password doesn't match";
  }
  register.setAttribute("type", "password");
  register2.setAttribute("type", "password");
}
