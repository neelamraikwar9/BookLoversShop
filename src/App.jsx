import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
import Categories from './assets/pages/categories';
// import AllBooks from './assets/pages/BookList';
import Background from './assets/components/Background';
import useFetch from './assets/hooks/useFetch'

function App() {
  //   const {data, loading, error} = useFetch(`https://selling-books-data.vercel.app/books`);
  //   console.log(data);

  //   const [books, setBooks] = useState(data);
  //   const [selectCategory, setSelectCategory] = useState("All");

  // const filtered = selectCategory === "All" ? books : books.map((book) => book.category === selectCategory)



  return (
    <>
    <Header/>
    <Categories/>
    <Background/>
    </>
  )
}

export default App
