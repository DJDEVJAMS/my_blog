document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            errorMessage.textContent = 'Please complete all fields.';
            return;
        }

        const blogEntry = { username, title, content };
        let blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
        blogEntries.push(blogEntry);
        localStorage.setItem('blogEntries', JSON.stringify(blogEntries));

        window.location.href = 'blog.html';
    });
});
