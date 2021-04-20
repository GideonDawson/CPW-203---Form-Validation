window.onload = function () {
    let formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
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
