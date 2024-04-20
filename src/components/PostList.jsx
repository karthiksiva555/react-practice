import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {

    const posts = useLoaderData();

    return (
        <>
            {
                posts.length > 0 && 
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} author={post.author} body={post.body} id={post.id}/>)}
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