import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Routes } from '../utils'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <nav className='flex items-center justify-between py-6'>
            <Link href={Routes.HOME}>
                <div className='flex items-center cursor-pointer'>
                    <Image src={"/assets/images/logo.png"} height="35" width="40" />
                    <span className='font-bold ml-2 text-primary'>
                        My Blog
                    </span>
                </div>
            </Link>
            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href='#'>React</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href='#'>Nodejs</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href='#'>MongoDb</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href='#'>Nextjs</a>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='mr-6 text-gray-600'>
                    <a href='#' className='hover:text-gray-400'>Login</a>
                </li>
                <li className='text-gray-600'>
                    <a href='#' className='bg-primary py-2 px-4 rounded-full text-white hover:bg-primary-dark transition-all'>SignUp</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar