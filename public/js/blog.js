const updateBlogHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#up-title-txt').value.trim();
    const content = document.querySelector('#up-content-txt').value.trim();
    const blogId = document.querySelector('.editBlogId').id;

    if (title && content && blogId) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
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

  const deleteBlogHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const blogId = document.querySelector('.editBlogId').id;

    if (blogId) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE',
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

  if(  document
    .querySelector('#post-update'))
  document
  .querySelector('#post-update')
  .addEventListener('click', updateBlogHandler);

  if(  document
    .querySelector('#post-delete'))
  document
  .querySelector('#post-delete')
  .addEventListener('click', deleteBlogHandler);