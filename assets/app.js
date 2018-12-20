// questions
var questions = [{
    question: "According to Mean Girls, what do we wear on Wednesdays?",
    answers: ["Yellow", "Pink", "Blue", "Purple"],
    correct: "Pink"
}, {
    question: "What's Puff Daddy's real name?",
    answers: ["P Diddy", "Joyner Lucas", "Sean Combs", "Will Smith"],
    correct: "Sean Combs"
}, {
    question: "In the hit series 'Seinfeld' what is Kramer's first name?",
    answers: ["Frazier", "Crosby", "Cosmo", "Jim"],
    correct: "Cosmo"
}, {
    question: "What is Kanye West's third album?",
    answers: ["Graduation", "My Beautiful Dark Twisted Fantasy", "The College Dropout", "Yeezus"],
    correct: "Graduation"
}];

// set area where questions will be displayed
var questionArea = $("#questions");
var answersArea = $("#answers");

// setInterval
var timer;

// counters
var correct = 0;
var incorrect = 0;
var time = 120;

// hide done button
$("#done").hide();

// game start function
var gameStart = function() {
    timer = setInterval(countdown, 1000);
    $("#timer").append("<h1>Time Remaining: <div id='countdown'>120</div> Seconds</h2>");
    $("#start").hide();
    $("#done").show();

    for (var i = 0; i < questions.length; i++) {
        questionArea.append("<h2>" + questions[i].question + "</h2>");
        // pull array inside of an array? foreach
        questions[i].answers.forEach(function(option){
            questionArea.append("<input type='radio' name='question-" + i + "'value-'" + option + "''>" + option);
        });
    }
}

// times up function
var countdown = function() {
    time--;
    $("#countdown").html(time);
    if (time === 0) {
        alert("Time Up!");
        // add scores
        postResults();
        clearInterval();
    }
}

// add scores function
var addScores = function() {
    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val()===questions[0].correct) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val()===questions[1].correct) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val()===questions[2].correct) {
            correct++;
        }
        else {
            incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val()===questions[3].correct) {
            correct++;
        }
        else {
            incorrect++;
        }
    });    
}


// results page function
var postResults = function() {
    clearInterval(timer);
    $("#questions").hide();
    $("#results").append("Number Correct: " + correct);
    $("#results").append("<div>Number Incorrect: " + incorrect + "</div>");
    $("#results").append("<div>Unanswered: " + (questions.length - (correct + incorrect)) + "</div>");
    $("#start").show();
    $("#done").hide();
}

// click functions
$("#start").on("click", function(){
    gameStart();
});

$("#done").on("click", function(){
    addScores();
    postResults();

})