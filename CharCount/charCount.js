var sentence = "My name is Kimberly.";

function stringTool(sentence) {
	var wordCount = sentence.split(" ").length;
	var charCount = (sentence.split("").length) - wordCount;
	var avgChar = charCount/wordCount;
	console.log("This string has " + wordCount + " words. The average length of each word is " + avgChar + " characters.");
}

stringTool(sentence);