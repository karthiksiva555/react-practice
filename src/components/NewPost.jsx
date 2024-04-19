import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, onAddPost }) {
  
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
      setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody
    };    
    onAddPost(postData);
    onCancel();
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Task</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p>
        <label htmlFor="body">Details</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>      
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;