import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { ICategory } from '../types'
import { Routes } from '../utils'

interface IpropTypes {
    categories: ICategory[]
}

const Tabs = ({ categories } : IpropTypes) => {
    const router = useRouter()

    const isActiveLink = (category: ICategory) => {
        return category.slug === router.query.category
    }

    const handleSearch = (search: string) => {
        console.log("search", search)
    }

    return (
        <>
            <div className='my-8 flex items-center justify-between border-b-2 border-gray-100'>
                <ul className='flex items-center'>
                    <li className={`mr-6 pb-4 border-b-4 rounded-sm ${router.pathname === Routes.HOME ? 'border-primary text-primary' : 'border-white text-gray-400'}`} key="category-0">
                        <Link href={"#"}>
                            Recent
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li className={`mr-6 pb-4 border-b-4 rounded-sm ${isActiveLink(category) ? 'border-primary text-primary' : 'border-white text-gray-400'}`} key={category._id}>
                            <Link href={`${Routes.CATEGORY}/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center pb-4'>
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
                    <input
                        type="text"
                        placeholder='Search'
                        className='outline-none px-2 py-1 ml-1'
                        onChange={e => handleSearch(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default Tabs