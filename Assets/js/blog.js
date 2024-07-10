const blogsList = document.querySelector(".blogsList");

blogsList.innerHTML = "";

const blogs = JSON.parse(localStorage.getItem("blogs"));

if (blogs != null) {
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const userName = blog.username;
    const title = blog.title;
    const content = blog.content;

    const div = document.createElement("div");
    const blogTitle = document.createElement("h2");
    const blogContent = document.createElement("p");
    const blogAuthor = document.createElement("p");

    div.setAttribute("class", "blogCard");
    blogTitle.setAttribute("style", "font-size: 35px;");
    blogContent.setAttribute("style", "font-size: 20px;");
    blogTitle.textContent = title;
    blogContent.textContent = content;
    blogAuthor.textContent = `Posted by: ${userName}`;

    blogsList.append(div);
    div.append(blogTitle);
    div.append(blogContent);
    div.append(blogAuthor);
  }
} else {
  const noContent = document.createElement("h2");
  noContent.setAttribute(
    "style",
    "color:white; text-align: center; padding-top: 100px"
  );
  noContent.textContent = "No blogs available, add something...";
  blogsList.append(noContent);
}