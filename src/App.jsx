import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList.jsx'
import MainHeader from './components/MainHeader.jsx'

function App() {

  return (
    <>
      <MainHeader/>
      <main>
        <PostList />
      </main>
    </>
  )
}

export default App
