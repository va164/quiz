$(document).ready(function() { 
	"use strict";
	//quiz questions array
	var questions = [{
		qNum: 1,
		question: "Megadeth?",
		choices: ["Mustaine", "Hetfield", "Friedman", "Petrucci", "Townsend"],
		correct: 3,
		fact: "Mustaine founded Megadeth"
	},
	{
		qNum: 1,
		question: "Metallica?",
		choices: ["A", "B", "C", "Petrucci", "Townsend"],
		correct: 1,
		fact: "Mustaine founded Megadeth"
	},
	{
		qNum: 1,
		question: "Cacaphony?",
		choices: ["Mustaine", "Hetfield", "Friedman", "Petrucci", "Townsend"],
		correct: 2,
		fact: "Mustaine founded Megadeth"
	},
	{
		qNum: 1,
		question: "DT?",
		choices: ["Mustaine", "Hetfield", "Friedman", "Petrucci", "Townsend"],
		correct: 3,
		fact: "Mustaine founded Megadeth"
	},
	{
		qNum: 1,
		question: "Weird?",
		choices: ["Mustaine", "Hetfield", "Friedman", "Petrucci", "Townsend"],
		correct: 4,
		fact: "Mustaine founded Megadeth"
	}]

// variables
var questionCounter = 0,
score = 0;


// functions
function nextQuestion() {
	$("#questionText").html('');
	$(".options").html('');
	var nQuestion = '<span id="questionText">'+questions[questionCounter].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[questionCounter].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[questionCounter].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[questionCounter].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[questionCounter].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer">';
     $("#questionText").html(nQuestion);       
}

function checkAnswer() {
	var answer = parseInt($("input[type='radio']:checked").val());
	if (answer == questions[questionCounter].correct) {
		score++
		console.log(score);
	};

}

$(".question").on("click", "#submit", function() {
	event.preventDefault();
	checkAnswer();
	questionCounter++;
	nextQuestion();
	console.log("answer submitted");
})



});