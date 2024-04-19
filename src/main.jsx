import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewPost from './components/NewPost.jsx';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from './routes/RootLayout.jsx';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout/>, children:[
    { path: '/', element: <App/> },
    { path: '/create-post', element: <NewPost /> },
    { path: '/inner', element: <h1>This element is under MainHeader</h1> }
  ]},
  { path: '/outer', element: <h1>This element is outside Layout</h1> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
