function App(){
    const title = 'Blog Post'
    const body = 'This is my blog post'
    return (
        <div class='container'>
         <h1>{title}</h1>
         <p>{body}</p>
         {Math.random()*(5+5)}
        </div>
        
    )
}

export default App