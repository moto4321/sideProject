import express from 'express';

// Model
import Post from '../../models/post'
import auth from '../../middleware/auth';

const router = express.Router();

// api/post
router.get('/', async(req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
});

router.post('/', auth, async(req, res, next) => {
  try {
    console.log(req, "req");
    const { title, contents, fileUrl, creator } = req.body
    // 위의 구조분해를 req.body.title, req.body.contents ... 
    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      creator,
      // title: title ...
      // contents: contents ...
    }); // post 할 때는 보통 async await 붙임
    res.json(newPost);
  } catch(e) {
    console.log(e);
  }
});

export default router