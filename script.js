function calculate() {
  // Get user input from HTML page
  var userInput = document.getElementById("userInput").value;
  // Perform calculations
  var addResult = (userInput * 1) + 25;
  var subtractResult = (userInput * 1) + 25;
  var multiplyResult = (userInput * 1) + 35;
  // Display results
  document.getElementById("addResult").innerHTML = "ဘဏ်ထုတ်: " + addResult;
  document.getElementById("subtractResult").innerHTML = "Wave Money ထုတ် " + subtractResult;
  document.getElementById("multiplyResult").innerHTML = "အိမ်ထုတ်: " + multiplyResult;
}
