// Query select the form and the form inputs
const form = document.querySelector('#sign-up-form');
const firstName = form.querySelector('input[name="firstName"');
const lastName = form.querySelector('input[name="lastName"]');
const email = form.querySelector('input[name="email"]');
const phoneNum = form.querySelector('input[name="phoneNum"]');
const pwd = form.querySelector('input[name="pwd"]');
const confirmPwd = form.querySelector('input[name="confirmPwd"]');

// All inputs run a validate function when the user stops focusing on the form input
// If the input is invalid, tell the user (how, if necessary) to fill the input in

// FIRST NAME, LAST NAME
firstName.addEventListener('focusout', validateFirstName);
lastName.addEventListener('focusout', validateLastName)

function validateFirstName() {
    const firstNameText = document.querySelector('#first-name-text');
    if(!firstName.validity.valid) {
        firstNameText.innerText = "* Please enter your first name.";
    } else {
        firstNameText.innerText = '';
    }
}

function validateLastName() {
    const lastNameText = document.querySelector('#last-name-text');
    if(!lastName.validity.valid) {
        lastNameText.innerText = "* Please enter your last name.";
    } else {
        lastNameText.innerText = '';
    }
}

// EMAIL
email.addEventListener('focusout', validateEmail);

function validateEmail() {
    const emailText = document.querySelector('#email-text');
    if(!email.validity.valid) {
        emailText.innerText = "* Please enter your email address.";
    } else {
        emailText.innerText = '';
    }
}

// PHONE NUMBER
phoneNum.addEventListener('focusout', validatePhoneNum);

function validatePhoneNum() {
    const phoneText = document.querySelector('#phone-num-text');
    if(!phoneNum.validity.valid) {
        phoneText.innerText = "* Please enter your 10-digit phone\nnumber. Hyphens are required.";
    } else {
        phoneText.innerText = '';
    }
}

// PWD
// Default message (doesn't show the pattern so it's less cluttered)
pwd.addEventListener('focusout', validatePwd);

function validatePwd() {
    const pwdText = document.querySelector('#pwd-text');
    if(!pwd.validity.valid) {
        pwdText.innerText = "* Please enter your password.";
    } else {
        pwdText.innerText = '';
    }
}

// Validate the regex as the user is typing the password (the pattern requirements are only shown when the user types)
pwd.addEventListener('input', validateRegexPwd);

function validateRegexPwd() {
    const pwdText = document.querySelector('#pwd-text');

    if(!pwd.validity.valid) {
        // Clears the pwdText and adds each pattern requirement as necessary
        pwdText.innerText = "";
        // Testing the regex
        if(!/(?=.*[A-Z])/.test(pwd.value)) {
            pwdText.innerText += "One uppercase letter.\n";
        }
        if(!/(?=.*[a-z])/.test(pwd.value)) {
            pwdText.innerText += "One lowercase letter.\n";
        }
        if(!/((?=.*\d)|(?=.*\W+))/.test(pwd.value)) {
            pwdText.innerText += "One number or special character.\n";
        }
        if(!/(?=^.{8,}$)/.test(pwd.value)) {
            pwdText.innerText += "At least 8 characters.\n";
        } 
    } else {
        pwdText.innerText = '';
    }
}

// CONFIRM PWD
confirmPwd.addEventListener('focusout', validateConfirmPwd);

/* Confirms if the password value and the confirm password value is the same
 * If it is not the same, set the custom validity to the msg (input is now invalid, user cannot submit the form)
 * If it is the same, "clear" the custom validity (input is now valid, user can submit the form) */
function validateConfirmPwd() {
    const confirmPwdText = document.querySelector('#confirm-pwd-text');
    if(pwd.value !== confirmPwd.value) {
        confirmPwdText.innerText = "* Passwords do not match.";
        confirmPwd.setCustomValidity("Passwords do not match.");
    } else {
        confirmPwdText.innerText = '';
        confirmPwd.setCustomValidity('');
    }
}