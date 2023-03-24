import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPosts = ({posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit}) => {
    const {id} = useParams()
    const post = posts.find((post)=>(post.id).toString() === id)

    useEffect(()=>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[post, setEditTitle, setEditBody])

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit} className="form">
    <h2>Edit post</h2>
      <div>
        <label htmlFor='title'>Title</label>
        <input type="text"
                id="title"
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}
                required
                autoFocus
        />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <textarea rows="10" cols="100" id="body"
                  value={editBody}
                  onChange={(e)=>setEditBody(e.target.value)}
                  required
                  autoFocus
        >
        </textarea>
                  
      </div>
      <button type="submit" onClick={()=>handleEdit(post.id)}>submit</button>
    </form>
  )
}

export default EditPosts