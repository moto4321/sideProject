import mongoose from 'mongoose';
import moment from 'moment';

// Create Schema
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true  // 검색기능 향상
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: String,
    default: -2  // 처음 작성한 사람 조회수를 빼기 위해서
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201"
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"  // category.js 와 연결시켜 주기 위해서
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss")
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})  

const Post = mongoose.model("post", PostSchema)

export default Post 