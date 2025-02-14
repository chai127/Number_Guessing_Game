let randomNumber = null; 
let attempts = 0; 
let min = null;
let max = null;

document.getElementById("submit").onclick = function() {
    if (randomNumber === null) {
        min = Number(document.getElementById("num1").value);
        max = Number(document.getElementById("num2").value);

        if (min > max) {
            [min, max] = [max, min]; 
        }


        if (isNaN(min) || isNaN(max) || min == "" || max == "") {
            alert("Please enter valid numbers for the range!");
            return;
        }

       
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

   
    let guess = Number(document.getElementById("userGuess").value);

    if (guess < min || guess > max || isNaN(guess) || guess === "") {
        alert(`Please enter a valid guess! Your guess must be between ${min} and ${max}!`);
        clearGuessField();
        return;
    }


    attempts++;
    let attemptText = attempts === 1 ? "attempt" : "attempts";

    if (guess === randomNumber) {
        document.getElementById("yay").textContent = `Your guess is RIGHT! It took you ${attempts} ${attemptText}`;
    } else if (guess < randomNumber) {
        document.getElementById("yay").textContent = "You're too low! Guess again!";
        clearGuessField();

    } else if (guess > randomNumber) {
        document.getElementById("yay").textContent = "You're too high! Guess again!";
        clearGuessField();

    }
}

function clearGuessField() {
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").focus();
}


document.getElementById("tryAgain").onclick = function() {
    
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("userGuess").value = "";
    document.getElementById("jsGuess").textContent = "";
    document.getElementById("yay").textContent = "";

    min = null;
    max = null; 
    randomNumber = null;
    attempts = 0;
}
