// BLOG JAVASCRIPT
let postBtn = document.getElementById('addPostBtn');
let postForm = document.getElementById('addPostForm');
let addPost = document.getElementById('formAddPostBtn');
let cancelPost = document.getElementById('cancelPostBtn');
let blogMain = document.getElementById('blogMain');

// Open the add post form.
postBtn.addEventListener('click', function() {
    postForm.style.display = 'flex';
});

// Close the add post form.
cancelPost.addEventListener('click', function() {
    postForm.style.display = 'none';
});

// Add a new post to the blog.
addPost.addEventListener('click', function() {
    event.preventDefault();

    // Get values of the title and post body from the form inputs.
    let title = document.getElementById('title').value;
    let postBody = document.getElementById('postBody').value;
    
    // Create a new HR (for smaller sized screens) and a new article for the main page element.
    let newHR = document.createElement('hr');
    let newArticle = document.createElement('article');

    // Add a new image element to the new article.
    let newImg = document.createElement('img');
    newImg.src = 'C://Users//kckar//Desktop//Practice-Project-AdoptADog-App//images//blog-3.jpg';
    // newImg.setAttribute('width', '30%');
    newArticle.appendChild(newImg);

    // Create a new div and append the title and post body to it.
    let newDiv = document.createElement('div');

    let newTitle = document.createElement('h3');
    let hNode = document.createTextNode(title);
    newTitle.appendChild(hNode);

    let newPara = document.createElement('p');
    let pNode = document.createTextNode(postBody);
    newPara.appendChild(pNode);

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPara);

    // Add the new div with the new title and post body to the new article.
    newArticle.appendChild(newDiv);

    // Add the new hr and article at the top of the main element.
    blogMain.prepend(newArticle);
    blogMain.prepend(newHR);
    
    title.value = '';
    postBody.value = '';
    postForm.style.display = 'none';
});