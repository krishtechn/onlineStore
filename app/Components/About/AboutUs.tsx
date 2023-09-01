import React from 'react'
import Image from 'next/image'
import landingImg from '../../../public/landingimg.jpg';

const AboutUs = () => {
  return (
    <div className='flex justify-between flex-col-reverse my-[10px] items-center md:flex-row flex-wrap md:w-[80%] mx-auto'>
        <div className='w-full md:w-[70%] md:p-[30px]'>
            <h1 className='text-[32px] text-sm-sb text-secondary-900 leading-[40px]'>Best Fashion Collection</h1>
            <p className='text-secondary-600 my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sed ut temporibus officiis incidunt consequuntur ab, fuga culpa minus, eius id rerum, soluta error ipsa! Veniam omnis assumenda perspiciatis atque.</p>
            <button className='bg-primary-700 py-3 px-5 rounded-lg shadow-lg text-base-white'>Explore More</button>
        </div>

        <div className='w-full md:w-[30%]'>
            <Image src={landingImg} className='object-cover w-full h-[300px] -skew-x-6 p-[20px] md:p-0' alt='image loading'/>
        </div>
    </div>
  )
}

export default AboutUs