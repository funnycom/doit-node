// 'userInput'이라는 변수에 사용자로부터 받은 비밀번호가 저장되어 있습니다.
// 이 비밀번호가  ‘myPassword’라는 문자열을 해시한 값과 일치하는지 판단하는 함수를 작성하세요.

const bcrypt = require("bcrypt");

async function hashAndCheck() {
  try {
    const hashed = await bcrypt.hash("myPassword", 10);

    // userInput에 사용자로부터 받은 비밀번호가 저장되어 있다고 가정합니다.
    // 여기에서는 'myPassword'라는 문자열을 사용하겠습니다.
    // 다른 값을 넣고도 테스트해보세요.
    const userInput = "myPassword";

    const isMatch = await bcrypt.compare(userInput, hashed);

    if (isMatch) {
      console.log("비밀번호가 일치합니다");
    } else {
      console.log("비밀번호가 일치하지 않습니다");
    }
  } catch (error) {
    console.log(error);
  }
}

hashAndCheck();
