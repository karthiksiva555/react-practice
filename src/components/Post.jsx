import classes from './Post.module.css';

function Post(details) {    
    return (
        <li className={classes.post}>
            <p className={classes.author}>{details.author}</p>
            <p>{details.description}</p>
        </li>
    );
}

export default Post;