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
            <h2 className='title'>{post.title}</h2>
            <p className='datetime'>{post.datetime}</p>
            <p className='body'>{post.body}</p>
            <Link to = {`/edit/${post.id}`}><button>Edit</button></Link>
            <button type="button" onClick ={()=>handlePostDelete(post.id)}>delete</button>
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