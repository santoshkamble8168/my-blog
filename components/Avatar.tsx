import Image from 'next/image'
import Link from 'next/link'
import { IUser } from '../types'
import { dateFormat, formats, Routes } from '../utils'

interface IpropTypes {
    createdBy: IUser,
    date?: string | ""
}

const Avatar = ({ createdBy, date = "" }: IpropTypes) => {
    const defaultAvatar = '/assets/images/avatar.png'

    return (
        <>
            <Link href={`${Routes.USER}/${createdBy.slug}`}>
                <div className='flex items-center my-1 hover:cursor-pointer'>
                    <div
                        className='mr-2 flex items-center justify-center rounded-lg overflow-hidden'
                    >
                        <Image
                            src={
                                createdBy.avatar ?
                                    createdBy.avatar :
                                    defaultAvatar
                            }
                            height={35}
                            width={35}
                        />
                    </div>
                    <div className='mr-2'>
                        <div className='text-sm font-bold text-gray-600'>
                            {createdBy.name}
                        </div>
                        {date && (<>
                            <div className='text-xs text-gray-500'>
                                {dateFormat(date, formats.Month_Day_Year)}
                            </div>
                        </>)}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Avatar