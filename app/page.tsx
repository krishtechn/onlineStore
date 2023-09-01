"use client"
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/About/AboutUs'
import PostCards from './Components/Post/PostCards'

const page = () => {
  return (
    <div className='px-2'>
      <Navbar />

      {/* <AboutUs /> */}

      <PostCards />
    </div>
  )
}

export default page