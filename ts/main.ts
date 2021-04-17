window.onload = function(){
    let FormBtn = <HTMLElement> document.querySelector("form > button");
    FormBtn.onclick = main; 

}

function main():void{
    alert("Reg button was clicked");
}