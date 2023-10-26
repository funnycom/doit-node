// 중간에 시간 걸리는 작업이 있을 경우

function displayA() {
  console.log('A');
}
function displayB() {
  setTimeout(() => {
    console.log('B');
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
