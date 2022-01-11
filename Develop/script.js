// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate a Password
function generatePassword() {
  var password = '';
}

//function to set Password length
var  getPasswordLength = function() {
  var pwLength = "";

  while (pwLength === "" || pwLength === null) {
    pwLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");

    if (pwLength < 8 ){
      window.alert("Please choose a length of at least 8 characters.");
      pwLength = "";
    }

    if (pwLength > 128 ){
      window.alert("Please choose a length that no more than 128 characters.");
      pwLength = "";
    }
  }
  //console.log("Your Password length is " + pwLength);


  return pwLength;
};

getPasswordLength();
