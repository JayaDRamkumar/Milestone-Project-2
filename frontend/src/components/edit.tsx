import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function EditMovie() {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Edit state
  const [editedMovie, setEditedMovie] = useState({
    title: '',
    rated: '',
    pic: '',
    duration: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/movies/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        setMovie(resData);
        setEditedMovie(resData); 
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

const handleEditSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5001/movies/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMovie),
      });

      if (response.ok) {
        
        history.push(`/movies/${id}`);
      } else {
        throw new Error('Failed to edit movie');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie({ ...editedMovie, [name]: value });
  };

return (
    <div>
    <h1>Edit Movie</h1>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error.message}</p>
    ) : (
      <div>
        <form onSubmit={handleEditSubmit}>
          <div className="form-group">
            <label htmlFor="title">Movie Title</label>
            <input
              required
              value={editedMovie.title}
              onChange={handleEditInputChange}
              className="form-control"
              id="title"
              name="title"
            />
          </div>

          <div className="form-group">
              <label htmlFor="rated">Rated</label>
              <input
                required
                value={editedMovie.rated}
                onChange={handleEditInputChange}
                className="form-control"
                id="rated"
                name="rated"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pic">Movie Picture</label>
              <input
                value={editedMovie.pic}
                onChange={handleEditInputChange}
                className="form-control"
                id="pic"
                name="pic"
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                value={editedMovie.duration}
                onChange={handleEditInputChange}
                className="form-control"
                id="duration"
                name="duration"
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Edit Movie"
            />
          </form>
         
          <button onClick={() => history.goBack()}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default EditMovie;