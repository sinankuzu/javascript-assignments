
// ----------------SORU1-------------------//

let grade = +prompt("please enter a grade");

if (grade >= 0 && grade <= 25) {
  sonuc = "FF";
} else if (grade >= 26 && grade <= 45) {
  sonuc = "DD";
} else if (grade >= 46 && grade <= 65) {
  sonuc = "CC";
} else if (grade >= 66 && grade <= 75) {
  sonuc = "BB";
} else if (grade >= 76 && grade <= 90) {
  sonuc = "BA";
} else if (grade >= 91 && grade <= 100) {
  sonuc = "AA";
} else{console.log("invalid grade");}

console.log(sonuc);

// ----------------SORU2-------------------//

month = prompt("Please write a month")

switch (month) {
  case "january":
    result = "1st";
    break;
  case "february":
    result = "2nd";
    break;
  case "march":
    result = "3rd";
    break;
  case "april":
    result = "4th";
    break;
  case "may":
    result = "5th";
    break;
  case "june":
    result = "6th";
    break;
  case "july":
    result = "7th";
    break;
  case "august":
    result = "8th";
    break;
  case "september":
    result = "9th";
    break;
  case "october":
    result = "10th";
    break;
  case "november":
    result = "11th";
    break;
  case "december":
    result = "12th";
    
    break;
  default:alert("invalid entry");
    break;
}

console.log(`${month} is the ${result} month of the year`);




// ----------------SORU3-------------------//

alert("please enter only numbers with different values in order to see the numbers; sum, multiply, min and max.")
x = +prompt();
y = +prompt();
z = +prompt();

if(x != y && y != x && y != z){
    if(x<y && y<z){
    smallNumber = x;
    bigNumber = z;
}

else if(x<y && z<y){
    smallNumber = x;
    bigNumber = y;
}

else if(y<z && z<x){
    smallNumber = y;
    bigNumber = x;
}

else if(y<x && x<z){
    smallNumber = y;
    bigNumber = z;
}

else if(z<x && x<y){
    smallNumber = z;
    bigNumber = y;
}


else if(z<y && y<x){
    smallNumber = z;
    bigNumber = x;
}

 console.log("sum of the numbers you have entered is:", x + y + z); 
 
 console.log("multiply of the numbers you have entered is:", x * y * z); 

 console.log("smallest number you have entered is", smallNumber);

console.log("biggest number you have entered is", bigNumber);

alert("you can see the results in console section")
}

else if (x == z || y == x || y == z) {
  alert(
    "equivalance is not a part of the programm. Please enter numbers with different values"
  );
} 

else{
    alert("invalid input please try again")
}



// ----------------SORU4-------------------//

let input = +prompt("Please enter a number to see the number is even or odd.");
let result = input % 2 == 0 ? "even":"odd";
console.log(result);



//----------------SORU5-------------------//

let process = prompt("Welcome to the fahrenheit-celcius converter. You can type F for Fahrenheit to Celcius or C for Celcius to Fahrenheit.");


console.log(process);
if(process == "f" || process== "F"){
    let fahrenheit = +prompt(
      "please enter a number of fahreinheit to convert into celcius"
    );
    
    let celcius = (fahrenheit - 32) * 0.5556; 
    console.log(`${celcius} Celcius`);
    alert("you can see the result in console");
    
}

else if(process == "c"|| process == "C"){
    let celcius = +prompt(
      "please enter a number of celcius to convert into fahrenheit"
    );
    
    let fahrenheit = (celcius * 1.8) + 32;
    console.log(`${fahrenheit} Fahrenheit`);
    alert("you can see the result in console");
}

else{
    alert("invalid input please try again")
}

