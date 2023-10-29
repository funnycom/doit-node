// bcyrpt를 사용해 ‘myPassword’라는 문자열을 해시하고 출력하는 코드를 작성하세요.

const bcrypt = require("bcrypt");

async function hashPassword() {
  const hashed = await bcrypt.hash("myPassword", 10);
  console.log(hashed);
}

hashPassword();
