import { Outlet } from 'react-router-dom'
import './Posts.css'
import PostList from './components/PostList.jsx'

function Posts() {

  return (
    <>
      <main>
        <Outlet />
        <PostList />
      </main>
    </>
  )
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8000/posts');
  const resData = await response.json();
  return resData.posts;
}
