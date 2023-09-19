const React = require('react')
const Def = require('./default')


    const newReview = ({ onSubmit }) => {
        const [name,setName ] = useState('')
        const [rating, setRating] = useState('')
        const [comment, setComment] = useState('')
      
        const handleSubmit = (e) => {
          e.preventDefault()

           // Validate the form data here if needed
    if (!name || !rating || !comment) {
      // Handle validation errors
      return
    }
    // Submit the form data
    onSubmit({ name ,rating, comment })

    // Clear the form fields
    setName('')
    setRating('')
    setComment('')
  }
    return (
        <Def>
          <main>
            <h1>Add Your Movie Review</h1>
                 <form method="POST" action="/movies">
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
        </Def>
    )
}

module.exports = newReview