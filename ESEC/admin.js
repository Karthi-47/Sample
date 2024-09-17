// script.js
// Add event listener to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Add logic to handle link clicks here
    });
});

// Add event listener to header navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Add logic to handle link clicks here
    });
});