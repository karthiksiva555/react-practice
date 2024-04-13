import classes from './Post.module.css';

function Post(details) {    
    return (
        <div className={classes.post}>
            <p className={classes.author}>{details.author}</p>
            <p>{details.description}</p>
        </div>
    );
}

export default Post;