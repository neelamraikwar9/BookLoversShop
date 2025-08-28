import useFetch from "../assets/hooks/useFetch";

export const categoriesList = [
    {
        id: 1,
        value: "Fiction",
        label:  "Fiction"
    },

     {
        id: 2,
        value: "Non-Fiction",
        label:  "Non-Fiction"
    },

     {
        id: 3,
        value: "Young Adult",
        label:  "Young Adult"
    }
] 


export const ratingList = [
    {
        id: 1, 
        value:  '2',
        label: 'Star🌟 1 and above'
    },
    
     {
        id: 2, 
        value:  '3',
        label: 'Star🌟 2 and above'
    },

    // {
    //     id: 2, 
    //     value:  '3.3',
    //     label: 'Star🌟 2 and above'
    // },

     {
        id: 3, 
        value:  '3.8',
        label: 'Star🌟 3 and above'
    },

    //  {
    //     id: 3, 
    //     value:  '3.9',
    //     label: 'Star🌟 3 and above'
    // },

    // {
    //     id: 3, 
    //     value:  '3.5',
    //     label: 'Star🌟 3 and above'
    // },

    // {
    //     id: 3, 
    //     value:  '3.6',
    //     label: 'Star🌟 3 and above'
    // },

    {
        id: 4, 
        value:  '4',
        label: 'Star🌟 4 and above'
    },

    // {
    //     id: 4, 
    //     value:  '4.3',
    //     label: 'Star🌟 4 and above'
    // },

    // {
    //     id: 4, 
    //     value:  '4.4',
    //     label: 'Star🌟 4 and above'
    // },

    // {
    //     id: 4, 
    //     value:  '4.5',
    //     label: 'Star🌟 4 and above'
    // },

    //     {
    //     id: 4, 
    //     value:  '4.6',
    //     label: 'Star🌟 4 and above'
    // },

    // {
    //     id: 4, 
    //     value:  '4.7',
    //     label: 'Star🌟 4 and above'
    // },

    // {
    //     id: 4, 
    //     value:  '4.8',
    //     label: 'Star🌟 4 and above'
    // },

     {
        id: 5, 
        value:  '4.9',
        label: '🌟'
    },
    {
        id: 5, 
        value:  '5',
        label: '🌟'
    }
]


const Books = () => {
     const {data, loading, error} = useFetch("https://selling-books-data.vercel.app/books");
    console.log(data);
    return (
        <main>

         <div>
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
        </div>


        </main>
    )
}

export default Books;