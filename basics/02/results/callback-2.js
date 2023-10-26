// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시하기   

function displayLetter() {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      setTimeout(() => {
        console.log('D');
        setTimeout(() => {
          console.log('stop!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

displayLetter();
