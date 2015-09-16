var arrayofNumbers = [1,2,3,4,5];

function timesTwo(number) {
	return number * 2;
}

function timesFive(number) {
	return number * 5;
}

function squared(number) {
	return number * number;
}

var modifiedArray = arrayofNumbers.map(squared);
console.log(modifiedArray);