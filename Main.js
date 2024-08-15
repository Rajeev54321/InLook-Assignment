//created the displayResult function

function displayResult(message) {
    document.getElementById("result").textContent = message;
  }
  
  // here checking the input type, in case of Not a Number
  function handleInput(input) {
    if (isNaN(input)) {
      displayResult(""); // it will clear the previous result
      return;
    }
  
    // checking if number is less than 0
  
    if (input < 0) {
      displayResult("Please enter a positive value");
    } else if (input % 2 === 0) {
      displayResult(getNextEvenNumbers(input));
    } else {
      displayResult(getNextOddNumbers(input));
    }
  }
  
  // function for next three even number
  
  function getNextEvenNumbers(number) {
    const nextEvens = [number + 2, number + 4, number + 6];
    return `Next 3 even numbers: ${nextEvens.join(", ")}`;
  }
  
  // function for next three odd number
  
  function getNextOddNumbers(number) {
    const nextOdds = [number + 2, number + 4, number + 6];
    return `Next 3 odd numbers: ${nextOdds.join(", ")}`;
  }
  
  // handling the input after taking input from user
  
  document.getElementById("numberInput").addEventListener("input", function () {
    const input = parseInt(this.value);
    handleInput(input);
  });
  