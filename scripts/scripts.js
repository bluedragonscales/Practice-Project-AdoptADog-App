let postBtn = document.getElementById('addPostBtn');
let postForm = document.getElementById('addPostForm');
let cancelPost = document.getElementById('cancelPostBtn');

postBtn.addEventListener('click', function() {
    postForm.style.display = 'flex';
});

cancelPost.addEventListener('click', function() {
    postForm.style.display = 'none';
});