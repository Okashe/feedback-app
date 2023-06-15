import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../conetxt/FeedbackContext'

const FeedbackList = () => {

  const {feedback} = useContext(FeedbackContext)

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
                <FeedbackItem key ={fb.id} feedback={fb}/>
               </motion.div>
            ))}
            
          
          </AnimatePresence>
           
        </div>
      )
 
  
}



export default FeedbackList