var quiz = [
	["Which symphony orchestra was booked to travel on the Titanic but changed boats at the last minute?", "London Symphony Orchestra"],
	["Which composer ruined his own performance career by utilizing a home-made finger-stretching device?", "Schumann"],
	["What opera did Mozart write on the morning of its premiere?", "Don Giovanni"]
]

var score = 0 // initialize score

play(quiz);

function play(quiz){
	//main game loop
	for (var i = 0, question, answer, max = quiz.length; i < max; i++) {
		question = quiz[i][0];
		answer = ask(question);
		check(answer);
	}

	function ask(question){
		return prompt(question); // quiz[i][0] is the ith question
	}

	function check(answer){
		if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
			alert("Correct!");
			//increase score by 1
			score++;
		} else {
			alert("Wrong!");
		}
	}
	//end of main game loop
	gameOver();
	function gameOver() {
		//inform the player that the game has finished and tell them how many points they have scored
		alert("Game Over! You scored " + score + " points.");
	}
}
