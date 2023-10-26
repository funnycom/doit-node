function addNumbers(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

function display(result) {
  console.log(result);
}
addNumbers(10, 20, display);