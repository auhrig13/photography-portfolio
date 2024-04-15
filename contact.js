// CONTACT PAGE--FORM ERRORS

const contactForm = document.getElementById("contact-form");

// CONTACT FORM--CLEARS PREVIOUS "THANK YOU"

contactForm.addEventListener("submit", clearThanks)

function clearThanks(e) {
    e.preventDefault();
    const formSuccess = document.getElementById("form-success")
    formSuccess.innerText = ""

}


// CONTACT FORM--VALIDATES IF THERE IS NAME ENTERED

contactForm.addEventListener("submit", validateName);

function validateName(e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.length
    const lastName = document.getElementById("last-name").value.length
    const errorName = document.getElementById("error-name")

    if (firstName < 1 && lastName < 1) {
        errorName.innerText = "Please enter valid first and last name"
    } else {
        errorName.innerText = ""
    }
}

// CONTACT FORM--VALIDATES IF THERE IS PHONE NUMBER ENTERED

contactForm.addEventListener("submit", validatePhone);

function validatePhone(e) {
    e.preventDefault();

    const areaCode = document.getElementById("phone-area-code").value.length
    const phonePrefix = document.getElementById("phone-prefix").value.length
    const phoneLineNumber = document.getElementById("phone-line-number").value.length
    const errorPhone = document.getElementById("error-phone")

    if (areaCode !== 3 || phonePrefix !== 3 || phoneLineNumber !== 4) {
        errorPhone.innerText = "Please enter valid phone number"
    } else {
        errorPhone.innerText = ""
    }

}

// CONTACT FORM--VALIDATES IF THERE IS MESSAGE ENTERED

contactForm.addEventListener("submit", validateMessage)

function validateMessage(e) {
    e.preventDefault();
    const message = document.getElementById("message").value.length
    const errorMessage = document.getElementById("error-message")
    if (message < 2) {
        errorMessage.innerText = "Please enter a message"
    } else {
        errorMessage.innerText = ""
    }

}

// CONTACT FORM--SUCCESS MESSAGE

contactForm.addEventListener("submit", successMessage)

function successMessage(e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value.length
    const lastName = document.getElementById("last-name").value.length
    const areaCode = document.getElementById("phone-area-code").value.length
    const phonePrefix = document.getElementById("phone-prefix").value.length
    const phoneLineNumber = document.getElementById("phone-line-number").value.length
    const message = document.getElementById("message").value.length
    const formSuccess = document.getElementById("form-success")
    if (firstName > 1 && lastName > 1 && areaCode === 3 && phonePrefix === 3 && phoneLineNumber === 4 && message > 2) {
        formSuccess.innerText = "Thank you!"
    }
}