import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts, handlePostDelete}) => {
  const {id} = useParams()
  const post = posts.find((post)=>(post.id).toString() === id)
  return (
    <main>
      <article>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button onClick ={()=>handlePostDelete(post.id)}>delete</button>
          </>
        }
        {!post && 
        <>
          <article>
            <h2>post not found</h2>
            <Link to ="/">Visit our homepage</Link>
          </article>
        </>}
      </article>
    </main>
  )
}

export default PostPage