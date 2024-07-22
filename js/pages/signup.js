import { USER_DATA } from "/data/user_data.js";
import {
  isValidEmail,
  isValidPw,
  isValidPwCheck,
  checkPwCheck,
  canClickSignupButton,
  toggleVisibleIcon,
} from "/js/libs/validation.js";

const signEmail = document.getElementById("login_email");
const signEmailSec = signEmail.parentElement;

const signPw = document.getElementById("login_pw");
const signPwSec = signPw.parentElement.parentElement;
const signPwShowImg = document.getElementById("login_pw_show_img");

const signPwCheck = document.getElementById("login_pw_check");
const signPwCheckSec = signPwCheck.parentElement.parentElement;
const signPwCheckShowImg = document.getElementById(
  "login_pw_check_show_img"
);

const btnSignup = document.getElementById("btn_signup");

const dialogWarn = document.getElementsByClassName("dialog_warn")[0];
const dialogText = document.getElementById("dialog_text");
const btnWrongPwDialog = document.getElementById("btn_dialog");

signEmail.addEventListener("focusout", () => {
  isValidEmail(signEmailSec);
  canClickSignupButton(signEmail, signPw, signPwCheck);
});
signEmail.addEventListener("focusin", () => isValidEmail(signEmailSec));

signPw.addEventListener("focusout", () => {
  checkPwCheck(signPwSec);
  isValidPw(signPwSec);
  canClickSignupButton(signEmail, signPw, signPwCheck);
});
signPw.addEventListener("focusin", () => isValidPw(signPwSec));

signPwShowImg.addEventListener("click", function () {
  toggleVisibleIcon(signPw, signPwShowImg);
});

signPwCheck.addEventListener("focusout", () => {
  isValidPwCheck(signPwCheckSec, signPwSec);
  canClickSignupButton(signEmail, signPw, signPwCheck);
});
signPwCheck.addEventListener("focusin", () =>
  isValidPwCheck(signPwCheckSec, signPwSec)
);

signPwCheckShowImg.addEventListener("click", function () {
  toggleVisibleIcon(signPwCheck, signPwCheckShowImg);
});

btnWrongPwDialog.addEventListener("click", () => dialogWarn.close());

btnSignup.addEventListener("click", () => {
  if (btnSignup.classList.contains("btn_active_style")) {
    let userId = Array.from(USER_DATA.map((x) => x.email));

    if (userId.includes(signEmail.value)) {
      dialogText.textContent = "사용 중인 이메일입니다.";
      dialogWarn.showModal();
      return;
    }

    window.open("/login", "_self");
  }
});
