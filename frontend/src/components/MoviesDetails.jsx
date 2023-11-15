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
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}movies/${id}`);
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

  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}movies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Movie deleted successfully, you can navigate to a different page
        history.push('/movies');
      } else {
        throw new Error('Failed to delete movie');
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          {/* Delete button */}
          <button onClick={handleDelete}>Delete Movie</button>
          {/* Go Back button */}
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
