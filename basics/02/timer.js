let remainingTime = 3000; // 남은 시간을 3초로 설정
const waitingInterval = 500; // 대기 간격을 500ms로 설정

// 500ms마다 호출되는 함수
const timer = setInterval(() => {
  // 남은 시간을 표시
  console.log(`${remainingTime / 1000}초 남음`);
  remainingTime -= waitingInterval; // 남은 시간 감소

  if (remainingTime <= 0) {
    // 남은 시간이 0 이하일 경우 'Hi' 메시지를 표시하고 타이머를 종료
    console.log("Hi");
    clearInterval(timer);
  }
}, waitingInterval);
