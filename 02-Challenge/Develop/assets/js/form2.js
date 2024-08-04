// TODO: Create a variable that selects the form element
//let form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const form = document.getElementById('blogForm');
const error = document.getElementById('error');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username === '' || title === '' || content === '') {
        alert('Please complete the form');
    } else {
        // Store the data in local storage or perform other actions
        localStorage.setItem('username', username);
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);

        // Redirect to another page
        window.location.href = 'blog2.html';
    }
});

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);