var ul = document.createElement("ul");
document.getElementById("output").appendChild(ul);

for (var i = 1; i <= 100; i++) {
	el = document.createElement("li");
	if (i % 15 === 0) {
		el.textContent = "Fizzbuzz";
	} else if (i % 5 === 0) {
		el.textContent = "Fizz";
	} else if (i % 3 === 0) { 
		el.textContent = "Buzz";
	} else {
		el.textContent = i;
	}
	ul.appendChild(el);
}