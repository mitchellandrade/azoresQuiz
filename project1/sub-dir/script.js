const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answers')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswers)
        answerButtonElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}


function selectAnswers(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
    question: "Administratively, the Azores have three capital cities. Which of the following is not one of the capital cities of the Azores?",
    answers: [
        {text: 'Ponta Delgada', correct: false},
        {text: 'Santa Cruz da Graciosa', correct: true},
        {text: 'Angra do Heroísmo', correct: false},
        {text: 'Horta', correct: false}
    ]    
    },
    {
    question: "Within the Azores there are nine major islands and eight smaller islands. What is the collective name for the eight smaller islands?",
    answers: [
        {text: 'Fioras', correct: false},
        {text: 'Formigas', correct: true},
        {text: 'Nadraks', correct: false},
        {text: 'Madras', correct: false}
    ]
    },
    {
    question: "Along with the Azores, what other archipelago is considered an Autonomous Region of Portugal?",
    answers: [
        {text: 'Cape Verde Islands', correct: false},
        {text: 'Canary Islands', correct: false},
        {text: 'Madeira', correct: true},
        {text: 'Sao Tome & Principe', correct: false}
    ]
    },
    {
    question: "Which world leader sent a fleet to the Azores in 1583 to quell an uprising that was trying to establish a pretender to the Portuguese throne?",
    answers: [
        {text: 'Elizabeth I of England', correct: false},
        {text: 'Philip II of Spain', correct: false},
        {text: 'Henry III of France', correct: false},
        {text: 'Holy Roman Emperor Rudolf II', correct: true}
    ]
    },
    {
    question: "What name was given to the Portuguese Civil War fought from 1828 to 1834 between the liberals and the absolutists that established Terceira Island as the new government headquarters?",
    answers: [
        {text: 'Absolutist Wars', correct: false},
        {text: 'King João Wars', correct: false},
        {text: 'Azorean Wars', correct: false},
        {text: 'Liberal Wars', correct: true}
    ]
    },
    {
    question: "What long-time Portuguese dictator leased bases on the Azores to the Allied Forces from 1943 to 1945?",
    answers: [
        {text: 'António de Oliveira Salazar', correct: true},
        {text: 'António Óscar Fragoso Carmona', correct: false},
        {text: 'Aníbal Cavaco Silva', correct: false},
        {text: 'Américo de Deus Rodrigues Tomás', correct: false}
    ]
    },
    {
    question: "What mountain in the Azores contains the highest point in all of Portugal?",
    answers: [
        {text: 'Mount Pico', correct: true},
        {text: 'Mount Cesar', correct: false},
        {text: 'Mount Corvo', correct: false},
        {text: 'Mount Alentejo', correct: false}
    ]
    },
    {
    question: " The nine major islands of the Azores are divided into three main groups. Which of the following is not one of the three groups?",
    answers: [
        {text: 'Western Group', correct: false},
        {text: 'Southern Group', correct: true},
        {text: 'Central Group', correct: false},
        {text: 'Eastern Group', correct: false}
    ]
    },
    {
    question: "What bird of prey, the symbol of the Azores, is pictured near the center of the flag of the Azores?",
    answers: [
        {text: 'Caracara', correct: false},
        {text: 'Goshawk', correct: true},
        {text: 'Falcon', correct: false},
        {text: 'Osprey', correct: false}
    ]
    },

]