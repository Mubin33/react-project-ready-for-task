import axios from "axios"
import { useForm } from "react-hook-form"

 

const ResetPassEmail = () => { 

    const {
    register,
    handleSubmit, 
  } = useForm() 
const onSubmit =async (data) => {
      const res = await axios.post("http://127.0.0.1:8000/api/password-reset/", data)
          if(res.data.status) {
        alert("Successfull")
      }
  }
  return (
   <div>
        <h1 className='text-2xl font-bold text-center'>Reset password</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto shadow-sm p-2'> 
            {/* email */}
            <div className='flex flex-col space-y-2 mt-2'>
                <label className='text-xl font-semibold'>Email</label>
                <input className='border p-2 rounded-sm' type="email" placeholder='email' {...register('email')}/>
            </div> 

                <input  className='w-full bg-amber-500 text-black text-center' type="submit" />
        </form>
    </div>
  )
}

export default ResetPassEmail