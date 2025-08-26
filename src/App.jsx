// import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header';
// import Footer from './assets/components/Footer';
import Categories from './assets/pages/categories';
import BookList from './assets/pages/BookList';
import Background from './assets/components/Background';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Background/>
    <br/>
    <Categories/>

      

      
    </>
  )
}

export default App
