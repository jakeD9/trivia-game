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

// setInterval/timer
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

    for (var i = 0; i <questions.length; i++) {
        questionArea.append("<h2>" + questions[i].question + "</h2>");
        // pull array inside of an array?
    }
}

// times up function
var countdown = function() {
    time--;
    $("#countdown").html(time);
    if (time === 0) {
        alert("Time Up!");
        // add scores
        // results page
    }
}

// add scores function

// results page function
var postResults = function() {
    clearInterval(timer);
    $("#questions").hide();
    $("#results").append("Number Correct: " + correct);
    $("#results").append("Number Incorrect: " + incorrect);
    $("#results").append("Unanswered: " + (questions.length - (correct + incorrect)));
}

// click functions
$("#start").on("click", function(){
    gameStart();
});