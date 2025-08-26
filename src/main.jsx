import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App'
import Categories from './assets/pages/categories';
import BookList from './assets/pages/BookList';
// import AllBooks from './assets/pages/AllBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/",
    element: <Categories />
  },

  {
    path: "/bookList/:category",
    element: <BookList/>
  },

  // {
  //   path: "/allBooks",
  //   element: <AllBooks />
  // }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
