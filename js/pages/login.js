import { USER_DATA } from "/data/user_data.js";
import {
  isValidEmail,
  isValidPw,
  canClickLoginButton,
  toggleVisibleIcon,
} from "/js/libs/validation.js";

// need to change after html structure
const loginEmail = document.getElementById("login_email");

const loginEmailSec = loginEmail.parentElement;
const loginPw = document.getElementById("login_pw");
const loginPwSec = loginPw.parentElement.parentElement;
const loginPwShowImg = document.getElementById("login_pw_show_img");

const btnLogin = document.getElementById("btn_login");

const dialogWarn = document.getElementsByClassName("dialog_warn")[0];
const dialogText = document.getElementById("dialog_text");
const btnWrongPwDialog = document.getElementById("btn_dialog");

// email focusin event : delete login email input & remove warning text tag
loginEmail.addEventListener("focusin", () => {
  isValidEmail(loginEmailSec);
});
// email focusout event : check input value validation
loginEmail.addEventListener("focusout", () => {
  isValidEmail(loginEmailSec);
  canClickLoginButton(loginEmail, loginPw);
});

// pw focusin event :
loginPw.addEventListener("focusin", () => {
  isValidPw(loginPwSec);
});
// pw focusout event :
loginPw.addEventListener("keypress", () => {
  isValidPw(loginPwSec);
  console.log("keypress");
  canClickLoginButton(loginEmail, loginPw);
});

// pw focus event :F
loginPwShowImg.addEventListener("click", () => {
  toggleVisibleIcon(loginPw, loginPwShowImg);
});

btnWrongPwDialog.addEventListener("click", () => dialogWarn.close());

//
btnLogin.addEventListener("click", () => {
  if (btnLogin.classList.contains("btn_active_style")) {
    let email = false;
    let pw = false;

    USER_DATA.forEach((el) => {
      if (el.email === loginEmail.value) {
        email = true;

        if (el.password === loginPw.value) {
          window.open("/items", "_self");
          pw = true;
          return;
        } else {
          pw = false;
          return;
        }
      }
    });

    if (email && !pw) {
      // 비밀번호가 일치하지 않습니다.
      dialogText.textContent = "비밀번호가 일치하지 않습니다.";
      dialogWarn.showModal();
    } else if (!eamil && !pw) {
      dialogText.textContent = "등록되지 않은 이메일입니다.";
      dialogWarn.showModal();
    }
  }
});
