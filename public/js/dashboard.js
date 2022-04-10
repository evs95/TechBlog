let showNewPostForm = false;

const createPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const description = document.querySelector('#comment-txt').value.trim();
    const blogId = document.querySelector('.blogId').id;
    if (description && blogId) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ description, blogId}),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response);
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const addNewPost = async (event) => {
    document
    .querySelector('#new-post-form').classList.remove('invisible');
    document
  .querySelector('#new-post-form').classList.add('visible');
  }

  if(  document
    .querySelector('#post-create'))
  document
  .querySelector('#post-create')
  .addEventListener('click', createPost);

  if(  document
    .querySelector('#new-post'))
  document
  .querySelector('#new-post')
  .addEventListener('click', addNewPost);

  document
  .querySelector('#new-post-form').classList.add('invisible');