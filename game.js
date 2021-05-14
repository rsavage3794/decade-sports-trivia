let seventiesQuestions = [
    {
        question: "Who won the most NBA MVP awards in the 1970s?",
        answers: [
            { text: "Moses Malone", correct: false },
            { text: "Jerry West", correct: false },
            { text: "Dave Cowens", correct: false },
            { text: "Kareem Abdul-Jabbar", correct: true }
        ]
    },
    {
        question: "Which team won the most Super Bowls in the 1970s?",
        answers: [
            { text: "Dallas Cowboys", correct: false },
            { text: "Pittsburgh Steelers", correct: true },
            { text: "Oakland Raiders", correct: false },
            { text: "Miami Dolphins", correct: false }
        ]
    },
    {
        question: "Which player hit the most homeruns in the 1970s?",
        answers: [
            { text: "Dave Kingman", correct: false },
            { text: "Hank Aaron", correct: false },
            { text: "Willie Stargell", correct: true },
            { text: "Reggie Jackson", correct: false }
        ]
    },
    {    
        question: "Which team won the most Stanley Cups in the 1970s?",
        answers: [
            { text: "Montreal Canadiens", correct: true },
            { text: "Boston Bruins", correct: false },
            { text: "Philadelphia Flyers", correct: false },
            { text: "New York Islanders", correct: false }
        ]
    }
]

let currentQuestionsAsk = []

let eightiesQuestions = [
    {    
        question: "Which quarterback threw the most touchdown passes in the 1980s?",
        answers: [
            { text: "Joe Montana", correct: false },
            { text: "Dan Marino", correct: true },
            { text: "Dan Fouts", correct: false },
            { text: "John Elway", correct: false }
        ]
    },
    {    
        question: "Which NHL player scored the most goals in the 1980s?",
        answers: [
            { text: "Mark Messier", correct: false },
            { text: "Mario Lemieux", correct: false },
            { text: "Wayne Gretzky", correct: true },
            { text: "Jari Kurri", correct: false }
        ]
    },
    {    
        question: "Which team were the Boston Red Sox playing when Bill Buckner allowed a ground ball to go between his legs during Game 6 of the 1986 World Series?",
        answers: [
            { text: "New York Mets", correct: true },
            { text: "Cincinnati Reds", correct: false },
            { text: "Atlanta Braves", correct: false },
            { text: "Philadelphia Phillies", correct: false }
        ]
    },
    {    
        question: "Which two NBA teams passed on Michael Jordan allowing him to be picked third by the Chicago Bulls in the 1984 NBA Draft?",
        answers: [
            { text: "Boston Celtics & Philadelphia 76ers", correct: false },
            { text: "Los Angeles Lakers & New York Knicks", correct: false },
            { text: "Cleveland Cavaliers & Dallas Mavericks", correct: false },
            { text: "Houston Rockets & Portland Trail Blazers", correct: true }
        ]
    }
]

let ninetiesQuestions = [
    {    
        question: "How many NHL teams were added to the league between 1990 and 1999?",
        answers: [
            { text: "0", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "3", correct: false }
        ]
    },
    {    
        question: "Mark McGwire and Sammy Sosa both broke Roger Maris' single season homerun record in 1998. Who was third in homeruns after McGwire and Sosa respectively?",
        answers: [
            { text: "Ken Griffey Jr.", correct: true },
            { text: "Greg Vaughn", correct: false },
            { text: "Jose Canseco", correct: false },
            { text: "Alex Rodriguez", correct: false }
        ]
    },
    {    
        question: "In 1994, which team became the first 8 seed to defeat a 1 seed in the NBA Playoffs?",
        answers: [
            { text: "Golden State Warriors", correct: false },
            { text: "Denver Nuggets", correct: true },
            { text: "Detroit Pistons", correct: false },
            { text: "New York Knicks", correct: false }
        ]
    },
    {    
        question: "In 1990, which NFL team lost 14 straight games after starting the season 1-1?",
        answers: [
            { text: "Cleveland Browns", correct: false },
            { text: "New England Patriots", correct: true },
            { text: "Dallas Cowboys", correct: false },
            { text: "Indianapolis Colts", correct: false }
        ]
    }
]

let zerosQuestions = [
    {    
        question: "What player hit a walk-off homerun in the bottom of the 11th for the New York Yankees in the 2003 ALCS?",
        answers: [
            { text: "Jorge Posada", correct: false },
            { text: "Hideki Matsui", correct: false },
            { text: "Aaron Boone", correct: true },
            { text: "Jason Giambi", correct: false }
        ]
    },
    {    
        question: "Who was the only other future MVP to also be drafted #1 overall in the 2000s besides Lebron James?",
        answers: [
            { text: "Kwame Brown", correct: false },
            { text: "Derrick Rose", correct: true },
            { text: "Dwight Howard", correct: false },
            { text: "Yao Ming", correct: false }
        ]
    },
    {    
        question: "Who won the 2005 NFL MVP award?",
        answers: [
            { text: "Shaun Alexander", correct: true },
            { text: "Peyton Manning", correct: false },
            { text: "LaDainian Tomlinson", correct: false },
            { text: "Tom Brady", correct: false }
        ]
    },
    {    
        question: "Who became the winningest goaltender in NHL history on March 17, 2009?",
        answers: [
            { text: "Martin Brodeur", correct: true },
            { text: "Patrick Roy", correct: false },
            { text: "Roberto Luongo", correct: false },
            { text: "Ed Belfour", correct: false }
        ]
    }
]

let tensQuestions = [
    {
        question: "Who became became the first ever unanimous NBA MVP?",
        answers: [
            { text: "Lebron James (2013)", correct: false },
            { text: "Kevin Durant (2014)", correct: false },
            { text: "Russell Westbrook (2017)", correct: false },
            { text: "Stephen Curry (2015)", correct: true }
        ]
    },
    {
        question: "Which NHL franchise became the first team in nearly 20 years to win back to back Stanley Cups in 2017?",
        answers: [
            { text: "Chicago Blackhawks", correct: false },
            { text: "Los Angeles Kings", correct: false },
            { text: "Pittsburgh Penguins", correct: true },
            { text: "Boston Bruins", correct: false }
        ]
    },
    {
        question: "Who became the first MLB Triple Crown winner in 45 years?",
        answers: [
            { text: "Josh Hamilton (2010)", correct: false },
            { text: "Miguel Cabrera (2012)", correct: true },
            { text: "Christian Yelich (2019)", correct: false },
            { text: "Mookie Betts (2018)", correct: false }
        ]
    },
    {
        question: "Which NFL franchise became the first team with less than 10 regular season wins to win the Super Bowl?",
        answers: [
            { text: "2010 Green Bay Packers", correct: false },
            { text: "2012 Baltimore Ravens", correct: false },
            { text: "2018 New England Patriots", correct: false },
            { text: "2011 New York Giants", correct: true }
        ]
    }
]

let allQuestions = [seventiesQuestions, eightiesQuestions, ninetiesQuestions, zerosQuestions, tensQuestions]

let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-btn")
let questionContainerElement = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")
let totalScore = document.getElementById("score")

let randomQuestions
let currentQuestionIndex
let currentDecadeScore = 0

var innerScore = document.querySelector(".game-score")

let score = 0
let decadeCounter = 0

// Click "Start" to start the game
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    console.log(currentQuestionsAsk);
    currentQuestionIndex++
    if (4 == currentQuestionsAsk.length && currentDecadeScore >= 2) {
        currentQuestionIndex = 0
        decadeCounter++
        currentQuestionsAsk = []
    }
    if (4 == currentQuestionsAsk.length && currentDecadeScore < 2) { 
        currentQuestionIndex = 0
        currentQuestionsAsk = 0
    }
    if (decadeCounter == 0) {
        setNextSeventiesQuestion()
    }
    if (decadeCounter == 1) {
    setNextEightiesQuestion()
    }    
    if (decadeCounter == 2) {
        setNextNinetiesQuestion()
    }
    if (decadeCounter == 3) {
        setNextZerosQuestion()
    }
    if (decadeCounter == 4) {
        setNextTensQuestion()
    }
    if (decadeCounter > 4) {
        gameOver()
    }
})

// First question appears (randomly because of the randomQuestions function)
function startGame() {
    startButton.classList.add("hide")
    currentQuestionIndex = Math.floor(Math.random() * seventiesQuestions.length)
    questionContainerElement.classList.remove("hide")
    console.log(currentQuestionIndex);
    setNextSeventiesQuestion(currentQuestionIndex)
}

// Once next is clicked - player is redirected to next random question
function setNextSeventiesQuestion() {
    resetState()
    let q = seventiesQuestions.splice(Math.floor(Math.random() * seventiesQuestions.length), 1)
    showQuestion(q[0])
    console.log(q);
}

function setNextEightiesQuestion() {
    resetState()
    let q = eightiesQuestions.splice(Math.floor(Math.random() * eightiesQuestions.length), 1)
    showQuestion(q[0])
}

function setNextNinetiesQuestion() {
    resetState()
    let q = ninetiesQuestions.splice(Math.floor(Math.random() * ninetiesQuestions.length), 1)
    showQuestion(q[0])
}

function setNextZerosQuestion() {
    resetState()
    let q = zerosQuestions.splice(Math.floor(Math.random() * zerosQuestions.length), 1)
    showQuestion(q[0])
}

function setNextTensQuestion() {
    resetState()
    let q = tensQuestions.splice(Math.floor(Math.random() * tensQuestions.length), 1)
    showQuestion(q[0])
}

// display question and answers - allows player to click on answers
function showQuestion(question) {
    for (let i = 0; i < question.answers.length; i++) {
        // Math.random() * seventiesQuestions.length
        questionElement.innerText = question.question
        // console.log(seventiesQuestions[i].answers)
        let button = document.createElement("button")
        button.innerText = question.answers[i].text
        button.classList.add("btn")
        if (question.answers[i].correct) {
            button.dataset.correct = question.answers[i].correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button) 
    }
}


// next button disappears once a new question is displayed
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    currentQuestionsAsk.push(currentQuestionIndex)
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (allQuestions.length > decadeCounter) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    } 
    if (correct) {
        currentDecadeScore += 1
        console.log(currentDecadeScore);
        totalScore.innerText = currentDecadeScore
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function gameOver(event) {
    startButton.innerText = "Play Again?"
    startButton.classList.remove("hide")
    nextButton.classList.add("hide")
}