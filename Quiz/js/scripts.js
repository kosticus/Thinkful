var quiz = {
	"name":"Music Trivia",
	"description":"How much music trivia do you know?",
	"questions": [
		{ "question": "Which symphony orchestra was booked to travel on the Titanic but changed boats at the last minute?", "answer": "London Symphony Orchestra" },
		{ "question": "Which composer ruined his own performance career by utilizing a home-made finger-stretching device?", "answer": "Schumann" },
		{ "question": "What opera did Mozart write on the morning of its premiere?", "answer": "Don Giovanni" }
	]
}

	//// dom references ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");


/// view functions ///

function update(element,content,klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if(klass) {
		p.className = klass;
	}
}

function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}

// Event Listeners

$start.addEventListener('click', function() { play(quiz) } , false);

//hide the form at the start of the game
hide($form);

function play(quiz){
	var score = 0 // initialize score
	update($score,score)
	// hide button and show form
	hide($start);
	show($form);
	// add event listener to form for when it's submitted
	$form.addEventListener('sumbit', function(event) {
		event.preventDefault();
		check($form[0].value);
	}, false);

	var i = 0;
	chooseQuestion();


	//nested functions

	function chooseQuestion() {
		var question = quiz.questions[i].question;
		ask(question);
	}

	function ask(question){
		update($question,question);
		$form[0].value = "";
		$form[0].focus(); 
	}

	function check(answer){
		if(answer === quiz.questions[i].answer) {
			update($feedback,"Correct!","right");
			//increase score by 1
			score++;
			update($score,score)
		} else {
			update($feedback,"Wrong!","wrong");
		}
		i++;
		if(i === quiz.questions.length) {
			gameOver(); 
		} else {
			chooseQuestion();
		}
	}


	function gameOver() {
		//inform the player that the game has finished and tell them how many points they have scored
		update($question,"Game Over! You scored " + score + " points.");
		hide($form);
		show($start);
	}
}
