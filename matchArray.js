var user = {
	name: "Kimberly",
	age: 24
}

var myArr = ["age", "name"]

function matchArray(obj,arr) {
	var keys = Object.keys(obj);
	var keyssort = keys.sort();
	var arrsort = arr.sort();
	if (keyssort.toString() === arrsort.toString()) {
	return true;
	} else {
	return false;
	}
}

console.log(matchArray(user,myArr));