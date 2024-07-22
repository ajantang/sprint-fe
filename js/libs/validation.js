const PW_MIN_LENGTH = 8;
// state of warning
let emailWarn = false;
let pwWarn = false;
let pwCheckWarn = false;

export function deleteWarningBorder(inputSecElement) {
  let inputElement = inputSecElement.querySelector("input");

  inputElement?.classList.toggle("red_border", false);
}

export function deleteWarningText(inputSecElement) {
  let textElement = inputSecElement.querySelector("a");
  textElement?.remove();
}

function setEmailWarn(
  emailSecElement,
  warn,
  emailElement = emailSecElement.querySelector("input")
) {
  if (emailWarn === warn) {
    return;
  }

  if (warn) {
    emailWarn = warn;
    let loginEmailInvalidMessage = document.createElement("a");
    loginEmailInvalidMessage.classList.add("warning_text");
    loginEmailInvalidMessage.textContent = "잘못된 이메일 형식입니다.";
    emailSecElement.append(loginEmailInvalidMessage);

    emailElement.classList.toggle("red_border", true);
  } else {
    emailWarn = warn;
    deleteWarningBorder(emailSecElement);
    deleteWarningText(emailSecElement);
  }
}

function validateEmail(emailElement) {
  return emailElement.checkValidity();
}

export function isValidEmail(
  emailSecElement,
  emailElement = emailSecElement.querySelector("input")
) {
  let warn = !validateEmail(emailElement);
  setEmailWarn(emailSecElement, warn, emailElement);
}

export function checkPwCheck(pwSecElement) {
  isValidPwCheck(
    document.getElementById("login_pw_check").parentElement.parentElement,
    pwSecElement
  );
}

function setPwWarn(
  pwSecElement,
  warn,
  pwElement = pwSecElement.querySelector("input")
) {
  if (pwWarn === warn) {
    return;
  }

  if (warn) {
    pwWarn = warn;
    let loginPwInvalidMessage = document.createElement("a");
    loginPwInvalidMessage.classList.add("warning_text");
    loginPwInvalidMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    pwSecElement.append(loginPwInvalidMessage);

    pwElement.classList.toggle("red_border", true);
  } else {
    pwWarn = warn;
    deleteWarningBorder(pwSecElement);
    deleteWarningText(pwSecElement);
  }
}

function validatePw(pwElement) {
  return pwElement.value.length >= (PW_MIN_LENGTH - 1);
}

export function isValidPw(
  pwSecElement,
  pwElement = pwSecElement.querySelector("input")
) {
  let warn = !validatePw(pwElement);
  setPwWarn(pwSecElement, warn, pwElement);
}

function setPwCheckWarn(
  pwCheckSecElement,
  warn,
  pwCheckElement = pwCheckSecElement.querySelector("input")
) {
  if (pwCheckWarn === warn) {
    return;
  }

  if (warn) {
    pwCheckWarn = warn;
    let loginPwCheckInvalidMessage = document.createElement("a");
    loginPwCheckInvalidMessage.classList.add("warning_text");
    loginPwCheckInvalidMessage.textContent =
      "비밀번호가 일치하지 않습니다.";
    pwCheckSecElement.append(loginPwCheckInvalidMessage);

    pwCheckElement.classList.toggle("red_border", true);
  } else {
    pwCheckWarn = warn;
    deleteWarningBorder(pwCheckSecElement);
    deleteWarningText(pwCheckSecElement);
  }
}

function validatePwCheck(pwCheckElement, pwElement) {
  return pwCheckElement.value === pwElement.value;
}

export function isValidPwCheck(
  pwCheckSecElement,
  pwSecElement,
  pwCheckElement = pwCheckSecElement.querySelector("input"),
  pwElement = pwSecElement.querySelector("input")
) {
  let warn = !validatePwCheck(pwCheckElement, pwElement);
  setPwCheckWarn(pwCheckSecElement, warn, pwCheckElement);
}

export function canClickLoginButton(emailElement, pwElement) {
  if (validateEmail(emailElement) && validatePw(pwElement)) {
    document
      .getElementById("btn_login")
      .classList.toggle("btn_active_style", true);
  } else {
    document
      .getElementById("btn_login")
      .classList.toggle("btn_active_style", false);
  }
}

export function canClickSignupButton(emailElement, pwElement, pwCheckElement) {
  if (
    validateEmail(emailElement) &&
    validatePw(pwElement) &&
    validatePwCheck(pwCheckElement, pwElement)
  ) {
    document
      .getElementById("btn_signup")
      .classList.toggle("btn_active_style", true);
  } else {
    document
      .getElementById("btn_signup")
      .classList.toggle("btn_active_style", false);
  }
}

export function toggleVisibleIcon(inputElement, imgElement) {
  if (inputElement.type == "password") {
    inputElement.type = "text";
    imgElement.src = "/Images/btn_visibility_off.svg";
  } else {
    inputElement.type = "password";
    imgElement.src = "/Images/btn_visibility_on.svg";
  }
}
