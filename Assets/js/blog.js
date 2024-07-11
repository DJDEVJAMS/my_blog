document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('postsContainer');
  const backButton = document.getElementById('backButton');

  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><strong>Author:</strong> ${post.username}</p>
      `;
      postsContainer.appendChild(article);
  });

  backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
  });
});
