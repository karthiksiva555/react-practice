import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post.jsx'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Post author="Siva Karthik" description = "React is great!"/>
      <Post author="Vaishnavi" description = "Nurses are kind"/>
      <Post author="Chickpea" description = "Milk is tasty!"/>
    </>
  )
}

export default App
