import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from 'react'
import Movies from "./pages/Movies";
import PublicLayout from "./layout/PublicLayout";

let router = createBrowserRouter([
  {
    path : '/',
    element : <PublicLayout />,
    children : [
      {
        index : true,
        element : <Movies />,
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;

