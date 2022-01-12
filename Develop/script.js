// Assignment code here
var typesFunc = {
  lowercaseSelected: getRandomLower,
  uppercaseSelected: getRandomUpper,
  numericSelected: getRandomNumber,
  specialCharSelected: getspecialChar,
};

// generate a Password
function generatePassword() {
  var generatedPassword = "";
  //make a copy of typesFunc
  var selectedTypesFunc = Object.assign({},typesFunc);
  //delete keys/char type in selectedTypesFunc that usert did not seleceted
  if(lowercase === false){
    delete selectedTypesFunc.lowercaseSelected
  }
  if(uppercase === false){
    delete selectedTypesFunc.uppercaseSelected
  }
  if(numeric === false){
    delete selectedTypesFunc.numericSelected
  }
  if(specialChar === false){
    delete selectedTypesFunc.specialCharSelected
  }

  //get all keys from selectedTypesFunc , if all types seleceted, then = ['lowercaseSelected', 'uppercaseSelected', 'numericSelected', 'specialCharSelected']
  var keysOfTypes = Object.keys(selectedTypesFunc);
  //create a loop that generate the characher one by one
  for (var i = 0; i < pwLength; i++) {
    // randomly pick one items from keys
    var randomKey = keysOfTypes[Math.floor(keysOfTypes.length * Math.random())];
    // generate a new character
    var newChar = selectedTypesFunc[randomKey]();
    //add this new characher to the password that generating
    generatedPassword += newChar;
  }
  //return the full password that generated
  return generatedPassword;
}

//function to set Password length
var pwLength;
var getPasswordLength = function () {
  while (pwLength === "" || pwLength === null) {
    pwLength = prompt(
      "Please choose a length of at least 8 characters and no more than 128 characters"
    );

    if (pwLength < 8) {
      window.alert("Please choose a length of at least 8 characters.");
      pwLength = "";
    }

    if (pwLength > 128) {
      window.alert("Please choose a length that no more than 128 characters.");
      pwLength = "";
    }
  }

  return pwLength;
};

//function to set whether or not to include lowercase
var lowercase;
var lowercaseOrNot = function () {
  lowercase = window.confirm("Do you want it include lowercase?");
  return lowercase;
};
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to set whether or not to include uppercase
var uppercase;
var uppercaseOrNot = function () {
  uppercase = window.confirm("Do you want it include uppercase?");
  return uppercase;
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function to set whether or not to include numeric
var numeric;
var numericOrNot = function () {
  numeric = window.confirm("Do you want it include numers?");
  return numeric;
};

function getRandomNumber() {
  return Math.floor(Math.random() * 10).toString();
}

//function to set whether or not to include special characters
var specialChar;
var specialCharOrNot = function () {
  specialChar = window.confirm("Do you want it include special characters?");
  return specialChar;
};

function getspecialChar() {
  var symbols = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  pwLength = "";
  getPasswordLength();
  lowercaseOrNot();
  uppercaseOrNot();
  numericOrNot();
  specialCharOrNot();
  writePassword();
});
