// console.log('post js added');

function loadPosts() {
  // console.log('loading posts');
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
    const postContainer= document.getElementById('post-container')
  for (const post of posts) {
    const postDiv= document.createElement('div')
    postDiv.classList.add('post')
    console.log(posts);
    postDiv.innerHTML=`
    <h4>USer-${post.userId}</h4>
    <h5>post:${post.title}</h5>
    <h5>post description: ${post.completed}</h5>
    `;
    postContainer.appendChild(postDiv)
  }
}

loadPosts();
