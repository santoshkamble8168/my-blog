import Link from "next/link"
import { ITag } from "../types"
import { Routes } from "../utils"

interface IpropTypes {
    tags: ITag[]
}

const Tags = ({ tags }: IpropTypes) => {
    const hashTagColors = [
        {
            color: "indigo",
            text: "text-indigo-800",
            background: "hover:text-indigo-800 hover:bg-indigo-200 hover:border hover:border-indigo-800 transition-all"
        },
        {
            color: "fuchsia",
            text: "text-fuchsia-800",
            background: "hover:text-fuchsia-800 hover:bg-fuchsia-200 hover:border hover:border-fuchsia-800 transition-all"
        },
        {
            color: "rose",
            text: "text-rose-800",
            background: "hover:text-rose-800 hover:bg-rose-200 hover:border hover:border-rose-800 transition-all"
        }
    ]

    return (
        <div className='flex items-center'>
            {
                tags.map((tagData, i) => (
                    <>
                        <Link href={`${Routes.TAG}/${tagData.slug}`} key={tagData._id}>
                            <div
                                className={`mr-2 text-sm text-gray-400 border border-gray-100 rounded-lg pl-2 pr-2 py-1 hover:cursor-pointer ${hashTagColors[i].background}`}
                            >
                                <span className={hashTagColors[i].text}>#</span>
                                {tagData.tag}
                            </div>
                        </Link>
                    </>
                ))
            }
        </div>
    )
}

export default Tags