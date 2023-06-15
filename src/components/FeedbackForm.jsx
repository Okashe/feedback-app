import { useState } from "react"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"

const FeedbackForm = ({handleAdd}) => {
 const [text, setText] = useState('')
 const [rating, setRating] = useState(10)
 const [btnDisabled , setBtnDisbaled] = useState(true)
 const [message, setMessage] = useState('')

 const handleTextChange = (e) => {
    if(text === ''){
        setBtnDisbaled(true)
        setMessage(null)
    }else if (text!== ''&& text.trim().length <= 10){
        setMessage('text must be atleast 10 characters')
    }else{
        setMessage(null)
        setBtnDisbaled(false)
        
    }

    setText(e.target.value)
    
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  if(text.trim().length > 10){
    const newFeedback = {
        text,
        rating,
    }
   
    handleAdd(newFeedback)
    setText('')
  }
 }
  return (
    <Card>
      <form onSubmit={handleSubmit} >
         <h2>How would you rate your service with us?</h2>
         {/* @todo - rating select component */}
          <RatingSelect  select={(rating) => setRating(rating)}/>
          <div className="input-group">
             <input  
                onChange ={handleTextChange} 
                type="text" 
                placeholder="Write a review"
                value={text}
                />
             <Button  type="submit" isDisabled={btnDisabled}>Send</Button>
          </div>

          {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm