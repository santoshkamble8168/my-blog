import { useState } from 'react'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftIcon as ChatBubbleLeftIconFilled } from '@heroicons/react/24/solid'

const Comment = () => {
    const [comment, setComment] = useState(false)

    return (
        <>
            {
                comment ?
                    (<>
                        <ChatBubbleLeftIconFilled onClick={() => setComment(!comment)} className="h-6 w-6 text-gray-400 cursor-pointer" />
                        <span className='ml-1 text-gray-400 text-sm'>12 interactions</span>
                    </>) :
                    (<>
                        <ChatBubbleLeftIcon onClick={() => setComment(!comment)} className="h-6 w-6 text-gray-400 cursor-pointer" />
                        <span className='ml-1 text-gray-400 text-sm'>12 interactions</span>
                    </>)
            }
        </>
    )
}

export default Comment