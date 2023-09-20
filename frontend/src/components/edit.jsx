const React = require('react')
const Def = require('../default.jsx')

function edit_form ({movie, id}) {
    return (
        <Def>
          <main>
            <h1>Edit Movie</h1>
            <form method="POST" action={`/movies/${id}?_method=PUT`} >
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Movie Title</label>
                        <input type="text"
                            title="title"
                            id="title"
                            required
                            defaultValue={movie.title} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Rated</label>
                        <input id="rated" type="text"
                            name="rated"
                           
                            required
                            defaultValue={movie.rated} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Genre</label>
                        <input id="genre" type="text"
                            name="genre"
                           
                            required
                            defaultValue={movie.genre} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Movie Picture</label>
                        <input id="pic" type="text"
                            name="pic"
                           
                            required
                            defaultValue={movie.pic} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Duration</label>
                        <input id="duration" type="text"
                            name="duration"
                            
                            required
                            defaultValue={movie.duration} />
                    </div>
                </div>
                <input type="submit"/>
            </form>
          </main>
        </Def>
    )
}

export default edit_form