function reviewCard({ review, onDelete }) {
    return (
        <div className="border col-sm-4">
            <h2 className="review">Reviews</h2>
            <h4>{review.comment}</h4>
            <h3>
                <strong>- {comment.name} </strong>
            </h3>
            <h4>Rating: {comment.rating}</h4>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
        </div>
    )
}

export default reviewCard;