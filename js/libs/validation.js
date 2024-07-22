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

export function is_valid_email(
  emailSecElement,
  emailElement = emailSecElement.querySelector("input")
) {
  let warn = !validateEmail(emailElement);
  setEmailWarn(emailSecElement, warn, emailElement);
}

export function checkPwCheck(pw_sec_el) {
  console.log("meta name test" + "pw_sec_el : " + pw_sec_el);
  is_valid_pw_check(
    document.getElementById("login_pw_check").parentElement.parentElement,
    pw_sec_el
  );
}

function set_pwWarn(
  pw_sec_el,
  warn,
  pw_el = pw_sec_el.querySelector("input")
) {
  if (pwWarn === warn) {
    return;
  }

  if (warn) {
    pwWarn = warn;
    let login_pw_invalid_message = document.createElement("a");
    login_pw_invalid_message.classList.add("warning_text");
    login_pw_invalid_message.textContent = "비밀번호를 8자 이상 입력해주세요.";
    pw_sec_el.append(login_pw_invalid_message);

    pw_el.classList.toggle("red_border", true);
  } else {
    pwWarn = warn;
    deleteWarningBorder(pw_sec_el);
    deleteWarningText(pw_sec_el);
  }
}

function validate_pw(pw_el) {
  return pw_el.value.length >= PW_MIN_LENGTH;
}

export function is_valid_pw(
  pw_sec_el,
  pw_el = pw_sec_el.querySelector("input")
) {
  let warn = !validate_pw(pw_el);
  set_pwWarn(pw_sec_el, warn, pw_el);
}

function set_pwCheckWarn(
  pw_check_sec_el,
  warn,
  pw_check_el = pw_check_sec_el.querySelector("input")
) {
  if (pwCheckWarn === warn) {
    return;
  }

  if (warn) {
    pwCheckWarn = warn;
    let login_pw_check_invalid_message = document.createElement("a");
    login_pw_check_invalid_message.classList.add("warning_text");
    login_pw_check_invalid_message.textContent =
      "비밀번호가 일치하지 않습니다.";
    pw_check_sec_el.append(login_pw_check_invalid_message);

    pw_check_el.classList.toggle("red_border", true);
  } else {
    pwCheckWarn = warn;
    deleteWarningBorder(pw_check_sec_el);
    deleteWarningText(pw_check_sec_el);
  }
}

function validate_pw_check(pw_check_el, pw_el) {
  return pw_check_el.value === pw_el.value;
}

export function is_valid_pw_check(
  pw_check_sec_el,
  pw_sec_el,
  pw_check_el = pw_check_sec_el.querySelector("input"),
  pw_el = pw_sec_el.querySelector("input")
) {
  let warn = !validate_pw_check(pw_check_el, pw_el);
  console.log(
    "func : is_valid_pw_check : " + pw_check_el.value + " != " + pw_el.value
  );
  set_pwCheckWarn(pw_check_sec_el, warn, pw_check_el);
}

export function can_click_login_button(emailElement, pw_el) {
  console.log("can_click_login_button");
  if (validateEmail(emailElement) && validate_pw(pw_el)) {
    console.log("can click login button");
    document
      .getElementById("btn_login")
      .classList.toggle("btn_active_style", true);
  } else {
    console.log("cannot click login button");
    document
      .getElementById("btn_login")
      .classList.toggle("btn_active_style", false);
  }
}

export function can_click_sugnup_button(emailElement, pw_el, pw_check_el) {
  if (
    validateEmail(emailElement) &&
    validate_pw(pw_el) &&
    validate_pw_check(pw_check_el, pw_el)
  ) {
    console.log("can click signup button");
    document
      .getElementById("btn_signup")
      .classList.toggle("btn_active_style", true);
  } else {
    console.log("cannot click signup button");
    document
      .getElementById("btn_signup")
      .classList.toggle("btn_active_style", false);
  }
}

export function toggle_visible_icon(inputElement, img_el) {
  if (inputElement.type == "password") {
    inputElement.type = "text";
    img_el.src = "/Images/btn_visibility_off.svg";
  } else {
    inputElement.type = "password";
    img_el.src = "/Images/btn_visibility_on.svg";
  }
}
