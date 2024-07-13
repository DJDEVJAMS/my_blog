document.addEventListener('DOMContentLoaded', () => {
    // Waits for the DOM to fully load

    const form = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');
    // Gets the form and error message elements

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Prevents the default form submission

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        // Gets and trims the input values

        if (!username || !title || !content) {
            errorMessage.textContent = 'Please complete all fields.';
            return;
        }
        // Checks if any field is empty and displays an error message if so

        const blogEntry = { username, title, content };
        let blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
        blogEntries.push(blogEntry);
        localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
        // Creates a new blog entry, retrieves existing entries from localStorage, adds the new entry, and saves it back

        window.location.href = 'blog.html';
        // Redirects to the blog page
    });
});