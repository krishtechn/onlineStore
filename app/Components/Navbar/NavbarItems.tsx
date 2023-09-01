import React from 'react'
import Link from 'next/link'

const NavbarItems = (props?:any) => {
    console.log(props)
  return (
    <>
        {props.items.map((items?:any,index?:Number)=><Link href={items.link} className='mx-2 text-sm text-secondary-600'>{items.name}</Link>)}
    </>
  )
}

export default NavbarItems