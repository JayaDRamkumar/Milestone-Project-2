import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/movies/${id}`);
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
  }, [id]);



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
            Rated {movie.rated}, {movie.duration} Minutes
          </p>
          {/* Add review form here */}
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
