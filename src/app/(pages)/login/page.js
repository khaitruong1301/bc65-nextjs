"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
const Login = () => {
  const [userLogin,serUserLogin] = useState({
    email:'',
    password:''
  });
  const router = useRouter()
  const handleChange = (e) =>{
    console.log(userLogin)
    serUserLogin({
      ...userLogin,
      [e.target.id]:e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userLogin.email == 'cybersoft' && userLogin.password=='123'){
      router.push('/profile');
    }else {
      alert('Sai mật khẩu !');
      router.push('/login');
    }
  }
  return (
    <div className="container">
        <form className='w-50 mx-auto' onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className='form-group'>
            <p>email</p>
            <input className='form-control' id="email" onChange={handleChange} />
          </div>
          <div className='form-group'>
            <p>password</p>
            <input className='form-control' id="password" onChange={handleChange}  />
          </div>
          <div className='form-group'>
            <button className='btn btn-dark' type="submit" onClick={()=>{
             
            }}>Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login