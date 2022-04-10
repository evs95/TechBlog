const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE',
  });

Blog.belongsTo(User, {
    foreignKey: 'UserId',
});

User.hasMany(Comment, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(User, {
    foreignKey: 'UserId',
});

Blog.hasMany(Comment, {
    foreignKey: 'BlogId',
    onDelete: 'CASCADE',
  });

Comment.belongsTo(Blog, {
    foreignKey: 'BlogId',
});

module.exports = { User, Blog, Comment };
