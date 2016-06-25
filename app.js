$(document).ready(function() { 
	"use strict";	
	
	//quiz questions array
	var questions = [{
		question: "He created the \"Black Tooth Grin\", which became his band's official drink. This featured two shots of Seagrams 7, two shots of Crown Royal and a dash of Coke. The name of the drink comes from the lyrics for the Megadeth song Sweating Bullets.",
		correct: "a",
	},
	{
		question: "John Mayer considers this man his guitar hero and even has the legend's initials tattooed on his arm.",
		correct: "a",
	},
	{
		question: "Of his near-600 guitars, his favorite is the “Billie” Gibson Lucille. A Gibson Custom Shop Lucille in white, it is also adorned with a portrait of his wife, Billie.",
		correct: "c",
	},
	{
		question: "He played for many bands including Spinal Tap, Deep Purple and Greg Kihn's band. He was also invited to tour with Mick Jagger on his solo tour.",
		correct: "a",
	},
	{
		question: "He has had newly discovered fish, jellyfish and a fossilised snail named in his honour.",
		correct: "d",
	},
	{
		question: "Your Score Was ",
		correct: "",
	}
	]

// variables
window.questionCounter = 0;
window.score = 0;
var choice = ["q1","q2","q3","q4","q5"]


//loading function
loading();
function loading() {
	$('.intro').show();
	$(".q1").hide();
	$(".q2").hide();
	$(".q3").hide();
	$(".q4").hide();
	$(".q5").hide();
	$(".feedbackr").hide();
	$(".feedbackw").hide();
	$(".main").hide();
	$(".question").hide();

}

//begin game
begin();
function begin() {$(".start", ".intro").click(function(){
	$(".intro").hide()
	startquiz()
	console.log("quiz started");
});
}

// function to start quiz
function startquiz() {
	window.questionCounter === 0;
	window.score === 0;
	$(".main").show();
	$(".question").show();
	$(".q1").fadeIn(2500);
	$(".q2").hide();
	$(".q3").hide();
	$(".q4").hide();
	$(".q5").hide();
	$(".feedbackr").hide();
	$(".feedbackw").hide();
	var nQuestion = questions[window.questionCounter].question;
     $(".question").html(nQuestion);  
	console.log("starting questioncounter is " + window.questionCounter);

}

// function to receive input and check the answer
abc();
function abc() { $("#choicea1, #choiceb1, #choicec1, #choiced1, #choicee1, #choicea2, #choiceb2, #choicec2, #choiced2, #choicee2, #choicea3, #choiceb3, #choicec3, #choiced3, #choicee3, #choicea4, #choiceb4, #choicec4, #choiced4, #choicee4, #choicea5, #choiceb5, #choicec5, #choiced5, #choicee5").click(function() {

	event.preventDefault();
	//function to receive input
	var answer =  $(this).text();
	console.log("the correct answer was " +answer);

	//function to check answer and take action while counting score
	checkAnswer();
		function checkAnswer() {

			if (answer == questions[window.questionCounter].correct) {
				window.score++;
				$(".feedbackr").fadeIn(500);
				$(".feedbackw").hide();
				}
			else  {
				$('.feedbackw').fadeIn(500);
			}		
			console.log("score is " + window.score)
		};

	// function to show feedback
	showFeedback();
	function showFeedback() {
		$('.main').fadeOut();
		$('.question').fadeOut();
	};

	//if (questionCounter<4) 
		window.questionCounter++;

	//function to move to hide feedback and show next question
	nextQuestion();
	function nextQuestion() {
		$(".feedbackr, .feedbackw").click(function() {
			$(this).fadeOut(75);
			$(".question").slideDown();
			$(".main").fadeIn(500);
		});

	// change question box text
	var nQuestion = questions[questionCounter].question;
     $(".question").html(nQuestion); 
     console.log('now questioncounter is ' + questionCounter)
	 if (questionCounter>4) {$(".question").html(nQuestion + score); }

 	//display the next question
     $("." + choice[window.questionCounter-1]).hide();
     $("." + choice[window.questionCounter]).slideDown(3000);
}
});
}
});