"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import PostCard from '../Components/Post/PostCard';
import Navbar from '../Components/Navbar/Navbar';

const Products = () => {
    const [post, setPost] = React.useState([]);
    let [usersearch,setusersearch] = useState("1");

    const baseURL = `https://fakestoreapi.com/products/${usersearch}`;

    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    })

  return (
    <div>
        <Navbar />
        <div className='flex justify-center items-center mt-[50px]'>
            <input type='text' placeholder='Search Product' onChange={(e)=>setusersearch(e.target.value)} className='py-3 px-5 shadow outline-none border-secondary-200'/>
            {/* <button className='py-3 px-5 bg-primary-600 text-base-white' onClick={()=>handleSearch()}>Search</button> */}
        </div>
        
        {post?
        <PostCard items={post}/>:
        <h1>No post found</h1>
        }
    </div>
  )
}

export default Products