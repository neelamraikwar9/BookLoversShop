// import { useState, useEffect } from 'react';
// import useFetch from '../hooks/useFetch';
import ProductList from './BookList';
import  { Link } from 'react-router-dom';

// import Header from '../components/Header';

const Categories = () => {
    // const {data, loading, error} = useFetch("https://selling-books-data.vercel.app/books");
    // console.log(data)

    // const [books, setBooks] = useState(data);
    // const [currentBook, setCurrentBook] = useState("All");
    
    // const handleFilter = (event) => {
    //   let click = event.target.value;
    //   setCurrentBook(click);
    // }

    // useEffect(() => {
    //   if(currentBook === "All"){
    //     setBooks(data)
    //   } else{
    //     const filteredBooks = data.filter((book) => book.category === currentBook || book.category.includes(currentBook))
    //     setBooks(filteredBooks)
    //   }
    // }, [currentBook])


    const categories = [ 
      {
        id: 1,
        name : "All",
        img: "https://i.imghippo.com/files/yUC9826KOw.png"
      },

      {
        id: 2,
        name : "Fiction",
        img: "https://i.imghippo.com/files/BGRU2193qY.png"
      },

      {
        id: 3,
        name : "Non-Fiction",
        img: "https://i.imghippo.com/files/Tzj4924Y.png"
      },

      {
        id: 4,
        name : "Young-Adult",
        img: "https://i.imghippo.com/files/cHt8549pR.png"
      }

    ]

    return (
      <>
        <main className="container py-3">
            <div className="row">
            {categories.map((cat) => 
       <div key={cat.id} className="col-md-4">
         <div className="container">
        <Link to={`/bookList/${cat.name}`}>
        <div className="card">
          <img src={cat.img} alt={cat.name} className="img-fluid"/>
        </div>
        </Link>
       </div>
      </div>
      )}
     
       {/* <div className="col-md-4">
        <div className="container">
        <div className="card" > */}
        {/* <ProductList category="Fiction"/> */}
           {/* <img src="https://i.imghippo.com/files/BGRU2193qY.png" alt="Fiction" className="img-fluid"/> */}
        {/* </div> */}
       {/* </div>
      </div> */}
    
       {/* <div className="col-md-4">
         <div className="container">
        <div className="card"> */}
        {/* <ProductList category="Non-Fiction"/> */}
          {/* <img src="https://i.imghippo.com/files/Tzj4924Y.png" alt="Non-Fiction" value="Non-Fiction" onClick={handleFilter} className="img-fluid"/> */}
          {/* <img src="https://i.imghippo.com/files/Tzj4924Y.png" alt="Non-Fiction" className="img-fluid" /> */}
        {/* </div> */}
       {/* </div>
      </div> */}

       {/* <div className="col-md-4">
       <div className="container py-5">
        <div className="card"> */}
        {/* <ProductList category="Young-Adult"/> */}
          {/* <img src="https://i.imghippo.com/files/cHt8549pR.png" alt="Young-Adult" className="img-fluid"/> */}
        {/* </div>
       </div>
      </div> */}

      </div>
        </main>
        </>
    )
}

export default Categories;