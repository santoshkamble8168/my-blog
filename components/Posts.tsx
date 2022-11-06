import React from 'react'
import { IPost } from '../types'
import PostCard from './PostCard'

interface IpropTypes {
    posts: IPost[]
}

const Posts = ({posts} : IpropTypes) => {
  return (
      <div className='grid lg:grid-cols-2 gap-16 mt-8'>
          {
              posts.map(post => (
                  <PostCard post={post} key={post._id} />
              ))
          }
      </div>
  )
}

export default Posts