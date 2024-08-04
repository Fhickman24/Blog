// Toggle between light and dark modes
document.getElementById('toggle').addEventListener('click', function() {
  document.main.classList.toggle('dark');
  document.main.classList.toggle('light');
});



// Form handling code
let form = document.querySelector('form');

function readLocalStorage() {
  let data = localStorage.getItem('content');
  return data ? JSON.parse(data) : [];
}

function storeLocalStorage(data) {
  localStorage.setItem('blogData', JSON.stringify(data));
}

function handleFormSubmit(event) {
  event.preventDefault();
  let title = document.querySelector('#title').value;
  let content = document.querySelector('#content').value;

  if (!title || !content) {
      document.getElementById('error').style.display = 'block';
      return;
  }

  let blogData = readLocalStorage();
  blogData.push({ title, content });
  storeLocalStorage(blogData);

  redirectPage('./blog2.html');
}

function redirectPage(url) {
  window.location.href = url;
}

form.addEventListener('submit', handleFormSubmit);

// TODO: Create a variable that selects the main element, and a variable that selects the back button element
let main = document.querySelector('main');
let backButton = document.querySelector('.back');

// TODO: Create a function that builds an element and appends it to the DOM
   // Wait for the DOM to load
   document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quoteForm');
    const quotesDiv = document.getElementById('quotes');

    // Load existing quotes from local storage
    const loadQuotes = () => {
        const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        quotesDiv.innerHTML = ''; // Clear existing quotes
        quotes.forEach((quote) => {
            addQuoteToPage(quote.quote, quote.author);
        });
    };

    // Save quotes to local storage
    const saveQuotes = (quotes) => {
        localStorage.setItem('quotes', JSON.stringify(quotes));
    };

    // Add a quote to the page and add interactivity
    const addQuoteToPage = (quote, author) => {
        const blockquote = document.createElement('blockquote');
        const p = document.createElement('p');
        const footer = document.createElement('footer');
        
        p.textContent = quote;
        footer.textContent = `— ${author}`;
        
        blockquote.appendChild(p);
        blockquote.appendChild(footer);
        quotesDiv.appendChild(blockquote);

        // Add click event listeners to paragraphs
        p.addEventListener('click', () => {
            alert(`You clicked on the quote: "${quote}"`);
        });

        // Add click event listener to footer
        footer.addEventListener('click', () => {
            alert(`You clicked on the footer: "${author}"`);
        });

        // Add hover effect to change background color of blockquote
        blockquote.addEventListener('mouseover', () => {
            blockquote.style.backgroundColor = '#e0e0e0';
        });

        blockquote.addEventListener('mouseout', () => {
            blockquote.style.backgroundColor = '#f9f9f9';
        });
    };

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const quote = form.quote.value;
        const author = form.author.value;
        
        // Add the new quote to the page
        addQuoteToPage(quote, author);
        
        // Save the new quote to local storage
        const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        quotes.push({ quote, author });
        saveQuotes(quotes);
        
        // Clear the form
        form.reset();
    });

    // Load quotes when the page loads
    loadQuotes();
});

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  let h2 = document.createElement('h2');
  h2.textContent = 'No blog posts yet!';
  h2.classList.add('no-posts');
  main.appendChild(h2);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  let blogData = readLocalStorage();
  if (!blogData.length) {
      noPosts();
      return;
  }
  blogData.forEach((post) => {
      createBlogPost(post.title, post.content);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // Other existing code...

  const blogData = readLocalStorage();

  if (blogData.length === 0) {
      noPosts();
  } else {
      // Render blog posts if there are entries in blogData
      blogData.forEach(post => {
          // Render each blog post
      });
  }

  // Other existing code...
});
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
  redirectPage('Develop/blog2.html');
});