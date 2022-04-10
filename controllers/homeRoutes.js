const router = require('express').Router();
const {  User,Blog,Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const BlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = BlogData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  try {
    if(req.session.logged_in == 'undefined' || !req.session.logged_in){
      res.redirect('login');
    }

    const BlogData = await Blog.findAll({
      include: [
        {
          model: User
        },
      ],
    },
    {
      where: {
        UserId: req.session.user_id,
      }});

    // Serialize data so the template can read it
    const blogss = BlogData.filter((p) => p.UserId == req.session.user_id);
    const blogs = blogss.map((project) => project.get({ plain: true }));

    res.render('dashboard', { 
      blogs, 
      name: req.session.name, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addComment/blog/:id', async (req, res) => {
  try {
    if(req.session.logged_in == 'undefined' || !req.session.logged_in){
      res.redirect('/login');
    }
    console.log(`Entered add comment route - ${req.params.id}`);

    const BlogData = await Blog.findByPk(req.params.id,{
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const blog =BlogData.get({ plain: true });
    console.log(`\n\nadd comment route - get blog data - ${ JSON.stringify(blog)}`);

    // Pass serialized data and session flag into template
    res.render('comment', { 
      blog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {
    if(req.session.logged_in == 'undefined' || !req.session.logged_in){
      res.redirect('/login');
    }
    console.log(`Entered edit blog route - ${req.params.id}`);

    const BlogData = await Blog.findByPk(req.params.id,{
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const blog =BlogData.get({ plain: true });
    console.log(`\n\nadd comment route - get blog data - ${ JSON.stringify(blog)}`);

    // Pass serialized data and session flag into template
    res.render('blog', { 
      blog, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
