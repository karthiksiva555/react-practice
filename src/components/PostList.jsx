import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal.jsx';
import { useState } from 'react';

function PostList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        // setPosts([postData, ...posts]); Works but not recommended
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {
                isPosting && 
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            }
            {
                posts.length > 0 && 
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
            }
            {
                posts.length === 0 &&
                <div>
                    <h2>There are no posts yet.</h2>
                    <p>Click New Post button to add some!</p>
                </div>
            }
        </>
    )
}

export default PostList;