$(document).ready(function() {

	$('.convert').on('click', function() {
        var userInput = +($('#userInput').val());
		checkValue(userInput);
	});
	clear();	

}); //end doc ready

	function clear(){
		$('.clear').on('click', function(){
			$('.result').empty();
			$('#userInput').val('');
		});
	}



	function checkValue(value) {
		if (isNaN(value)){
			alert("Please enter a valid number");
		}
		else if (value % 1 != 0) {
			alert("Please enter a non decimal number");
		}
		else if (value < 1 || value > 100){
			alert("Please enter a number between 1 and 100");
		}
		else {
			FizzBuzz(value);
		}
	}

	function FizzBuzz(num) {
		for (i = 1; i <= num; i++) {
       		result = " ";
        	if (i % 15 === 0) {
            	result += "FizzBuzz <br>";
        	}
        	else if (i % 3 === 0) {
            	result += "Fizz <br>";
        	}
        	else if (i % 5 === 0) {
           	 result += "Buzz <br>";
       		}
        	else {
          		result += i + '<br>';
        	}
        	appendToResult(result);
        }
     }

     function appendToResult(result) {
     	$('.result').append(result);
     }
