const mongoose = require("mongoose");

// 스키마 정의
const PostSchema = new mongoose.Schema({
  // 게시물 제목
  title: {
    type: String,
    required: true,
  },
  // 게시물 내용
  body: {
    type: String,
    required: true,
  },
  // 게시물 작성일
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// PostSchema를 사용해 Post 모델 만들어서 내보냄
module.exports = mongoose.model("Post", PostSchema);
