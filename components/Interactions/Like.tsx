import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'

const Like = () => {
    const [like, setLike] = useState(true)

    return (
        <>
            {like ?
                (<>
                    <HeartIconFilled onClick={() => setLike(!like)} className="h-6 w-6 text-red-400 cursor-pointer" />
                    <span className='ml-1 text-gray-400 text-sm'>12 reactions</span>
                </>) :
                (<>
                    <HeartIcon onClick={() => setLike(!like)} className="h-6 w-6 text-gray-400 cursor-pointer" />
                    <span className='ml-1 text-gray-400 text-sm'>12 reactions</span>
                </>)
            }
        </>
    )
}

export default Like