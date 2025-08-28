// import useFetch from "../hooks/useFetch";
// import Header from "../components/Header";
import { useState } from "react";
import SearchBar from "../../searchBar/SearchBar";
import FilterPanel from "../../filterPanel/FilterPanel";
import List from "../../List/List";
import "./style.css";

const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  // const {data, loading, error} = useFetch("https://selling-books-data.vercel.app/books");
  // console.log(data);

  return (
    <>
      {/* <Header />
        <br/> */}

      <main>
        <div className="home">
          {/* search bar */}
          <SearchBar />

          <div className="home_panelList-wrap">
            <div className="home_panel-wrap">
              {/* {/* {filterpanel} */}
              <FilterPanel
                selectToggle={handleSelectCategory}
                selectedCategory={selectedCategory}
                selectRating={handleSelectRating}
                selectedRating={selectedRating}
              />
            </div>

            <div className="home_list-wrap">
              {/* {list} */}
              <List />
            </div>
          </div>
        </div>

        {/*<div>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching books.</p>}
        {data && data?.length > 0 ? (
            <div className="row container">
            {data?.map((book) =>
            <div className="col-md-4 container py-3">
                <div className="card">
                <div className="bg-body-secondary">
                    <img src={book.image} alt={book.name} className="img-fluid"/>
                    </div>
                    <br/>
                    <p className="text-center">{book.name} by {book.author}</p>
                    <h6 className="text-center">{book.price}</h6>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
             )}
            </div>
        ) : (
            <p></p>
        )}
        </div> */}
      </main>
    </>
  );
};

export default BookList;
