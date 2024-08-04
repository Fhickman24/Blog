// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Get the light/dark mode toggle element
const toggle = document.getElementById('toggle');

// Get the root element of the document
const root = document.documentElement;

// Check if a mode is saved in local storage
const currentMode = localStorage.getItem('mode');

// Set the initial mode based on the saved value or default to 'light'
const mode = currentMode || 'light';

// Function to toggle the mode
function toggleMode() {
  // Toggle the mode between light and dark
  const newMode = mode === 'light' ? 'dark' : 'light';
  
  // Update the mode in local storage
  localStorage.setItem('mode', newMode);
  
  // Update the styles based on the mode
  if (newMode === 'dark') {
    root.style.setProperty('--circle-color', 'black');
    root.style.setProperty('background-color', 'black');
    root.style.setProperty('color', 'white');
  } else {
    root.style.setProperty('--circle-color',  background, linear-gradient);
        (--light-accent), 
        (--circle-color), 
        (--dark-accent);
    root.style.setProperty('background-color', 'white');
    root.style.setProperty('color', 'black');
  }
  // Update the mode variable
  mode = newMode;
}

// Add event listener to the toggle element
toggle.addEventListener('click', toggleMode);

// Set initial styles based on the mode
if (mode === 'dark') {
  root.style.setProperty('--circle-color', 'black');
  root.style.setProperty('background-color', 'black');
  root.style.setProperty('color', 'white');
}