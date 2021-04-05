const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// EXAMPLE FROM MINIPROJECT:
// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newPost = await Post.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newPost);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

  router.post('/post', withAuth, async (req, res) => {
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/comment', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // TODO: how to edit a comment (update)?

  router.delete('/post/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;