let score = 0;

function checkAnswer(question, answer) {
    if (question === 1 && answer === 18) {
        score++;
    }
    if (question === 2 && answer === 'ECI') {
        score++;
    }

    document.getElementById("result").innerText = "Your Score: " + score;
}