import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main>
     {posts.length ? (
        <Feed posts={posts} />
     ) : (
        <p>No posts</p>
     )}
    </main>
  )
}

export default Home