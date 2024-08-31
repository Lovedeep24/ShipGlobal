document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const restartGame = document.getElementById('restartGame');
    const feedback = document.getElementById('feedback');
    const chances = document.getElementById('chances');
    const victoryMessage = document.getElementById('victoryMessage');
    
    let targetNumber = Math.floor(Math.random() * 100) + 1; // returns number between 1 and 100
    let remainingChances = 10;
    console.log(targetNumber);

    function updateChances() {
        chances.textContent = `Chances left: ${remainingChances}`;
    }

    function handleGuess() {
        const guess = Number(guessInput.value);
        if (guess < 1 || guess > 100) {
            feedback.textContent = 'Please enter a number between 1 and 100.';
            return;
        }

        remainingChances--;
        updateChances();

        if (guess === targetNumber) {
            feedback.textContent = '';
            victoryMessage.style.display = 'block'; //Will Show victory message
            submitGuess.disabled = true;
            restartGame.style.display = 'inline-block';
        } else if (remainingChances === 0) {
            feedback.textContent = `Game over! The correct number was ${targetNumber}.`;
            submitGuess.disabled = true;
            restartGame.style.display = 'inline-block';
        } else {
            feedback.textContent = guess < targetNumber ? 'Too low!' : 'Too high!';
        }
    }

    function restartGameHandler() {
        targetNumber = Math.floor(Math.random() * 100) + 1; // Reset target number for new game
        remainingChances = 10; // Reset chances
        updateChances();
        feedback.textContent = '';
        victoryMessage.style.display = 'none'; // Hide victory message for new game
        submitGuess.disabled = false;
        restartGame.style.display = 'none';
        guessInput.value = ''; // Clear the input field
    }

    submitGuess.addEventListener('click', handleGuess);
    restartGame.addEventListener('click', restartGameHandler);
});
