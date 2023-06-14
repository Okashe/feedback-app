import FeedbackData from "../data/FeedbackData"
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback}) => {

 if(!feedback || feedback.legnth===0){
    return <p>No Feedback yet</p>
 }else{
    return (
        <div className="feedback-list">
            {feedback.map(fb => (
                <FeedbackItem key ={ fb.id} feedback={fb} />
            ))}
        </div>
      )
 }
  
}

export default FeedbackList