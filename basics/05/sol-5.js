// 다음과 같이 arr 배열이 주어졌을 때 1초 간격으로 arr 배열의 요소를 출력하는 Node.js 비동기 함수를 작성하세요.
const arr = [10, 20, 30, 40, 50];

function printArray(arr) {
  let index = 0;

  function nextElement() {
    if (index < arr.length) {
      console.log(arr[index]);
      index++;
      setTimeout(nextElement, 1000);
    }
  }

  nextElement();
}

/**
 * forEach문을 사용할 수도 있습니다 
 */

// function printArray(arr) {
//   arr.forEach((item, index) => {
//     setTimeout(() => {
//       console.log(item);
//     }, 1000 * (index + 1));
//   });
// }

printArray(arr);