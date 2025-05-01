const form = document.getElementById("signup-form");
const formInputBox = document.getElementById("email");
const formSubmitBtn = document.getElementById("submit-btn");
const formErrorSpan = document.getElementById("email-error");

function handleSubmit(e) {
  e.preventDefault();

  if (!formInputBox.validity.valid) {
    formErrorSpan.classList.toggle("hidden");
  } else {
    if (!formErrorSpan.classList.contains("hidden")) {
      formErrorSpan.classList.toggle("hidden");
    }
  }
}

form.addEventListener("submit", handleSubmit);
