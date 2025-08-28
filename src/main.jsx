import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App'
import Categories from './assets/pages/categories';
import BookList from './assets/pages/BookList';
import AllBooks from './assets/pages/AllBooks';
import WishList from './assets/pages/WishList';
import Cart from './assets/pages/Cart';
import Login from './assets/pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/",
    element: <Categories />
  },

  // {
  //   path: "/bookList/:category",
  //   element: <BookList/>
  // },

  {
    path: "/allBooks",
    element: <AllBooks />
  },

  {
    path: "/wishList-page",
    element: <WishList />
  },

  {
    path: "/cart-page",
    element: <Cart />
  },

  {
    path: "/login-page",
    element: <Login />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
