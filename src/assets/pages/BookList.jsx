import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";


const BookList = () => {
    const {data, loading, error} = useFetch("https://selling-books-data.vercel.app/books");
    console.log(data);

     const {category} = useParams();
      const [books, setBooks] = useState([]);

     const filtered = category && category !== "all" ? data.filter((book) => book.category === category) : data;
     setBooks(filtered)

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
            {books?.map((book) =>
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