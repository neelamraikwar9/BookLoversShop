import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";


const BookList = () => {
    const {category} = useParams();
    const [book, setBook] = useState([]);

    const {data, loading, error} = useFetch("https://selling-books-data.vercel.app/books");
    console.log(data);


  
    
    return (
        <>
        <Header />
        <br/>
        <main>
        <div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching books.</p>}
        {data && data?.length > 0 ? (
            <div className="row">
            {data?.map((book) =>
            <div className="col-md-4 container py-3">
                <div className="card">
                <div className="bg-body-secondary">
                    <img src={book.image} alt={book.name} className="img-fluid" />
                    </div>
                    <br/>
                    <p>{book.name} by {book.author}</p>
                    <h6>{book.price}</h6>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
             )}
            </div>
        ) : (
            <p></p>
        )}
        </div>
    </main>
    </>


    )
}

export default BookList;