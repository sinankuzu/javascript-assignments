const myInput = document.querySelector(".input1");
const myButton = document.querySelector(".mybutton");
const myResult = document.querySelector(".result");
let myArray =[]
const vowels = ["a","e","i","u","o"];



myButton.onclick = () => {

let sayac = 0;
let myInput2 = myInput.value.toLowerCase();
 myArray = myInput2.split("");
 myArray.map((x) =>{
   if(vowels.includes(x)){
      sayac += 1;
   }
 })
 if(sayac >= 1){
 myResult.textContent = `There are ${sayac} vowels have found in your sentence`;

 }
 else{
   myResult.textContent = `Your sentence does not contain a vowel`;
 }
 
}


 
