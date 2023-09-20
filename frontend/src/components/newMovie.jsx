import { useState } from "react"
import { useHistory } from "react-router"

function newMovieForm () {

    const history = useHistory()
    const [movie,setMovie] = useState({
        title:'',
        rated:'',
        pic:'',
        genre:'',
        duration: ''
    })
    async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5001/movies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		})

		history.push('/movies')
	}
    return (
        <Def>
          <main>
            <h1>Add a New Movie</h1>
                 <form onSubmit={handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="name">Movie Name</label>
                         <input required
						    value={movie.name}
						    onChange={e => setMovie({ ...movie, name: e.target.value })}
						    className="form-control"
						    id="name"
						    name="name"
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rated">Rated</label>
                        <input required
						    value={movie.rated}
						    onChange={e => setMovie({ ...movie, rated: e.target.value })}
						    className="form-control"
						    id="rated"
						    name="rated" 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Movie Picture</label>
                        <input 
                            value={movie.pic}
						    onChange={e => setMovie({ ...movie, pic: e.target.value })}
						    className="form-control"
						    id="pic"
						    name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input 
                            value={movie.genre}
						    onChange={e => setMovie({ ...movie, genre: e.target.value })}
						    className="form-control"
						    id="genre"
						    name="genre" 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <input 
                            value={movie.pic}
						    onChange={e => setMovie({ ...movie, duration: e.target.value })}
						    className="form-control"
						    id="duration"
						    name="duration" />
                    </div>
                         <input className="btn btn-primary" type="submit" value="Add A Movie" />
                </form>

                    </main>
        </Def>
    )
}

module.exports = newMovieForm


