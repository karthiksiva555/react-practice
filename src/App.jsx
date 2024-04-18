import './App.css'
import PostList from './components/PostList.jsx'
import MainHeader from './components/MainHeader.jsx'
import { useState } from 'react';

function App() {

  const [showModal, setShowModal] = useState(false);
  
  function showModalHandler(){
    setShowModal(true);
  }

  function hideModalHandler(){
    setShowModal(false);
  }

  return (
    <>       
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList isPosting={showModal} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
