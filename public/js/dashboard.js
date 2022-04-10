let showNewPostForm = false;

const createPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title-txt').value.trim();
    const content = document.querySelector('#content-txt').value.trim();
    if (title && content) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ title, content}),
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
  .querySelector('#blogsDiv').classList.add('invisible');
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
  
  if(document
    .querySelector('#new-post-form'))
  document
  .querySelector('#new-post-form').classList.add('invisible');
