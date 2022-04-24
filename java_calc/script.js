
function addFunc(a,b) { // This function takes two arguments, adds them together and puts them into c.
  var c = a + b;
  return c;
}

console.log(addFunc(6,12)); // Test the addFunc

// Lets hook it into the html. This sends the values in the fields when you press the test button.


document.getElementById("addButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = addFunc(x,y);
}
function subtraction(arr) {
  var c = x - y;
  return c;
}
document.getElementById("subtractButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = subtraction(x,y);
}
function divide(arr) {
  var c = x / y;
  return c;
}
document.getElementById("divideButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = divide(x,y);
}

function multi(arr) {
  var c = x * y;
  return c;
}
document.getElementById("multiButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = multi(x,y);
}
