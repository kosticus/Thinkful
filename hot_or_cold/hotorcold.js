function guessNumber() {
	var correctanswer = Math.floor((Math.random() * 100) + 1);
	var answer;
	var count = 0;
	var guesses = [];

	while (answer != correctanswer) { 
		answer = prompt("Guess a number from 1-100.");
		if (isNaN(+answer)) {
			alert("Please supply a number.");
			answer = prompt("Guess a number from 1-100.");
		} else if (answer % 1 != 0) {
			alert("Please supply a whole number.");
			answer = prompt("Guess a number from 1-100.");
		} else {
		if (Math.abs(correctanswer-answer) > 50) {
			count++;
			guesses.push(answer);
			console.log("Ice cold! You have made" + " " + count + " guesses: " + guesses);
		} else if (Math.abs(correctanswer-answer) > 30) {
			count++;
			guesses.push(answer);
			console.log("Cold! You have made" + " " + count + " guesses: " + guesses);
		} else if (Math.abs(correctanswer-answer) > 20) {
			count++;
			guesses.push(answer);
			console.log("Warm! You have made" + " " + count + " guesses: " + guesses);
		} else if (Math.abs(correctanswer-answer) > 10) {
			count++;
			guesses.push(answer);
			console.log("Hot! You have made" + " " + count + " guesses: " + guesses);
		} else if (Math.abs(correctanswer-answer) > 1) {
			count++;
			guesses.push(answer);
			console.log("Very hot! You have made" + " " + count + " guesses: " + guesses);
		} else {
			count++;
			guesses.push(answer);
			console.log("You're burning up! You have made" + " " + count + " guesses: " + guesses);
		}
	}
	}
	console.log("You got it! It took you " + count + " tries.");
	var again = prompt("Do you want to play again? Yes or no?");
		if (again == "yes" || again == "Yes" || again == "y" || again == "Y") {
			guessNumber();
		} else {
			console.log("Thanks for playing.");
		}
}


guessNumber();