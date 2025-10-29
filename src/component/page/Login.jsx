import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../_ui/ContextHook'
import axios from 'axios'
import { Link } from 'react-router'

const Login = () => {
    const {login, setLogin} = useContext(AuthContext)

    const {
    register,
    handleSubmit, 
  } = useForm() 
const onSubmit =async (data) => {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", data)
          console.log(res)
          localStorage.setItem('token',res.data.token)  
  }
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Login{login}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto shadow-sm p-2'> 
            {/* email */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>Email</label>
                <input className='border p-2 rounded-sm' type="email" placeholder='email' {...register('email')}/>
            </div>
            {/* password */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>password</label>
                <input className='border p-2 rounded-sm' type="password" placeholder='password' {...register('password')}/>
            </div> 

                <input onClick={()=> setLogin('login nai.')} className='w-full bg-amber-500 text-black text-center' type="submit" />
        <div className='flex items-center justify-between'>
          <Link to="/register">Register</Link>
          <Link to="/reset-password-email">Reset password</Link>
        </div>
        </form>

    </div>
  )
}

export default Login