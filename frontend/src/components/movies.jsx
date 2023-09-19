const React = require('react')
const Def = require('./default')

  
function movies (data) {
    let moviesFormatted = data.movies.map((movie) => {
      return (
        <div className="col-sm-6">
          <h2>{movie.title}</h2>
          <p className="text-center">
            {movie.rated}
          </p>
          <p className="text-center">
            {movie.genre}
          </p>
          <p className="text-center">
            {movie.duration}
          </p>
          
          <img src={movie.pic} alt={movie.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Movie PAGE</h1>
              <div className="row">
              {moviesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = movies



