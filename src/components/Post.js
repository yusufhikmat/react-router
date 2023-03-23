import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  
  return (
    <article>
    <Link to ={`/post/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.datetime}</p> 
      </Link>
      <div>{
          (post.body).length <= 25 
          ? post.body : `${(post.body).slice(0,25)}`}
      </div>
    </article>
    
  )
}

export default Post