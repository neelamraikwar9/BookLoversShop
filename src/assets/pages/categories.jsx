import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import  { Link } from 'react-router-dom';

// import Header from '../components/Header';

const Categories = () => {
    

    const categories =  [ 
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
        name : "Young Adult",
        img: "https://i.imghippo.com/files/cHt8549pR.png",

        
      }

    ]

    return (
      <>
        <main className="container py-3">
            <div className="row">
            {categories.map((category) => 
       <div key={category.id} className="col-md-4">
         <div className="container py-3">
        {/* <Link to={`/bookList/${category.name}`}> */}
        <div className="card">
          <img src={category.img} alt={category.name} className="img-fluid"/>
          <br/>
          <h4>{category.name}</h4>
          <button></button>
        </div>
        {/* </Link> */}
       </div>
      </div>
      )}





     
     {/* <div className="row">
       <div className="col-md-4">
        <div className="container">
        {/* <Link to="/allBooks"> */}
        {/* <div className="card" >
           <img src="https://i.imghippo.com/files/yUC9826KOw.png" alt="All Books" className="img-fluid" value="All" onClick={handleFilter} />
        </div> */}
        {/* </Link> */}
        {/* </div>
      </div> */}


      {/* <div className="col-md-4">
         <div className="container">
        <div className="card"> 
          <img src="https://i.imghippo.com/files/BGRU2193qY.png" alt="Fiction" value="Fiction" onClick={handleFilter} className="img-fluid"/>
        </div>
        </div>
      </div> */}

      
       {/* <div className="col-md-4">
         <div className="container">
        <div className="card"> 
          <img src="https://i.imghippo.com/files/Tzj4924Y.png" alt="Non-Fiction" value="Non-Fiction" onClick={handleFilter} className="img-fluid"/> */}
          {/* <img src="https://i.imghippo.com/files/Tzj4924Y.png" alt="Non-Fiction" className="img-fluid" /> */}
        {/* </div>
        </div>
      </div> */}

       {/* <div className="col-md-4">
       <div className="container py-5">
        <div className="card">
          <img src="https://i.imghippo.com/files/cHt8549pR.png" alt="Young Adult" className="img-fluid" value="Young Adult" onClick={handleFilter} />
        </div>
       </div>
      </div> */} 



      </div> 
        </main>
        </>
    )
}

export default Categories;