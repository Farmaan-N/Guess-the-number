let targetNumber = Math.floor(Math.random() * 100) + 1;


function checkGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');
    if (userGuess == "") {
        alert("Please enter a number");
        return;
    }


    
    if (userGuess < targetNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (userGuess > targetNumber) {
        feedback.textContent = 'Too high! Try again.';
    }
     else {
        feedback.textContent = '';
        result.textContent = `Congratulations! You guessed the number ${targetNumber}.`;
        alert("YOU WON...")
        // Reset the game
        targetNumber = Math.floor(Math.random() * 100) + 1;
    }
}
