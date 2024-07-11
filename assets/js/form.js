document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            errorMessage.textContent = 'Please complete all fields.';
            return;
        }

        const post = { username, title, content };
        let posts = JSON.parse(localStorage.getItem('blog')) || [];
        posts.push(post);
        localStorage.setItem('blog', JSON.stringify(posts));

        window.location.href = 'blog.html';
    });
});
