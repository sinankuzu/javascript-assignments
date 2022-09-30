const myInput = document.querySelector(".input1");
const myButton = document.querySelector(".mybutton");
let myArray =[]
const vowels = ["a","e","i","u","o"];



myButton.onclick = () => {
let sayac = 0;
 myArray = myInput.value.split("");
 myArray.map((x) =>{
   if(vowels.includes(x)){
      sayac += 1;
   }
 })
 console.log(`There are ${sayac} vowels have found in your sentence`);
}


 
