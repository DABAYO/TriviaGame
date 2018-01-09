$(document).ready();
setTimeout(timeUp, 1000 * 60);

function timeUp() {
    
    $("#timer").append("<h2>Time's Up!</h2>");
.html{id=countdown<"Time's up!">];
    }

var correct= 0;
var incorrect= 0;
var q1 = document.TriviaQuiz.q1.value;
var q2 = document.TriviaQuiz.q2.value;
var q3 = document.TriviaQuiz.q3.value;
var q4 = document.TriviaQuiz.q4.value;
var q5 = document.TriviaQuiz.q5.value;



function checkAns() {
    if (q1 == "Charlotte Brontë") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (q2 == "Violin") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (q3 == "100") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (q4 == "Caspian Sea") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (q5 == "Polio") {
        correct++;
    }
    else {
        incorrect++;
    }
    document.getElementById("results").style.visibility = "visible";
    document.getElementById("numRight").html(correct + " correct answers");
    document.getElementById("numWrong").html(incorrect + " incorrect answers");
    }
}
checkAns();
timeUp();