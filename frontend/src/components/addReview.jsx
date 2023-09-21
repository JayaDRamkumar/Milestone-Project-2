const React = require('react')



function newReview(){
  
    return (
       
          <main>
            <h1>Add Your Movie Review</h1>
                 <form onSubmit={handleSubmit}>
                    <div className="form-group">
                          <label htmlFor="name">Enter your display name:</label>
                         <input  
                            id="name" 
                             name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} required 
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rated">Enter your rating</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            min="1"
                            max="5"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit Review</button>
                </form>

                    </main>
       
    )
}

module.exports = newReview