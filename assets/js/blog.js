document.addEventListener('DOMContentLoaded', () => {
    // Waits for the DOM to fully load

    const postsContainer = document.getElementById('postsContainer');
    const backButton = document.getElementById('backButton');
    // Gets the posts container and back button elements

    const blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];
    // Retrieves blog entries from localStorage or initializes an empty array

    blogEntries.forEach(blogEntry => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${blogEntry.title}</h2>
            <p>${blogEntry.content}</p>
            <p><strong>Author:</strong> ${blogEntry.username}</p>
        `;
        postsContainer.appendChild(article);
        // Creates an article element for each blog entry and adds it to the posts container
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
        // Adds a click event to the back button to redirect to the index page
    });
});
