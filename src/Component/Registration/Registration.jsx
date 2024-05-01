import React from 'react';
import RegestrationImg from "../../assets/registration.png";

const Registration = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
    };
  return (
    <>
 <div className='flex justify-between'>
 <div className=' w-1/2 h-[100vh] flex justify-center items-center'>
<div>
<h1 className='text-dark-blue font-bold text-4xl mb-3 font-Nunito'>Get started with easily register</h1>
    <p className='text-custom-black font-normal text-xl opacity-50 font-Nunito'>Free register and you can enjoy it</p>
    <form onSubmit = {handleSubmit}>
        <div className='my-10'>
        <label htmlFor="email" className='font-Nunito font-semibold text-dark-blue text-[12px] opacity-50'>Email address</label>
        <input type="text"placeholder='Ladushing691@gmail.com' id='email' name='email'autoComplete='off'
        className='w-full py-6 px-4 rounded-lg mt-2 border-2 border-blue-200 font-Nunito'/>
        </div>
        <div className='my-10'>
        <label htmlFor="Full name" className='font-semibold text-dark-blue text-[12px] opacity-50 font-Nunito'>Full name</label>
        <input type="text"placeholder='Ladushing GTG' id='Full name' name='Full name'autoComplete='off'
        className='font-Nunito w-full py-6 px-4 rounded-lg mt-2 border-2 border-blue-200'/>
        </div>
        <div className='my-10'>
        <label htmlFor="password" className='font-semibold text-dark-blue text-[12px] opacity-50 font-Nunito'>Password</label>
        <input type="password"placeholder='12345$g%' id='password' name='password'autoComplete='off'
        className='w-full py-6 px-4 rounded-lg mt-2 border-2 border-blue-200 font-Nunito'/>
        </div>
        <button type='submit' className='w-full bg-button-color py-5 font-normal text-[20px] rounded-full text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] font-Nunito'>Sign Up</button>
    </form>
    <div className='text-center mt-[35px]'>
        <p className='text-[#03014C] font-Open Sans'>Already  have an account ?<span className='text-[#EA6C00] font-bold text-[17px] font-Open Sans'> Sign In</span></p>
    </div>
</div>
 </div>
 <div className='w-1/2 h-[100vh]'>
    <img src={RegestrationImg} alt={RegestrationImg} className='min-w-full h-screen' />
 </div>

 </div>

    </>
  )
}

export default Registration