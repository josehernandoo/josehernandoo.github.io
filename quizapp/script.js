const quizData = [
    {
        question: "Apa ibu kota Australia?",
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Darwin',
        d: 'Canberra',
        correct: 'd'
    },{
        question: 'Kapan Ir.Soekarno dan Mohammad Hatta dibawa golongan muda ke rengasdengklok?',
        a: '17 Agustus 1945',
        b: '16 Agustus 1945',
        c: '15 Agustus 1945',
        d: '14 Agustus 1945',
        correct: 'b'
    },{
        question: 'CH3COOH adalah',
        a: 'Ethanol',
        b: 'Asam asetat',
        c: 'Acetone',
        d: 'Sodium asetat',
        correct: 'b'
    },{
        question: 'HTML adalah?',
        a: 'Hypertext Markup Language',
        b: 'Hyperlink',
        c: 'Hyperlink Markup Language',
        d: 'Hypertext',
        correct : 'a'
    },{
        question: 'What is the synonym of pretty',
        a: 'Fair',
        b: 'Bewitching',
        c: 'Lovely',
        d: 'All of the answers are correct',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct){
            score = score + 20;
        }

        console.log(score);

        currentQuiz++;
        if(currentQuiz < quizData.length)
    {
        loadQuiz();
    } else
    {
        quiz.innerHTML = `<h2>You scored ${score}/100</h2> <button onclick="location.reload()">Reload</button>`
    }
    }

    
})

