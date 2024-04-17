import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList() {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [showModal, setShowModal] = useState(true);

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler(){
        setShowModal(false);
    }

    return (
        <>
            {
                showModal && <Modal onClose={hideModalHandler}>
                        <NewPost onBodyChange={changeBodyHandler} 
                            onAuthorChange={changeAuthorHandler}/>
                    </Modal>
            }            
            <ul className={classes.posts}>
                <Post author={enteredAuthor} description = {enteredBody}/>
                <Post author="Vaishnavi" description = "Nurses are kind"/>
                <Post author="Chickpea" description = "Milk is tasty!"/>
            </ul>
        </>
    )
}

export default PostList;