import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback}) => {

 if(!feedback || feedback.legnth===0){
    return <p>No Feedback yet</p>
 }else{
    return (
        <div className="feedback-list">
            {feedback.map(fb => (
                <FeedbackItem key ={fb.id} feedback={fb}
                handleDelete ={(id)=> console.log(fb.id)} />
            ))}
        </div>
      )
 }
  
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })
  ),
}

export default FeedbackList