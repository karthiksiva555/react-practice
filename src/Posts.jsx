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

export default Posts
