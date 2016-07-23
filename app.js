//strict mode "use strict"

$(document).ready(function() {

	var userInput = prompt("Please enter a number", "43");

	/*
	var n = parseInt(userInput);
	if isNaN(n) {
		$('.results').append("not a number");
	}
	else {
		var test = FizzBuzz(userInput);
		appendresults(test);
	}

	*/



	
	function FizzBuzz(userInput) {
		for (i = 1; i <= userInput; i++) {
			result = " ";
			if (i % 15 === 0){
				result += "FizzBuzz <br>";
			}
			else if (i % 3 === 0){
				result += "Fizz <br>";
			}
			else if (i % 5 === 0){
				result += "Buzz <br>";
			}
			else {
				result += i + '<br>';
			}
			appendresults(result);
		}
	}

	function appendresults(result){
		$('.results').append(result);
	}

}); // end of doc ready

/*
	function someName() {

    function checkValue(value) {
		if (isNaN (value) {
		alert('Please add a number between 1 and 100');
	}

	$( ".run" ).on( "click", function() {
  		var number = +"#numberProvided";
  		console.log("number converted");
  		console.log('#numberProvided');
		});

*/