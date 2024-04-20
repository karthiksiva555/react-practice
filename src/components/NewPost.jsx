import classes from "./NewPost.module.css";
import Modal from "./Modal";
import { Link, redirect, Form } from 'react-router-dom';

function NewPost() {

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="name">Task</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="body">Details</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  // object to key-value pairs
  const postData = Object.fromEntries(formData); 
  await fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  return redirect('/'); // Redirect to home after submission
}
