const React = require('react')
const Def = require('./default')

function new_review () {
    return (
        <Def>
          <main>
            <h1>Add Your Review</h1>
                 <form method="POST" action="/movies">
                    <div className="form-group">
                          <label htmlFor="dname">Enter your display name:</label>
                         <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rated">Enter your rating</label>
                        <input className="form-control" id="rated" name="rated" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration</label>
                        <textarea className="form-control" id="review" name="review" required></textarea>
                    </div>
                         <input className="btn btn-primary" type="submit" value="Add A Review" />
                </form>

                    </main>
        </Def>
    )
}
