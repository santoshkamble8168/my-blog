import Image from 'next/image'
import Link from 'next/link'
import { dateFormat, Routes } from '../utils';
import { IPost } from '../types'

interface IpropTypes {
    post: IPost
}

const PostCard = ({ post }: IpropTypes) => {
    const defaultAvatar = '/assets/images/avatar.png'

    return (
        <div className='post'>
            <Link href={"#"}>
                <div className='flex items-center my-1 hover:cursor-pointer'>
                    <div
                        className='mr-2 flex items-center justify-center rounded-lg overflow-hidden'
                    >
                        <Image
                            src={
                                post.createdBy.avatar ?
                                    post.createdBy.avatar :
                                    defaultAvatar
                            }
                            height={30}
                            width={30}
                        />
                    </div>
                    <div
                        className='mr-2 text-sm font-bold text-gray-600'
                    >
                        {post.createdBy.name}
                    </div>
                </div>
            </Link>
            <Link href={`${Routes.HOME}/${post.slug}`}>
                <h2
                    className='text-xl text-gray-500 font-bold hover:text-gray-600 hover:underline hover:cursor-pointer hover:decoration-primary'
                >
                    {post.title}
                </h2>
            </Link>
            <div className='flex items-center my-1'>
                <div
                    className='text-gray-400 after:content-["\2219"] after:ml-1 after:mr-1 after:text-gray-600 after:font-bold'
                >
                    {dateFormat(post.createdAt, "MMM DD, YYYY")}
                </div>
                <div
                    className='text-gray-400'
                >
                    {post.readTime} read
                </div>
            </div>
            <div>
                {post.description.slice(0, 200)}{post.description.length > 200 ? '...' : ''}
            </div>
        </div>
    )
}

export default PostCard