var ul = document.createElement("ul");
document.getElementById("output").appendChild(ul);

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
		el = document.createElement("li");
			if (i % 15 === 0) {
			el.textContent = "Fizzbuzz";;
			}
		else if (i % 3 === 0) {
			el.textContent = "Fizz";
			}
		else if (i % 5 === 0) {
			el.textContent = "Buzz";
			} 
		else {
			el.textContent = i;
			}
		}
		ul.appendChild(el);
	}

fizzbuzz(answer);