const emailForm = document.querySelector("#form");
const inputField = document.querySelector("#form__email-input-field");
const errorMessage = document.querySelector("#form__error-message");
const validFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateForm(e) {
    e.preventDefault();

    if (!inputField.value || !inputField.value.match(validFormat)) {
        inputField.classList.add("form__email-input-field--invalid");
        errorMessage.classList.remove("form__error-message--hidden");
    } else {
        inputField.value = "";
        inputField.classList.remove("form__email-input-field--invalid");
        errorMessage.classList.add("form__error-message--hidden");
    }
}

emailForm.addEventListener("submit", validateForm);