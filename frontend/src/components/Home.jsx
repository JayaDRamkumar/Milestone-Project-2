import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setMovies(resData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let moviesFormatted = null;

  if (loading) {
    moviesFormatted = <p>Loading...</p>;
  } else if (error) {
    moviesFormatted = <p>Error: {error.message}</p>;
  } else {
    moviesFormatted = movies.map((movie) => (
      <div className="col-sm-6" key={movie._id}>
        <h2>
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        </h2>
        <p className="text-center">{movie.rated}</p>
        <img style={{ width: '200px' }} src={movie.pic} alt={movie.title} />
        <p className="text-center">
          Rated {movie.rated}, {movie.duration} Minutes
        </p>
      </div>
    ));
  }

  

  return (
    <main>
      <h1>Modern Movie Portal -HOME</h1>
      <div className="row">{moviesFormatted}</div>
    </main>
  );
}

export default Home;
