# The Tech Blog
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept returns thousands of think pieces and tutorials from developers of all skill levels!

The Tech Blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. A developer who writes about tech can use this CMS-style blog site to publish articles, blog posts, thoughts and opinions.

Features of the application includes
* On visiting the site for the first time, user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
* On click of the homepage option, user is taken to the homepage.
* On click on any other links in the navigation, user is prompted to either sign up or sign in.
* On choose to sign up user prompted to create a username and password
* On click on the sign-up button, user credentials are saved and I am logged into the site.
* On revisit the site at a later time and choose to sign in, user is prompted to enter my username and password.
* On signing in to the site, user sees navigation links for the homepage, the dashboard, and the option to log out
* On click on the homepage option in the navigation, user is taken to the homepage and presented with existing blog posts that include the post title and the date created.
* On click on an existing blog post, user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
* On entering a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
* On click on the dashboard option in the navigation, user is taken to the dashboard and presented with any blog posts user have already created and the option to add a new blog post
* On click on the button to add a new blog post, user is prompted to enter both a title and contents for my blog post.
* On click on the button to create a new blog post, the title and contents of my post are saved and user is taken back to an updated dashboard with new blog post.
* On click on one of my existing posts in the dashboard, user will be able to delete or update my post and taken back to an updated dashboard.
* On click on the logout option in the navigation, user is signed out of the site
* On idle on the site for more than a set time, user will be able to view comments but prompted to log in again before user can add, update, or delete comments.

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif)

## Application Deployed Url

Below is link for application deployed using Heroku

[The Tech Blog](https://boiling-temple-03518.herokuapp.com)