const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ movie.title }</h1>
            <a href={`/movies/${id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/movies/${id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>    
          </main>
        </Def>
    )
}

module.exports = show
