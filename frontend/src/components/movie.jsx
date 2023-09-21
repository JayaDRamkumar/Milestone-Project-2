import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function MovieDetails() {
  const { _id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/movies/${movie._id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setMovie(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

    async function createReview(reviewAttributes) {
		const response = await fetch(`http://localhost:5000/movies/${movie._id}/reviews`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(reviewAttributes)
		})

		const review = await response.json()

		setMovie({
			...movie,
			reviews: [
				...movie.reviews,
				review
			]
		})


  return (
    <div>
      <h1>{movie ? movie.title : 'Loading...'}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <p>{movie.rated}</p>
          <img style={{ width: '200px' }} src={movie.pic} alt={movie.title} />
          <p>
            Rated {movie.rated}, {movie.duration} 
          </p>
          <hr />
			<h2>Reviews</h2>
			<div className="row">
				{review}
			</div>
          {/* Add review form here */}
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      )}
    </div>
  );
}
}

export default MovieDetails;




























// import { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router"
// import reviewCard from './reviewCard'
// import newReview from "./addReview";
  
// function movieDetails () {
//   const { _id } = useParams()

// 	const history = useHistory()

//   const [movie, setMovie] = useState(null)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch(`http://localhost:5000/places/${_id}`)
// 			const resData = await response.json()
// 			setMovie(resData)
// 		}
// 		fetchData()
// 	}, [_id])
//   if (movie === null) {
// 		return <h1>Loading</h1>
// 	}

// 	function editMovie() {
// 		history.push(`/movies/${movie._id}/edit`)
// 	}

// 	async function deleteMovie() {
// 		await fetch(`http://localhost:5000/movies/${movie._id}`, {
// 			method: 'DELETE'
// 		})
// 		history.push('/movies')
// 	}

// 	async function deleteReview(deletedReview) {
// 		await fetch(`http://localhost:5000/movies/${movie._id}/reviews/${deletedReview._id}`, {
// 			method: 'DELETE'
// 		})

// 		setMovie({
// 			...movie,
// 			review: movie.review
// 				.filter(review => review._id !== deletedReview._id)
// 		})
// 	}
//   async function createReview(reviewAttributes) {
// 		const response = await fetch(`http://localhost:5000/movies/${movie._id}/reviews`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Authorization': `Bearer ${localStorage.getItem('token')}`
// 			},
// 			body: JSON.stringify(reviewAttributes)
// 		})

// 		const review = await response.json()

// 		setMovie({
// 			...movie,
// 			reviews: [
// 				...movie.reviews,
// 				review
// 			]
// 		})

// 	}

//   let reviews = (
// 		<h3 className="inactive">
// 			No reviews
// 		</h3>
// 	)

	
// 		reviews = movie.reviews.map(review => {
// 			return (
// 				<reviewCard key={review._id} review={review} onDelete={() => deleteReview(review)} />
// 			)
// 		})
	

//     return(

//       <main>
// 			<div className="row">
// 				<div className="col-sm-6">
// 					<img style={{ maxWidth: 200 }} src={movie.pic} alt={movie.title} />
// 				</div>
// 				<div className="col-sm-6">
// 					<h1>{movie.title}</h1>
// 					<h2>
// 						{movie.rated}
// 					</h2>
// 					<br />
// 					<h2>
// 					{movie.genre}	{movie.duration} 
// 					</h2>
// 					<br />
//           <div>
// 					<a className="btn btn-warning" onClick={editMovie}>
// 					Edit
// 				</a>
// 				<button type="submit" className="btn btn-danger" onClick={deleteMovie}>
// 					Delete
// 				</button>
//         </div>
	
// 				</div>
// 			</div>
// 			<hr />
// 			<h2>Reviews</h2>
// 			<div className="row">
// 				{reviews}
// 			</div>
// 			<hr />
// 			<h2>Tell Us Your Thoughts!</h2>
// 			<addReview
// 				movie={movie}
// 				onSubmit={createReview}
// 			/>
// 		</main>
// 	)
// }

    





     
     
  