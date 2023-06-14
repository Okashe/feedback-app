import { useState } from "react"

const FeedbackItem = ({feedback}) => {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback')

  return (
    <div className="card">
        <div className="num-display">{feedback.rating}</div>
        <div className="text-display">{feedback.text}</div>
        <button>Click</button>
    </div>
  )
}

export default FeedbackItem