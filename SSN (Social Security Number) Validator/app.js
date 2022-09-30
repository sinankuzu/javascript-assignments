const myInput = document.querySelector(".my-input");
const myButton = document.querySelector(".my-button");
const myResult = document.querySelector(".result");
myButton.onclick =() =>{
    const firstPart = myInput.value.substring(0, 3);
    const secondPart = myInput.value.substring(4, 6);
    const thirdPart = myInput.value.substring(7);
    const firstHypen = myInput.value.substring(3, 4);
    const secondHypen = myInput.value.substring(6, 7);
     if(firstPart != 0 && firstPart != 666 && firstPart < 900 && secondPart != 0 && thirdPart != 0 && firstHypen == "-" && secondHypen == "-" && myInput.value.length == 11)
    {
        myResult.textContent = `Entered SSN (${myInput.value}) is valid`; 
    }
    else{
        myResult.textContent = "Invalid SSN. SSN must be 11 character (9 numbers and 2 hypens). You can see the correct format in the input box."
    }
    myInput.value = ""
    
}