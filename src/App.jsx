import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from 'react'
import MoviesPage from "./pages/MoviesPage";
import PublicLayout from "./layout/PublicLayout";
import CartPage from "./pages/CartPage";
import SignInPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import DetailMovie from "./pages/DetailMovie";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path : '/',
    element : <PublicLayout />,
    children : [
      {
        index : true,
        element : <HomePage/>,
      },
      {
        path: 'movies',
        element: <MoviesPage />
      },
      {
        path: 'detail/:id',
        element: <DetailMovie />
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'information',
        element: <div>Information</div>
      }
    ]
  },
  {
    path : "cart",
    element : <CartPage/>,
  },
  {
    path : 'sign-in',
    element : <SignInPage/>
  },
  {
    path : 'sign-up',
    element : <SignUpPage/>
  }
])

const App = () => {
  if (router === null || router === undefined) {
    throw new Error("Router is null or undefined");
  }

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App;

