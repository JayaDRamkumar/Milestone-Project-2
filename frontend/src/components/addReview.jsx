// const React = require('react')
// const Def = require('./default')

// import { useState, useEffect } from "react"
// import { useHistory } from "react-router"


// function AddReview({ movies, onSubmit }) {

//     const [movies, setMovies] = useState([])

//     const [review, setReview] = useState({
//         content: '',
//         review: false,
        
//     })

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`http://localhost:5001/movies`)
//             const users = await response.json()
//             setReview({ ...review})
           
//         }
//         fetchData()
//     }, [])

   

//     function handleSubmit(e) {
//         e.preventDefault()
//         onSubmit(review)
//         setReview({
//             content: '',
//             review: false,
//         })
//     }
 
//     return (
        
//                      <form onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="form-group col-sm-12">
//                                     <label htmlFor="content">Content</label>
//                                     <textarea
//                                         required
//                                         value={review.content}
//                                         onChange={e => setReview({ ...review, content: e.target.value })}
//                                         className="form-control"
//                                         id="content"
//                                         name="content"
//                                     />
//                                 </div>
//                              </div>
//             <div className="row">
//                 <div className="form-group col-sm-4">
//                     <label htmlFor="review">Review</label>
//                     <input
//                         checked={movie.review}
//                         onClick={e => setReview({ ...review, review: e.target.checked })}
//                         type="checkbox"
//                         id="review"
//                         name="review"
//                         className="form-control"
//                     />
//                 </div>
//                 </div>
//             <input className="btn btn-primary" type="submit" value="Add Review" />
        
//         </form>

//     )
// }

// module.exports = newReview


import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

function AddReview({ onSubmit }) {
  const [review, setReview] = useState({
    content: "",
    review: false,
  });

  const history = useHistory();

  useEffect(() => {
    
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(review);

   
    history.push("/addReview"); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-sm-12">
          <label htmlFor="content">Content</label>
          <textarea
            required
            value={review.content}
            onChange={(e) => setReview({ ...review, content: e.target.value })}
            className="form-control"
            id="content"
            name="content"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-4">
          <label htmlFor="review">Review</label>
          <input
            checked={review.review}
            onChange={(e) => setReview({ ...review, review: e.target.checked })}
            type="checkbox"
            id="review"
            name="review"
            className="form-control"
          />
        </div>
      </div>
      <input className="btn btn-primary" type="submit" value="Add Review" />
    </form>
  );
}

export default AddReview;
