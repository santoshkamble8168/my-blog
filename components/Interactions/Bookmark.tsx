import { useState } from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkIconFilled } from '@heroicons/react/24/solid'

const Bookmark = () => {
    const [bookmark, setBookmark] = useState(false)

    return (
        <>
            {
                bookmark ?
                    (<BookmarkIconFilled onClick={() => setBookmark(!bookmark)} className="h-6 w-6 cursor-pointer text-gray-400" />) :
                    (<BookmarkIcon onClick={() => setBookmark(!bookmark)} className="h-6 w-6 cursor-pointer" />)
            }
        </>
    )
}

export default Bookmark