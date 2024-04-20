import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./Posts.jsx";
import "./index.css";
import NewPost, { action as newPostAction } from "./components/NewPost.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, { loader as postDetailsLoader } from "./components/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          // Absolute path
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          // Relative path
          { path: ":postId", element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
      { path: "/inner", element: <h1>This element is under MainHeader</h1> },
    ],
  },
  { path: "/outer", element: <h1>This element is outside Layout</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
