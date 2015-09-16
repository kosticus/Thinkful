var quiz = {
	"name":"Music Trivia",
	"description":"How much music trivia do you know?",
	"questions": [
		{ "question": "Which symphony orchestra was booked to travel on the Titanic but changed boats at the last minute?", "choices": ["Berlin", "London", "New York", "Leipzig"], "correctAnswer": "London" },
		{ "question": "Which composer ruined his own performance career by utilizing a home-made finger-stretching device?", "choices": ["Schubert", "Liszt", "Schumann", "Rachmaninoff"], "correctAnswer": "Schumann"},
		{ "question": "What opera did Mozart write on the morning of its premiere?", "choices": ["Don Giovanni", "Le nozze di Figaro", "Die Zauberflöte", "Così fan tutte"], "correctAnswer": "Don Giovanni" },
		{ "question": "Which composer hit his foot with his conducting staff and eventually died from the injury?", "choices": ["Johann Pachelbel", "Antonio Vivalid", "Domenico Scarlatti", "Jean-Baptiste Lully"], "correctAnswer": "Jean-Baptiste Lully" },
		{ "question": "An early version of the trombone was called what?", "choices": ["Faggot", "Shawm", "Ocarina", "Sackbut"], "correctAnswer": "Sackbut" },
		{ "question": "Which great composer went completely deaf?", "choices": ["Bach", "Beethoven", "Mozart", "Wagner"], "correctAnswer": "Beethoven" }
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

//// function definitions ////

function play(quiz){
	var score = 0 // initialize score
	update($score,score)
	// hide button and show form
	hide($start);
	show($form);
	// add event listener to form for when it's submitted
	$form.addEventListener('click', function(event) {
		event.preventDefault();
		check(event.target.value);
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
		//clear the previous options
		$form.innerHTML = "";
		//create an array to put the different options in and a button variable
		var options = [], button;
		var answers = quiz.questions[i].choices
		var option1 = answers[0];
		options.push(option1);
		var option2 = answers[1];
		options.push(option2);
		var option3 = answers[2];
		options.push(option3);
		var option4 = answers[3];
		options.push(option4);
		options.forEach(function(name) {
			button = document.createElement("button");
			button.value = name;
			button.textContent = name;
			$form.appendChild(button);
		});
	}

	function check(answer){
		if(answer === quiz.questions[i].correctAnswer) {
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