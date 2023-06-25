import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../conetxt/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {

  const {feedback, isLoading} = useContext(FeedbackContext)

 if(!isLoading &&(!feedback || feedback.legnth === 0)){
    return <p>No Feedback yet</p>
 }

 return isLoading ? <Spinner/>
    : (
        <div className="feedback-list">
          <AnimatePresence>
           
            {feedback.map(item => (
               <motion.div 
                  key={item.id}
                  initial = {{opacity: 0}}
                  animate ={{opacity:1}}
                  exit ={{opacity:0}}
               >
                <FeedbackItem key ={item.id} feedback={item}/>
               </motion.div>
            ))}
            
          
          </AnimatePresence>
           
        </div>
      )
 
  
}



export default FeedbackList