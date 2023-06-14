function App(){
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const showComments = false;
    const comments =[
        {id:1, text: 'Comment one'},
        {id:2, text: 'Comment two'},
        {id:3, text: 'Comment three'}
    ]
    return (
        <div class='container'>
         <h1>{title.toUpperCase()}</h1>
         <p>{body}</p>
        {showComments ?(
            <div className="comments">
            <h3>Comments({comments.length})</h3>
            <ul>
            {comments.map((comment, index)=>{
                return(
                    <li key={comment.id}>{comment.text}</li>
                )
            })}
         </ul>
        </div>
        ):'No'}
        
        
        </div>
        
    )
}

export default App