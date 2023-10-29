// jsonwebtoken 모듈을 사용해서 JWT 토큰을 생성하는 코드를 작성하세요.
// 토큰에는 user._id 값이 들어가야 합니다.
// 비밀번호는 secretKey 변수에 담겨 있다고 가정합니다.

const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: user._id }, secretKey);
