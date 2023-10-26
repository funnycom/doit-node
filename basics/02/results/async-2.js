// 작업 순서 조절하기 - 비동기 처리

function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
