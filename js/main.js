
//the button onclick changes the title into the quiz
function startQuiz() {
    document.getElementById("title").style.visibility = "hidden";
    document.getElementById("quiz").style.visibility = "visible";
}

//answers for the questions
const answers = ["plant", "reproduce", "carbon", "trunk", "bark"];

//stores the correct and incorrect answers, checks the user results and shows the final score
function showResults() {
    let correct = 0;
    let incorrect = 0;
    
    for(var i = 0; i < answers.length; i++) {
        const answer = answers[i];
        let userInput = document.getElementById("a" + [i]).value
        const question = document.getElementById("q" + [i]);
        
        if(answer == userInput) {
            question.className = "correct";
            correct++;
        } else {
            question.className = "incorrect";
            incorrect++;
        };
    };
    document.getElementById("right").innerHTML = "Correct: " + correct
    document.getElementById("wrong").innerHTML = "Incorrect: " + incorrect
    
}