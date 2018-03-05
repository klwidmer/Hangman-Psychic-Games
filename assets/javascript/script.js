
 var alphabet = ["apple","grapes"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessedLetters =[];
    var letterToGuess = null;
    var gameOver = false;


    var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];

    var answerArray = [];

    for (var i = 0; i < alphabet.length; i++) {

      answerArray[i] = "_";

    }

    var remainingLetters = alphabet.length;
   
    function resetFunc () {
        var playAgain = confirm("Do you want to play again?")

        if (playAgain) { 
            computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
            guessedLetters = [];
            guessesLeft = 10
        }
       
    }

document.onkeyup = function(event) {
    console.log (computerGuess)
   
        var userGuess = event.key.toLowerCase()
      
                if (userGuess === computerGuess){
                    wins++;
                    alert("You Win!");
                    document.getElementById("wins").textContent = wins;
                    resetFunc();
            
                } else {
                    guessesLeft--;
                    alert("You Guessed Wrong");
                    document.getElementById("guessesLeft").textContent = guessesLeft;
                    guessedLetters.push(userGuess)
                    document.getElementById("guessedLetters").innerHTML = guessedLetters;
                    
                }
                if (guessesLeft === 0){
                    losses++;
                    document.getElementById("losses").textContent = losses;
                    alert("Game over please play again");
                    resetFunc();
                }
              
}   

