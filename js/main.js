window.onload = function () {
    let formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
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
