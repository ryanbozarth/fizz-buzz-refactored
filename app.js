$(document).ready(function() {

		var numberProvided = +$("#numberProvided").val();
		// if NaN alert("Please add a number between 1 and 100");

		function FizzBuzz() {
			for (var i = 1; i < numberProvided; i++){
	
	if (i % 15 === 0){
		$( "body" ).append("<p>FizzBuzz</p>");
	}
	else if (i % 3 === 0){
		$( "body" ).append("<p>Fizz</p>");
	}
	else if (i % 5 === 0){
		$( "body" ).append("<p>Buzz</p>");
	}
	else {
		$( "body" ).append(i, "</br>");
	}
}
}
}); // end doc ready