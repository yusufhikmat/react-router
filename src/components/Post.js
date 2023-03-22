import React from 'react'

const Post = ({post}) => {
  console.log(post)
  return ( 
    
    <article>
    {post.title}
    </article>
  )
}

export default Post