// Assignment code here
//user input:

var enter;
var characterInput;
var numberInput;
var uppercaseInput;
var lowercaseInput;

//characters value:

character = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","'","<",",",">",".","?","/"];
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Upper = function (x) {
  return x.toUpperCase();
};
alphabetB = alphabet.map(Upper);

var choices;

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  document.getElementById("password").generatePassword;

//Start to generate password
function generatePassword() {

  //user input
  enter = parseInt(prompt("Number of characters in your password. Choose between 8 and 128."));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // validates user input
        // user input prompts
        enter = parseInt(prompt("Choose between 8 and 128"));

     } else {
        numberInput = confirm("Will this contain numbers?");
        characterInput = confirm("Will this contain special characters?");
        uppercaseInput = confirm("Will this contain Uppercase letters?");
        lowercaseInput = confirm("Will this contain Lowercase letters?");
    };
        if (!characterInput && !numberInput && !uppercaseInput && !lowercaseInput) {
          choices = alert("choose a criteria!");

      }
      //  4 positive options
      else if (characterInput && numberInput && uppercaseInput && lowercaseInput) {

          choices = character.concat(number, alphabet, alphabetB);
      }
      // 3 positive options
      else if (characterInput && numberInput && uppercaseInput) {
          choices = character.concat(number, alphabetB);
      }
      else if (characterInput && numberInput && lowercaseInput) {
          choices = character.concat(number, alphabet);
      }
      else if (characterInput && lowercaseInput && uppercaseInput) {
          choices = character.concat(alphabet, alphabetB);
      }
      else if (numberInput && lowercaseInput && uppercaseInput) {
          choices = number.concat(alphabet, alphabetB);
      }
      //  2 positive options 
      else if (characterInput && numberInput) {
          choices = character.concat(number);

      } else if (characterInput && lowercaseInput) {
          choices = character.concat(alphabet);

      } else if (characterInput && uppercaseInput) {
          choices = character.concat(alphabetB);
      }
      else if (lowercaseInput && numberInput) {
          choices = alphabet.concat(number);

      } else if (lowercaseInput && uppercaseInput) {
          choices = alphabet.concat(alphabet);

      } else if (numberInput && uppercaseInput) {
          choices = number.concat(alphabetB);
      }
      //  1 positive option
      else if (characterInput) {
          choices = character;
      }
      else if (numberInput) {
          choices = number;
      }
      else if (lowercaseInput) {
          choices = alphabet;
      }

      var password = [];

    
      for (var i = 0; i < enter; i++) {
          var pickChoices = choices[Math.floor(Math.random() * choices.length)];
          password.push(pickChoices);
      }
    
      var pass = password.join("");
      UserInput(pass);
      return pass;
    }
    // password value in the textbox
    function UserInput(ps) {
      document.getElementById("password").textContent = ps;

    }

   