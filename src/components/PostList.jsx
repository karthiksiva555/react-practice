import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal.jsx';
import { useEffect, useState } from 'react';

function PostList({isPosting, onStopPosting}) {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchPosts() {
            const response = await fetch('http://localhost:8000/posts');
            const resData = await response.json();
            setPosts(resData.posts);
        }
        fetchPosts();
    }, []) // This [] defines when to call the effect; 
           // [] means no dependencies, so call the effect only on component load

    function addPostHandler(postData){
        // setPosts([postData, ...posts]); Works but not recommended
        setPosts((existingPosts) => [postData, ...existingPosts]);
        // Send POST request to /posts api endpoint
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
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
                    <h2>There are no tasks yet.</h2>
                    <p>Click New Task button to add some!</p>
                </div>
            }
        </>
    )
}

export default PostList;