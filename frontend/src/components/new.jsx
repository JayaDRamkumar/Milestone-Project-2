const React = require('react')
const Def = require('./default')

function new_form () {

    
    return (
        <Def>
          <main>
            <h1>Add a New Movie</h1>
                 <form method="POST" action="/movies">
                    <div className="form-group">
                          <label htmlFor="name">Movie Name</label>
                         <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Movie Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rated">Rated</label>
                        <input className="form-control" id="rated" name="rated" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input className="form-control" id="genre" name="genre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <input className="form-control" id="duration" name="duration" required />
                    </div>
                         <input className="btn btn-primary" type="submit" value="Add A Movie" />
                </form>

                    </main>
        </Def>
    )
}

module.exports = new_form


