var tools = ["computer", "books", "text editor"];

function countUp(arr, count) {
	if (count === undefined) {
	count = 0;
	}
	if (count !== arr.length) {
		console.log(arr[count])
		return countUp(arr, count += 1);
	} else {
		return "done"
	}
}

countUp(tools);