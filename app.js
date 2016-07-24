$(document).ready(function() {


	
	$(".run").on("click", function(){
		var userInput = +($('#userInput').val());
		checkValue(userInput);
	});
	clear();
}); //end doc ready


function clear(){
	$(".clear").on("click", function(){
		$(".result").empty();
		$("#userInput").val('');

	});
}

function checkValue(value){
  if (isNaN(value)) {
  	alert("Please enter a number");
  }
  else if (value % 1 != 0){
  	alert("Please enter a non-decimal")
  }
  else if (value < 1 || value > 100){
  	alert("Please enter a number between 1 and 100")
  }
  else {
  	FizzBuzz(value);
  }
}


function FizzBuzz(num){
  for (var i = 1; i < num; i++){
  	result = " "
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
	  result += i + "<br>";
	}
	appendResult(result);
    }
  }
  function appendResult(result) {
    $(".result").append(result);
}

