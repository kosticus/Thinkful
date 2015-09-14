//// dom references ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");


/// view functions ///

function update(element,content,klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if(klass) {
		p.className = klass;
	}
}

// Event Listeners

$start.addEventListener('click', function() { play(quiz) } , false);

quiz = {
	"name":"Music Trivia",
	"description":"How much music trivia do you know?",
	"questions": [
		{ "question": "Which symphony orchestra was booked to travel on the Titanic but changed boats at the last minute?", "answer": "London Symphony Orchestra" },
		{ "question": "Which composer ruined his own performance career by utilizing a home-made finger-stretching device?", "answer": "Schumann" },
		{ "question": "What opera did Mozart write on the morning of its premiere?", "answer": "Don Giovanni" }
	]
}



play(quiz);

function play(quiz){
	var score = 0 // initialize score
	update($score,score)
	//main game loop
	for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}

	function ask(question){
		update($question,question);
		return prompt("Enter your answer:"); 
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
	}
	//end of main game loop
	gameOver();
	function gameOver() {
		//inform the player that the game has finished and tell them how many points they have scored
		update($question,"Game Over! You scored " + score + " points.");
	}
}
