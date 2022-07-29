const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['rapid', 'charity'],
        correct: 1
    },
    {
        quiz: ['horror', 'terror', 'dread'],
        options: ['boredom', 'fear'],
        correct: 2
    },
];

let score = 0;
let clicked= [];

scoreDisplay.textContent = score;



function populateQuestions(){
    questions.forEach(question => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const logoDisplay = document.createElement('h1');
        logoDisplay.textContent = "🖊";
        questionBox.append(logoDisplay);

        questionDisplay.append(questionBox);
        question.quiz.forEach(tip=> {
            const tipText = document.createElement('p');
            tipText.textContent = tip;
            questionBox.append(tipText);
        });

        const questionButtons = document.createElement('div');
        questionButtons.classList.add('question-buttons');
        questionBox.append(questionButtons);

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button');
            questionButton.classList.add('question-button');
            questionButton.textContent = option;

            questionButton.addEventListener('click', () => 
            checkAnswer(
                questionButtons, 
                answerDisplay, 
                option, 
                optionIndex+1, 
                question.correct
                )
                );
                questionButtons.append(questionButton);
            })
            const answerDisplay = document.createElement('div');
            answerDisplay.classList.add('answer-display');

            questionBox.append(answerDisplay);
            
            questionDisplay.append(questionBox);
        })
}

function checkAnswer(questionButtons, answerDisplay, option, optionIndex, correctAnswer){
    let display="";
    if(optionIndex === correctAnswer){
        score++;
        display= "correct"
    }   else{
        score--;
        display= "wrong"
    }
    scoreDisplay.textContent = score;
    addResult(answerDisplay, display);
    clicked.push(option);
    console.log(clicked);
    for( let i=0; i < questionButtons.children.length; i++){
        questionButtons.children[i].disabled = clicked.includes(option);
    }
}

function addResult(answerDisplay, answer) {
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.remove('correct');
    answerDisplay.classList.add(answer);
    answerDisplay.textContent= answer.charAt(0).toUpperCase()+ answer.slice(1) + "!";
}

populateQuestions();

