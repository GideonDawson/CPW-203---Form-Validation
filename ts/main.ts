window.onload = function(){
    let formBtn = <HTMLElement> document.querySelector("form > button");
    formBtn.onclick = main; 

}

function main():void{
    resetErrorMessages();
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name", "Last name is required"); 
    
    // Validate date
    let dobBox = <HTMLInputElement> document.getElementById("dob");
    let dob = dobBox.value; 
    if(!isValidDate(dob)){
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Invalid Format. Format should be mm/dd/yyyy";
        //dobBox.nextElementSibling.innerHTML = "Invalid Format";
    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/d/yyy
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    let result = pattern.test(input);
    return result; 
}

/**
 * Returns true if the textbox with the given
 * if has some text inside it 
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span 
 * display of the textbox 
 * @returns 
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = 
        <HTMLInputElement>document.getElementById(id);
    let textBoxValue = txtBox.value;
    if (textBoxValue == "") {
        let errSpan = 
            <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false; 
    }
    return true; 
}

function isEmailValid(email:string){
    if(!email.includes("@")){
        return false; 
        
    }
}

// Resets all spans back to the default text
function resetErrorMessages():void{
    let allErrorSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allErrorSpans.length; i++){
        let currentSpan = <HTMLElement> allErrorSpans[i];
        
        if(currentSpan.hasAttribute("data-required")){
            currentSpan.innerText = "*";
        }
        else{
            currentSpan.innerText = "";
        }
    }
}

