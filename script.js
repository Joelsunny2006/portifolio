var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("button-error");

function validateName() {
    var name = document.getElementById("name").value.trim();
    var nameValidIcon = document.getElementById("name-valid");
    if (name.length == 0) {
        nameError.innerHTML = "Name is required!";
        nameValidIcon.style.display = "none";
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML = "Please enter your full name!";
        nameValidIcon.style.display = "none";
        return false;
    }
    nameError.innerHTML = "";
    nameValidIcon.style.display = "block";
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var emailValidIcon = document.getElementById("email-valid");
    if (email.length == 0) {
        emailError.innerHTML = "Email is required!";
        emailValidIcon.style.display = "none";
        return false;
    }
    if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
        emailError.innerHTML = "Invalid email!";
        emailValidIcon.style.display = "none";
        return false;
    }
    emailError.innerHTML = "";
    emailValidIcon.style.display = "block";
    return true;
}

function validatePhone() {
    var phone = document.getElementById("phone").value.trim();
    var phoneError = document.getElementById("phoneError");
    var phoneValidIcon = document.getElementById("phone-valid");

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone No is required!";
        phoneValidIcon.style.display = "none";
        return false;
    }
    if (!phone.match(/^[0-9]*$/)) {
        phoneError.innerHTML = "Only digits please!";
        phoneValidIcon.style.display = "none";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits!";
        phoneValidIcon.style.display = "none";
        return false;
    }

    phoneError.innerHTML = "";
    phoneValidIcon.style.display = "block";
    return true;
}

function validateForm() {
    return validatePhone();
}

function validateSubject() {
    var subject = document.getElementById("subject").value.trim();
    var subjectValidIcon = document.getElementById("subject-valid");
    if (subject.length === 0) {
        subjectError.innerHTML = "Subject is required!";
        subjectValidIcon.style.display = "none";
        return false;
    }
    if (!subject.match(/^[A-Za-z\s]+$/)) {
        subjectError.innerHTML = "Only alphabets and spaces please!";
        subjectValidIcon.style.display = "none";
        return false;
    }
    subjectError.innerHTML = "";
    subjectValidIcon.style.display = "block";
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value.trim();
    var messageValidIcon = document.getElementById("message-valid");
    if (message.length === 0) {
        messageError.innerHTML = "Message is required!";
        messageValidIcon.style.display = "none";
        return false;
    }
    messageError.innerHTML = "";
    messageValidIcon.style.display = "block";
    return true;
}

function validateForm(event) {
    event.preventDefault();
    var nameValid = validateName();
    var emailValid = validateEmail();
    var subjectValid = validateSubject();
    var phoneValid = validatePhone();
    var messageValid = validateMessage();
    if (!nameValid || !emailValid || !subjectValid || !phoneValid || !messageValid) {
        submitError.innerHTML = "Please fill in all fields correctly.";
        return false;
    }
    submitError.innerHTML = "";
    document.getElementById("submit-form").submit();
    return true;
}

document.getElementById("submit-button-div").addEventListener("click", function () {
    document.querySelector("#submit-form button[type='submit']").click();
});
