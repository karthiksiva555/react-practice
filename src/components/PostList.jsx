import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Siva Karthik" description = "Developers are tired!"/>
                <Post author="Vaishnavi" description = "Nurses are kind"/>
                <Post author="Chickpea" description = "Milk is tasty!"/>
            </ul>
        </>
    )
}

export default PostList;