"use client"
import React,{useEffect} from 'react'
import PostCard from './PostCard'
import axios from 'axios';

const PostCards = () => {
    const [post, setPost] = React.useState([]);

    const baseURL = "https://fakestoreapi.com/products";

    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            setPost(response.data);
          });
    })

  return (
    <div className='mx-auto md:w-[90%]'>
          <div>
          <h1 className='text-[28px] text-sm-sb mt-[50px] text-secondary-900 leading-[40px]'>Our Blog Post</h1>
          <div className='h-[2px] bg-primary-700 w-[100px]'></div>
          </div>
          

          <div className='flex mx-auto items-center flex-wrap w-[100%]'>
            {post.map((items?:any,index?:number)=><PostCard items={items}/>)}
          </div>
    </div>
  )
}

export default PostCards