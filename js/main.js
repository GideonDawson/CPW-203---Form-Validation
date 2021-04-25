window.onload = function () {
    let formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    let dobBox = document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Invalid Format. Format should be mm/dd/yyyy";
    }
}
function isValidDate(input) {
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    let result = pattern.test(input);
    return result;
}
function isTextPresent(id, errMsg) {
    let txtBox = document.getElementById(id);
    let textBoxValue = txtBox.value;
    if (textBoxValue == "") {
        let errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function isEmailValid(email) {
    if (!email.includes("@")) {
        return false;
    }
}
function resetErrorMessages() {
    let allErrorSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allErrorSpans.length; i++) {
        let currentSpan = allErrorSpans[i];
        if (currentSpan.hasAttribute("data-required")) {
            currentSpan.innerText = "*";
        }
        else {
            currentSpan.innerText = "";
        }
    }
}
