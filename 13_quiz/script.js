const questions = [
    {
        title: 'How do you write "Hello World" in an alert box?',
        a: 'msgBox("Hello World");',
        b: 'alertBox("Hello World");',
        c: 'msg("Hello World");',
        d: 'alert("Hello World");',
        answer: 'd'
    },
    {
        title: 'How do you create a function in JavaScript?',
        a: 'function:myFunction()',
        b: 'function myFunction()',
        c: 'function = myFunction()',
        d: 'function [myFunction()]',
        answer: 'b'
    },
    {
        title: 'How to write an IF statement in JavaScript?',
        a: 'if (i == 5)',
        b: 'if i == 5 then',
        c: 'if i = 5 then',
        d: 'if i = 5',
        answer: 'a'
    },
    {
        title: 'How does a WHILE loop start?',
        a: 'while i = 1 to 10',
        b: 'while (i <= 10; i++)',
        c: 'while (i <= 10)',
        d: 'while (let i = 0; i <= 10; i++)',
        answer: 'c'
    },
    {
        title: 'How does a FOR loop start?',
        a: 'for (i <= 5; i++)',
        b: 'for (i = 0; i <= 5; i++)',
        c: 'for (i = 0; i <= 5)',
        d: 'for i = 1 to 5',
        answer: 'b'
    },
];

const answerButton = document.getElementById("answer-button");
const answerList = document.getElementsByClassName("answer-option");
const quizBox = document.getElementById("quiz-box");
const finalScoreTitle = document.getElementById("final-score-title");
const finalScore = document.getElementById("final-score");
var questionId = 0;
var score = 0;

loadQuestion(questionId);
console.log(quizBox.children[0])
quizBox.children[0] = '';

function loadQuestion(questionId) {
    const questionTitle = document.getElementById("question-title");
    const optionA = document.getElementById("a-text");
    const optionB = document.getElementById("b-text");
    const optionC = document.getElementById("c-text");
    const optionD = document.getElementById("d-text");

    questionTitle.innerHTML = questions[questionId].title;
    optionA.innerHTML = questions[questionId].a;
    optionB.innerHTML = questions[questionId].b;
    optionC.innerHTML = questions[questionId].c;
    optionD.innerHTML = questions[questionId].d;
}

function checkAnswer(answer, questionId) {
    if (answer === questions[questionId].answer) {
        score++;
    }
}

answerButton.onclick = () => {

    Array.from(answerList).forEach((element) => {

        if (element.checked) {

            if (questionId <= 4) {
                checkAnswer(element.id, questionId);
                questionId++;
                if (questionId < 5) {
                    loadQuestion(questionId);
                } else {
                    quizBox.innerHTML = '<h2>Final Score</h2>' + '<p>You answered ' + score + ' questions correct.</p>';
                    quizBox.style.justifyContent = 'center';
                }
            }

            element.checked = false;
        }
    });

}