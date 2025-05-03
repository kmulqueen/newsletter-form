const signupScreen = document.getElementById("signup");
const form = document.getElementById("signup-form");
const formInputBox = document.getElementById("email");
const formSubmitBtn = document.getElementById("submit-btn");
const formErrorSpan = document.getElementById("email-error");
const successScreen = document.getElementById("success");
const successEmail = document.getElementById("success-email");
const successBtn = document.getElementById("success-btn");
const HIDDEN_CLASS = "hidden";

/**
 * Hide/show error message based on input validty.
 * @param {*} input The input element to check validity on
 */
function toggleErrorMessage(input) {
  if (!input.validity.valid) {
    formErrorSpan.classList.remove(HIDDEN_CLASS);
  } else {
    formErrorSpan.classList.add(HIDDEN_CLASS);
  }
}

/**
 * Hide/show success message.
 */
function toggleSuccessMessage() {
  signupScreen.classList.toggle(HIDDEN_CLASS);
  successScreen.classList.toggle(HIDDEN_CLASS);

  successScreen.setAttribute(
    "aria-hidden",
    successScreen.classList.contains(HIDDEN_CLASS)
  );
  signupScreen.setAttribute(
    "aria-hidden",
    signupScreen.classList.contains(HIDDEN_CLASS)
  );
}

/**
 * Shows error message if input is invalid and user clicks out of input element.
 */
function handleBlur() {
  // Clear any custom validity message when user interacts with field
  formInputBox.setCustomValidity("");

  // If field is empty when blurring, also hide the error message
  if (formInputBox.value.length === 0) {
    formErrorSpan.classList.add(HIDDEN_CLASS);
  } else {
    // Only validate non-empty fields on blur
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

  // Check for empty value explicitly and set custom validity
  if (formInputBox.value.length === 0) {
    formInputBox.setCustomValidity("Valid email required"); // This message will be hidden. See formInputBox 'invalid' event listener.

    // Force the input to show as invalid, triggering the :user-invalid styles
    formInputBox.reportValidity();
    formErrorSpan.classList.remove(HIDDEN_CLASS);

    // Stop further processing if empty
    return;
  }

  // Clear any custom validity message if the field has a value
  formInputBox.setCustomValidity("");

  // Toggle error message depending on validity of input
  toggleErrorMessage(formInputBox);

  // Show success message and update email if valid submission
  if (formInputBox.validity.valid) {
    successEmail.textContent = formInputBox.value;
    toggleSuccessMessage();
    form.reset();
  }
}

/**
 * Clears custom validity when user starts typing.
 *
 */
function resetValidationStateOnInput() {
  formInputBox.setCustomValidity("");
}

// Prevent the constraint validation API message bubble from appearing
formInputBox.addEventListener(
  "invalid",
  (e) => {
    e.preventDefault();
  },
  true
);
formInputBox.addEventListener("blur", handleBlur);
formInputBox.addEventListener("input", resetValidationStateOnInput);
form.addEventListener("submit", handleSubmit);
successBtn.addEventListener("click", toggleSuccessMessage);
