const React = require('react')
const Def = require('./default')

import { useState, useEffect } from "react"
import { useHistory } from "react-router"

function AddReview({ movies, onSubmit }) {

    const [movies, setMovies] = useState([])

    const [review, setReview] = useState({
        content: '',
        stars: 3,
        review: false,
        authorId: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/movies`)
            const users = await response.json()
            setComment({ ...comment, authorId: users[0]?.userId})
            setAuthors(users)
        }
        fetchData()
    }, [])

    let authorOptions = authors.map(author => {
        return <option key={author.userId} value={author.userId}>{author.firstName} {author.lastName}</option>
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(review)
        setReview({
            content: '',
            stars: 3,
            review: false,
            authorId: authors[0]?.userId
        })
    }
 
    return (
        
                     <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-group col-sm-12">
                                    <label htmlFor="content">Content</label>
                                    <textarea
                                        required
                                        value={review.content}
                                        onChange={e => setReview({ ...review, content: e.target.value })}
                                        className="form-control"
                                        id="content"
                                        name="content"
                                    />
                                </div>
                             </div>
            <div className="row">
                <div className="form-group col-sm-4">
                    <label htmlFor="state">Author</label>
                    <select className="form-control" value={review.authorId} onChange={e => setReview({ ...review, authorId: e.target.value })}>
                        {authorOptions}
                    </select>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="stars">Star Rating</label>
                    <input
                        value={review.stars}
                        onChange={e => setReview({ ...review, stars: e.target.value })}
                        type="range"
                        step="0.5"
                        min="1"
                        max="5"
                        id="stars"
                        name="stars"
                        className="form-control"
                    />
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="review">Review</label>
                    <input
                        checked={movie.review}
                        onClick={e => setReview({ ...review, review: e.target.checked })}
                        type="checkbox"
                        id="review"
                        name="review"
                        className="form-control"
                    />
                </div>
                </div>
            <input className="btn btn-primary" type="submit" value="Add Review" />
        
        </form>
    )
}

module.exports = newReview