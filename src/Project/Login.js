import React, { useState } from 'react'
import './Login.css';

export default function Login() {
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[error,seterror]=useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        //validation:
        if(username.length===0 && password.length===0)
        {
          seterror(true);
        }
        if(username && password)
        {

          const loginobj={
            name:username,
            pwd:password
          }
          console.log(loginobj);
          alert(JSON.stringify(loginobj));
        }
      }
  return (
    <div className='body'>
    <img src="https://t3.ftcdn.net/jpg/02/35/13/34/360_F_235133400_ZwaHUzKb3xCmR1DyQZQ5RE4uMJTeuHHK.jpg"height="50%"width="60%"></img>
    <form className='img' onSubmit={formHandler}>
    <h1>LOGIN</h1>
    <h2>USERNAME:<input type="text" value={username} placeholder="USERNAME" onChange={e=>setUserName(e.target.value)}/><br/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
    </div>
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    <p>FORGET PASSWORD?</p></h2>
    <div className='button'>
    <h4><button className=' but' type="submit">LOGIN</button></h4>
    <hr/>
    </div>
    <h4>DON'T HAVE AN ACCOUNT?</h4>
    <h5>SIGN UP</h5>
    </form>
    </div>
  )
}