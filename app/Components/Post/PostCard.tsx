import React from 'react'
import Image from 'next/image'

const PostCard = (props?:any) => {
    let {title,description,price,image} = props.items;
    return (
        <div className='w-full h-[300px] md:w-[30%] shadow-3xl m-[10px] p-[10px] bg-base-white'>
            <img src={image} alt='loading' className='w-[50px] h-[50px] object-cover' />
            <h1 className='text-[23px] text-sm-sb mt-[20px] text-secondary-900 leading-[40px]'>{title}</h1>
            <p className='text-secondary-600 my-[10px] line-clamp-3'>{description}</p>
            <button className='bg-primary-700 py-2 px-5 rounded-lg shadow-lg text-base-white'>Explore More</button>
        </div>
    )
}

export default PostCard