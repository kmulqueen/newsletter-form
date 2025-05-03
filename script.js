const signupScreen = document.getElementById("signup");
const form = document.getElementById("signup-form");
const formInputBox = document.getElementById("email");
const formSubmitBtn = document.getElementById("submit-btn");
const formErrorSpan = document.getElementById("email-error");
const successScreen = document.getElementById("success");
const successEmail = document.getElementById("success-email");
const successBtn = document.getElementById("success-btn");

/**
 * Hide/show error message based on input validty.
 * @param {*} input The input element to check validity on
 */
function toggleErrorMessage(input) {
  if (!input.validity.valid) {
    formErrorSpan.classList.remove("hidden");
  } else {
    formErrorSpan.classList.add("hidden");
  }
}

/**
 * Hide/show success message.
 */
function toggleSuccessMessage() {
  signupScreen.classList.toggle("hidden");
  successScreen.classList.toggle("hidden");
}

/**
 * Shows error message if input is invalid and user clicks out of input element.
 */
function handleBlur() {
  // Only validate if the user has interacted with the field
  if (formInputBox.value !== "") {
    toggleErrorMessage(formInputBox);
  }
}

/**
 * Handles form submission. Checks validity of inputs and handles errors.
 *
 * @param {*} e Event
 */
function handleSubmit(e) {
  e.preventDefault();

  toggleErrorMessage(formInputBox);

  if (formInputBox.validity.valid) {
    successEmail.textContent = formInputBox.value;
    toggleSuccessMessage();
  }
}

formInputBox.addEventListener("blur", handleBlur);
form.addEventListener("submit", handleSubmit);
successBtn.addEventListener("click", toggleSuccessMessage);
