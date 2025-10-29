import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../_ui/ContextHook'
import { Link } from 'react-router'

const Register = () => {

    const {login} = useContext(AuthContext)

    const {
    register,
    handleSubmit, 
  } = useForm()

  const onSubmit =async (data) => {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", data)
          console.log(res)  
  }
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>register {login}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto shadow-sm p-2'>
            {/* name */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>First Name</label>
                <input className='border p-2 rounded-sm' type="text" placeholder='name' {...register('first_name')}/>
            </div>
            {/* name */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>Last Name</label>
                <input className='border p-2 rounded-sm' type="text" placeholder='name' {...register('last_name')}/>
            </div>
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
            {/* name */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>User Name</label>
                <input className='border p-2 rounded-sm' type="text" placeholder='name' {...register('user_name')}/>
            </div>

                <input className='w-full bg-amber-500 text-black text-center' type="submit" />
                 <div className='flex items-center justify-between'>
          <Link to="/login">Login</Link>
          <Link to="/reset-password-email">Reset password</Link>
        </div>
        </form>
    </div>
  )
}

export default Register