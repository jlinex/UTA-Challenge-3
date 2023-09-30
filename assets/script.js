// Get references to the generate element
var generateBtn = document.querySelector("#generate");
var finishedPassword = [];

// Write password to the password input 
function writePassword() {
var password = finishedPassword;
var passwordText = document.querySelector("#password");
// .join removes the commas that print in the final generated password
passwordText.value = password.join("");
}

// Add event listner to generate button
generateBtn.addEventListener("click", generatePassword);

// Set array for each character type
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", 
"a", "s", "d", "f", "g", "h", "j", "k", "l", 
"z", "x", "c", "v", "b", "n", "m"];
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
"A", "S", "D", "F", "G", "H", "J", "K", "L", 
"Z", "X", "C", "V", "B", "N", "M",];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", 
")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'",
",", "<", ".", ">", "/", "?"];

function generatePassword() {
  var applicable = [];
  var fP = "";
  
  var numberOfChar = window.prompt("Please enter how many characters you want the password to be, in between 8 and 132 characters");
  console.log(numberOfChar);

  var yesSpecial = window.confirm("Do you want to include special characters in your password?");
  console.log(yesSpecial);

  var yesLower = window.confirm("Do you want to include lower case letters in your password?");
  console.log(yesLower);

  var yesUpper = window.confirm("Do you want to include Upper case letters in your password?");
  console.log(yesUpper);

  var yesNumbers = window.confirm("Do you want to include numbers in your password?");
  console.log(yesNumbers);

// if true push/concat the array into a new array
  if(yesSpecial)
    applicable = applicable.concat(symbols);

  if(yesLower)
    applicable = applicable.concat(lowercase);

  if(yesUpper)
    applicable = applicable.concat(uppercase);

  if(yesNumbers)
    applicable = applicable.concat(numbers);
  
  
// clear password so that a new password can be generated
    finishedPassword = []; 

// random index value for every loop
  for(i = 0; i < numberOfChar; i++)
  {
    finishedPassword = finishedPassword.concat(applicable[Math.floor(Math.random()*applicable.length)]);
  }
  
  for(var i = 0; i < numberOfChar; i++)
  {
     fP += finishedPassword[i];
  }

  writePassword();
  return finishedPassword;
}