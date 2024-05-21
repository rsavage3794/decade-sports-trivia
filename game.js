let allQuestions = {
    seventiesQuestions: [],
    eightiesQuestions: [],
    ninetiesQuestions: [],
    zerosQuestions: [],
    tensQuestions: []
};
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        allQuestions = data;
    });

let currentQuestions = [];
let currentQuestionIndex = 0;
let decadeCounter = 0;
let correctAnswersInDecade = 0;
let wrongAnswersInDecade = 0;
let startButton = document.getElementById("start-btn");
let nextButton = document.getElementById("next-btn");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let totalScore = document.getElementById("score");
let gameStatus = false;
let currentScore = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", handleNextQuestion);

function startGame() {
    console.log("Starting game...");
    gameStatus = true;
    decadeCounter = 0;
    correctAnswersInDecade = 0;
    wrongAnswersInDecade = 0;
    currentScore = 0;
    totalScore.innerText = currentScore;

    // Hide start button and show the question container
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');

    currentQuestions = allQuestions.seventiesQuestions;
    currentQuestionIndex = 0;
    showQuestion(currentQuestions[currentQuestionIndex]);
    hideGameOverContainer();
}

function hideGameOverContainer() {
    gameOverContainer.classList.add('hide');
}

function showQuestion(question) {
    resetState();
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (correct) {
        correctAnswersInDecade++;
        currentScore++;
        totalScore.innerText = currentScore;
    } else {
        wrongAnswersInDecade++;
    }

    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (correctAnswersInDecade >= 3) {
        // Move to next decade
        decadeCounter++;
        if (decadeCounter < Object.keys(allQuestions).length) {
            currentQuestions = allQuestions[Object.keys(allQuestions)[decadeCounter]];
            correctAnswersInDecade = 0;
            wrongAnswersInDecade = 0;
            currentQuestionIndex = 0;
            showQuestion(currentQuestions[currentQuestionIndex]);
        } else {
            // End game
            endGame();
        }
    } else if (wrongAnswersInDecade >= 3) {
        // End game if wrong answers in current decade reach 3
        endGame();
    } else if (currentQuestionIndex < currentQuestions.length) {
        showQuestion(currentQuestions[currentQuestionIndex]);
    } else {
        // If questions run out in current decade but haven't answered 3 correctly
        endGame();
    }
}



function endGame() {
    // Hide next button
    nextButton.classList.add("hide");

    // Game over message and score
    questionElement.innerText = "Game Over";
    answerButtonsElement.innerHTML = `
        <button id="restart-btn" class="start-btn btn">Restart</button>
    `;
    
    // Event listener for restart button
    const restartButton = document.getElementById("restart-btn");
    restartButton.addEventListener("click", () => {
        startGame();
    });
}

function gameOver() {
    // Display game over message and score
    questionElement.innerText = "Game Over";
    answerButtonsElement.innerHTML = `
        <button id="restart-btn" class="start-btn btn">Restart</button>
    `;
    
    // Event listener for restart button
    const restartButton = document.getElementById("restart-btn");
    restartButton.addEventListener("click", () => {
        startGame();
    });
}