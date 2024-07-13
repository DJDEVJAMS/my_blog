document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const backButton = document.getElementById('backButton');

    const blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

    blogEntries.forEach(blogEntry => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${blogEntry.title}</h2>
            <p>${blogEntry.content}</p>
            <p><strong>Author:</strong> ${blogEntry.username}</p>
        `;
        postsContainer.appendChild(article);
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
