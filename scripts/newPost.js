/** COMPLETE THIS PART */
async function addPost(post) {
    /**
     * 1. Get the list posts from local storage
     *      if local storage is empty, initialize the list of posts to an empty array
     * 2. Add the new post at the front of list
     * 3. Save the list posts back to local storage
     */

    /*
        There is a single key called 'posts'
        This hold all posts (?)
        This is also the list
        Append new posts to the start of this lists
    */
    const postObjects = []
    var posts = JSON.parse(localStorage.getItem('posts'))
    if (!posts){
        posts = []
    }
    posts.splice(0,0, post);
    localStorage.setItem('posts', JSON.stringify(posts));

}


document.querySelector('#new-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    addPost({title, body});
    e.target.reset();
});
