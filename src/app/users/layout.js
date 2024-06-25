import React from 'react'
import Image from 'next/image'
const Users = (props) => {
  return (
    <div className='d-flex' style={{minHeight:'100vh'}}>
        <div className='w-50'>
            <Image alt='bg' width={1000} height={2000} src={'https://picsum.photos/id/1/1000/2000'} crossOrigin='anonymous' style={{width:'100%', height:'100vh'}} />
        </div>
        <div className='w-50'>
            {props.children}
        </div>
    </div>
  )
}

export default Users