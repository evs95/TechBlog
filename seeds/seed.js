const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./BlogData.json');
const commentData = require('./Comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Users seeded");

  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Blogs seeded");

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Comments seeded");

  process.exit(0);
};

seedDatabase();
