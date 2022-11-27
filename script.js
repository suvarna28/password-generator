// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  /* Below is the declaration and definition of the different variables and arrays used in this function */

  var selectedPwdLength;

  var finalPwdArray = []; 

  var finalPwd = "";
  
  var pwdLength = 0;

  var specialChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']',
                      '|', '\\', ':', ';', '\"', '\'', '<', '>', ',', '.', ' ', '?', '/'];

  var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                          't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  /* Code to enter the password length and to check if it falls within the required range */

  pwdLength = prompt("Please enter the length of password you wish to create");

  if(parseInt(pwdLength) >= 8 && parseInt(pwdLength) <= 128){

    selectedPwdLength = parseInt(pwdLength) 

    /* Code to ask the different criteria for the password strenth, if it should contain capital letters, small letters, numbers and special characters */

    var specialCharsY = confirm("Do you want any special characters in your password")
    var numbersY = confirm("Do you want any numbers in your password")
    var capitalLettersY = confirm("Do you want any capital letters in your password")
    var smallLettersY = confirm("Do you want any small letters in your password")

    /* Code to verify if at least one criteria is selected, if not then start over */

    if(!specialCharsY && !numbersY && !capitalLettersY && !smallLettersY){
      alert("Please select atleast one criteria to create a password.");
      return "";
    }

    /* Code to check which criterias were selected and then to build a final array containing all those values */

    if(specialCharsY) {
      finalPwdArray = finalPwdArray.concat(specialChars);
    }
    if(numbersY) {
      finalPwdArray = finalPwdArray.concat(numbers);
    }
    if(capitalLettersY) {
      finalPwdArray = finalPwdArray.concat(capitalLetters);
    }
    if(smallLettersY) {
      finalPwdArray = finalPwdArray.concat(smallLetters);
    }

    /* Code to actually build the final password, 
      the number of times 'for' loop is executed is equal to the password length selected by the user, 
      because that's how many times the loop will execute and Math.random() will select
      a random index and it's respective character from the final array. Build the actual pwd at the end by concatenating the characters */

      for(var i = 0; i < selectedPwdLength; i++){
        var index = Math.floor(Math.random() * finalPwdArray.length);
        finalPwd = finalPwd + finalPwdArray[index];
      }
    } else {
      alert("Password should be atleast 8 characters long and less than 128 characters");
      return "";  
    }  
    return finalPwd;
}
 


