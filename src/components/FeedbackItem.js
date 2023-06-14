import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"

const FeedbackItem = ({feedback }) => {
  return (
    <Card>
        <div className="num-display">{feedback.rating}</div>
        <button
          onClick={() => console.log(feedback.id)}
          className="close">
             <FaTimes color ='purple' />
          </button>
        <div className="text-display">{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem