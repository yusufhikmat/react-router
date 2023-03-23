import React from 'react'

const Newpost = ({postTitle,setPostTitle, postBody,setPostBody,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor='title'>Title</label>
        <input type="text"
                id="title"
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <textarea id="body"
                  value={postBody}
                  onChange={(e)=>setPostBody(e.target.value)}></textarea>
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default Newpost