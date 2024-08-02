// TODO: Create a variable that selects the form element
let form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit (event) {
  event.preventDefault();
  let title = document.querySelector('#title').value;
  let content = document.querySelector('#content').value;
  if (!title || !content) {
    alert('Error: Missing information');
    return;
  }
  let blogData = readLocalStorage();
  blogData.push({ title, content });
  storeLocalStorage(blogData);
  redirectPage('../blog.html');
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);