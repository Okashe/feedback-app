import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback, handleDelete}) => {

 if(!feedback || feedback.legnth === 0){
    return <p>No Feedback yet</p>
 }
    return (
        <div className="feedback-list">
          <AnimatePresence>
           
            {feedback.map(fb => (
               <motion.div 
                  key={fb.id}
                  initial = {{opacity: 0}}
                  animate ={{opacity:1}}
                  exit ={{opacity:0}}
               >
                <FeedbackItem key ={fb.id} feedback={fb}
                handleDelete ={handleDelete} />
               </motion.div>
            ))}
            
          
          </AnimatePresence>
           
        </div>
      )
 
  
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