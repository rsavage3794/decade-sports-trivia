console.log("working");
let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-btn")
let questionContainerElement = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")

let randomQuestions
let currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    ;
    startButton.classList.add("hide")
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button) 
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
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

let questions = [
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
    },
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
    },
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
    },
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
    },
]