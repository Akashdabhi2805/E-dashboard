import React, { useState } from 'react'

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const collectData=()=>{
    console.warn(name,email,password  )
  }
  return (
    <div className='register'>
      <div>Register</div>
     
      <input className='inputBox' type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <input className='inputBox' type="email" placeholder='Enter your email'  value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='inputBox' type="password" placeholder='Enter password'  value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={collectData} className='appButton' type='submit'>Sign up</button>
    </div>
  )
}

export default Signup