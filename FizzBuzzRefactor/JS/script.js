var answer = prompt("Please pick a number from 1-100");

function numRequired() {
	answer = prompt("Please pick a number from 1-100");
}

while (isNaN(+answer)) {
	alert("Please supply a number.");
	numRequired();
}
while (answer % 1 != 0) {
	alert("Please supply a whole number.");
	numRequired();
}


function fizzbuzz(answer) {
	for (var i = 1; i <= +answer; i++) {
			if (i % 15 === 0) {
			console.log("fizzbuzz");
			}
		else if (i % 3 === 0) {
			console.log("fizz");
			}
		else if (i % 5 === 0) {
			console.log("buzz");
			} 
		else {
			console.log(i);
			}
		}
	}

fizzbuzz(answer);