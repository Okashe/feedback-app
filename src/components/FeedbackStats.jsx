import PropTypes from 'prop-types'

const FeedbackStats = ({feedback}) => {
let averageRating = feedback.reduce((a, f)=> a + f.rating ,0)/feedback.length
averageRating = averageRating.toFixed(1).replace(/[.,]0$/,'')//removes .0

  return (

    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating:{isNaN(averageRating) ? '0' : averageRating}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats