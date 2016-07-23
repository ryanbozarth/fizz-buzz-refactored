$(document).ready(function() {


	$( ".run" ).on( "click", function() {
  		var userInput = +($("#numberProvided").val());
  		fizzbuzz(value);
		});



	function fizzbuzz(num) {

    for (i = 1; i <= num; i++) {
        result = " ";
        //check if i is divisible by both 3 and 5
        if (i % 15 === 0) {
            result += "FizzBuzz <br>";
        }
        //check if i is divisible by 3
        else if (i % 3 === 0) {
            result += "Fizz <br>";
        }
        //check if i is divisible by 5
        else if (i % 5 === 0) {
            result += "Buzz <br>";
        }
        //print i
        else {
            result += i + '<br>';
        }
        appendToResult(result);

    }


}
	function appendToResult(result) {
    //Append result of fizzbuzz to html
    $('.result').append(result);
}


}); //end doc ready

/*


	function checkValue (value){
		if (isNaN(value)){
			alert('Please enter a valid number');
		}
		else {
			var test = FizzBuzz(userInput);
			appendresults(test);
		}
	}




/*

    function checkValue(value) {
		if (isNaN (value) {
		alert('Please add a number between 1 and 100');
	}

	function onInput(){
	var userInput = prompt("Please enter a number", "43");

	function clear() {
		$('.clear').on('click', function(){
			$('#numberProvided').empty();
			$('#numberProvided').val('');


		});
	}
	clear();

*/