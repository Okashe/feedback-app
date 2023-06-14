import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"

const FeedbackItem = ({feedback }) => {

  const handleClick = (id) => {
    console.log(id)
  }
  return (
    <Card>
        <div className="num-display">{feedback.rating}</div>
        <button
          onClick={()=>handleClick(feedback.id)}
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