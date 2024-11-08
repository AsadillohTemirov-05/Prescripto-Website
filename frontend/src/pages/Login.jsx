import React, { useState } from 'react'

const Login = () => {
  const[state,setState]=useState('Sign Up');

  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [pasword,setPassword]=useState('');

  const onSubmitHandler=async (event)=>{
    event.preventDefault();

  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p className='text-2xl font-semibold'>{state==="Sign Up"?"Create Account":"Login"}</p>
          <p>Please {state==="Sign Up"?"sign up":"log in"}   to book appontment</p>
          {
            state==="Sign Up" && 
            <div className='w-full'>
            <p>Full Name</p>
            <input type="text" className='border border-zinc-300 rounded w-full p-2 mt-1'  onChange={(e)=>setName(e.target.name)} value={name} />
          </div>
          }
         
          <div className='w-full'>
            <p>Email</p>
            <input type="email"  className='border border-zinc-300 rounded w-full p-2 mt-1'  onChange={(e)=>setName(e.target.name)} value={email} />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setName(e.target.name)} value={pasword} />
          </div>
          <button className='bg-primary text-white w-full p-2 rounded-md'>{state==="Sign Up"?"Create Account":"Login"}</button>
          {state=="Sign Up"? <p>Already have an acoount? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>:<p>Create a new account? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Sign Up')}>Click here</span> </p> }
      </div>
      
    </form>
  )
}

export default Login
