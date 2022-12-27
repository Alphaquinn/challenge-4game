const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var timerCount = questions.length * 15;




function buildQuiz(){
    //variable to store html output
const outPut = [];

//for each question
myQuestions.forEach(
    (currentQuestion,questionNumber=>{
//variable to store the list of possible answers
const Answers[];
//as well as each available answer
for(letter in currentQuestion.answers){
//add html radio button 
answers.push(
 `<label>
 <input type= "radio" name = Question${questionNumber} "value="${letter}">
 ${letter} : 
 $currentQuestion.answers[letter]}
 <label>'
 );
}
//add this question and its answers to the output

output.push(
'<div class = "question"> ${currentQuestion.question}</div>
<div class = "Answers.join('')}</div>'
)
)
}
}))




}

function showResults(){



}

//display quiz
buildQuiz();


//submit button

submitButton.addEventListener('click',showResults);
