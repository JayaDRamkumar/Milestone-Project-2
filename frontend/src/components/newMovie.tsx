import React, { useState } from "react";
import { useHistory } from "react-router";



function NewMovieForm() {
  const history = useHistory();
  const [movie, setMovie] = useState({
    title: "",
    rated: "",
    pic: "",
    genre: "",
    duration: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

  
    await fetch("http://localhost:5001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    history.push("/");
  }

  return (
   
      <main>
        <h1>Add a New Movie</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Movie Title</label>
            <input
              required
              value={movie.title}
              onChange={(e) =>
                setMovie({ ...movie, title: e.target.value })
              }
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rated">Rated</label>
            <input
              required
              value={movie.rated}
              onChange={(e) =>
                setMovie({ ...movie, rated: e.target.value })
              }
              className="form-control"
              id="rated"
              name="rated"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Movie Picture</label>
            <input
              value={movie.pic}
              onChange={(e) =>
                setMovie({ ...movie, pic: e.target.value })
              }
              className="form-control"
              id="pic"
              name="pic"
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              value={movie.genre}
              onChange={(e) =>
                setMovie({ ...movie, genre: e.target.value })
              }
              className="form-control"
              id="genre"
              name="genre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              value={movie.duration}
              onChange={(e) =>
                setMovie({ ...movie, duration: e.target.value })
              }
              className="form-control"
              id="duration"
              name="duration"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Add Movie"
          />
        </form>
      </main>
    
  );
}

export default NewMovieForm;
