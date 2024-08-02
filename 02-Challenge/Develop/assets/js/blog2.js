// TODO: Create a variable that selects the main element, and a variable that selects the back button element
let main = document.querySelector('main'); 
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement (element, text, className) {
  let newElement = document.createElement(element);
  newElement.textContent = text;
  newElement.setAttribute('class', className);
  main.appendChild(newElement);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {
  buildElement('h3', 'No blog posts yet!', 'no-posts');
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
  let blogData = readLocalStorage();
  if (!blogData.length) {
    noPosts();
    return;
  }
  blogData.forEach((post) => {
    buildElement('h3', post.title, 'post-title');
    buildElement('p', post.content, 'post-content');
  });
}
// TODO: Call the `renderBlogList` function
    renderBlogList();
    
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let backButton = document.querySelector('.back');
backButton.addEventListener('click', function () {
  redirectPage('../index.html');
});