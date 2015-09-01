var animalqty = 4;
var animal = "panda";
	if (animal == "sheep") {
		console.log(animalqty + " " + animal);
	} else if (animal == "geese" && (animalqty == 1)) {
		console.log(animalqty + " " + "goose");
	} else if (animal == "geese" && (animalqty > 1)) {
		console.log(animalqty + " " + animal);
	} else if (animalqty > 1) {
		console.log(animalqty + " " + animal + "s");
	} else if (animalqty == 1) {
		console.log(animalqty + " " + animal);
	}