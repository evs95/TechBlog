const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const BlogData = await Blog.findAll({
      include: [{ model: User },{ model: Comment }],
    });
    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single card
router.get('/:id', async (req, res) => {
  try {
    const BlogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with that id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a card
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      Title: req.body.title,
      Content: req.body.content,
      UserId: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a card
router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update({
      Title: req.body.title,
      Content: req.body.content,
      UserId: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      }});
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a card
router.delete('/:id', async (req, res) => {
  try {
    const BlogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!BlogData) {
      res.status(404).json({ message: 'No Blog found with that id!' });
      return;
    }

    res.status(200).json(BlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
