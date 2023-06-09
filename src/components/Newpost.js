import React from 'react'

const Newpost = ({postTitle,setPostTitle, postBody,setPostBody,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
    <h2>New post</h2>
      <div>
        <label htmlFor='title'>Title</label>
        <input type="text"
                id="title"
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
                required
                autoFocus
        />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <textarea rows="10" cols="100" id="body"
                  value={postBody}
                  onChange={(e)=>setPostBody(e.target.value)}
                  required
                  autoFocus
                  ></textarea>
                  
      </div>
    
      <button type="submit">submit</button>
    </form>
  )
}

export default Newpost