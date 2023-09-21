import { useEffect, useState } from 'react'
import { useHistory } from "react-router";

function Home () {

  const history = useHistory()
  const [movies, setMovies] = useState([])

  useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/movies`)
			const resData = await response.json()
      console.log(resData)
			setMovies(resData)
		}
		fetchData()
	}, [])

    let moviesFormatted = movies.map((movie) => {
      return (
        <div className="col-sm-6" key={movie._id}>
          <h2>
            <a href="#" onClick={() => history.push(`/${movie._id}`)} >
              {movie.title}
            </a>
          </h2>
          <img style={{ width: '200px' }} src={movie.pic} alt={movie.title} />
          <p className="text-center">
            Rated {movie.rated}, {movie.duration} Minutes
          </p>
        </div>
      )
    })
  return (
    <main>
			<h1>Modern Movie Portal</h1>
			<div className="row">
				{moviesFormatted}
			</div>
		</main>
  )
}


export default Home;

