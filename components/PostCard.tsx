import Link from 'next/link'

import { Routes } from '../utils';
import { IPost } from '../types'

/*components*/
import Tags from './Tags';
import { Bookmark, Comment, Like } from './Interactions';
import Avatar from './Avatar';

interface IpropTypes {
    post: IPost
}

const PostCard = ({ post }: IpropTypes) => {
    return (
        <div className='post mb-10'>

            <Avatar createdBy={post.createdBy} date={post.createdAt} />

            <Link href={`${Routes.HOME}${post.slug}`}>
                <div>
                    <h2
                        className='text-xl text-gray-500 font-bold hover:text-gray-600 hover:cursor-pointer hover:decoration-primary'
                    >
                        {post.title}
                    </h2>
                    <div>
                        {post.description.slice(0, 200)}{post.description.length > 200 ? '...' : ''}
                    </div>
                </div>
            </Link>

            <Tags tags={post.tags} />

            <div className='flex items-center justify-between my-2'>
                <div className='intractions flex items-center'>
                    <div className='like flex items-center mr-4'>
                        <Like />
                    </div>
                    <div className='like flex items-center mr-4'>
                        <Comment />
                    </div>
                </div>

                <div className='info flex items-center'>
                    <div
                        className='read-time text-gray-400 text-sm mr-2'
                    >
                        {post.readTime} read
                    </div>
                    <div>
                        <Bookmark />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCard