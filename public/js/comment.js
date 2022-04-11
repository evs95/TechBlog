const commentSubmitHandler = async (event) => {
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
        document.location.replace(`/blogdetails/${blogId}`);
      } else {
        alert(response.statusText);
      }
    }
  };

  if(  document
    .querySelector('#comment-submit'))
  document
  .querySelector('#comment-submit')
  .addEventListener('click', commentSubmitHandler);