import React from 'react'
import { IPost } from '../types'
import PostCard from './PostCard'

interface IpropTypes {
    posts: IPost[]
}

const Posts = ({posts} : IpropTypes) => {
  return (
      <div className='mt-8 mb-4'>
          {
              posts.map(post => (
                  <PostCard post={post} key={post._id} />
              ))
          }
      </div>
  )
}

export default Posts