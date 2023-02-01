const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var timerCount = questions.length * 15;



function(){
function buildQuiz(){
    //variable to store html output
const outPut = [];

//for each question
myQuestions.forEach(
    (currentQuestion, questionNumber)=>{
//variable to store the list of possible answers
const answers = [];
//as well as each available answer
for(letter in currentQuestion.answers){
//add html radio button 
answers.push(
 `<label>
 <input type= "radio" name ="question${questionNumber}"
value="${letter}">
 ${letter} : 
 ${currentQuestion.answers[letter]}
 </label>`
 );
}
//add this question and its answers to the output

output.push(
    `<div class="slide">
<div class = "question"> ${currentQuestion.question} </div>
<div class = "answers"> ${answers.join("")}</div>
</div>`
);
}
);
// combine our output list into one string of HTML to put on the page
quizContainer.innerHTML = output.join('');
}




}

function showResults(){
    const answerContainers =
quizContainer.querySelectorAll('.answers');

//tracks answers and tallys score as well as moniters time
let numCorrect = 0;

myQuestions.forEach((currentQuestion, questionNumber) =>{
    const answerContainer =
    answerContainers[questionNumber];
    const selector =
    `input[name=question${questionNumber}]:
    checked`;
    const userAnwer =
    answerContainer.querySelector(selector) || {}).value;


    //for correct answers
    if(userAnwer ===currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = `lightblue`;}
        else{
            answerContainer[questionNumber].style.color ='black';}
        });

        resultsContainer.innerHTML = 
        `${numCorrect} out of ${myQuestions.length}`;
        }

        function showSlide(n) {
            slides[currentSlide].classList.remove(
                `active-slide`);
                slides[n].classList.add('active-slide');
                currentSlide = n;
                if(currentSlide===0){
                    previousButton.style.display =
                    `inline-block`;
                }
                if(currentSlide=== slides.length-1){
                    nextButton.style.display =
                    `none`;
                    submitButton.style.display =
                    `inline-block`;
                }
                else{
                    nextButton.style.display =
                    `inline-block`;
                    submitButton.style.display =
                    `none`;
                }
            }
            function showNextslide() {
                showSlide(currentSlide+1);
            }
            function showPreviousslide(){
                showSlide(currentSlide-1);
            }
            
            )

        }
    }
})



}

//display quiz
buildQuiz();


//submit button

submitButton.addEventListener('click',showResults);
