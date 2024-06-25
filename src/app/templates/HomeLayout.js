import React from 'react'
import Header from '../components/Header'

const HomeLayout = (props) => {
  return (
    <div>
        <Header />
        <div className='w-100' style={{minHeight:800}}>
            {props.children}
        </div>
    </div>
  )
}

export default HomeLayout