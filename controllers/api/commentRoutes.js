const router = require('express').Router();
const { Comment, User } = require('../../models');

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const CommentData = await Comment.create({
      Description: req.body.description,
      BlogId: req.body.blogId,
      UserId: req.session.user_id,
    });
    res.status(200).json(CommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const CommentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CommentData) {
      res.status(404).json({ message: 'No Comment found with that id!' });
      return;
    }

    res.status(200).json(CommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
