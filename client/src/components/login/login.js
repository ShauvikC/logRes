import {useState} from 'react'
import {checkUser} from '../Api/userApi'

function Login() {

    const [userName,setUserName]= useState()
    const [password,setPassword]= useState()
  
  
  const handleSubmit=async()=>{
    const obj = {userName,password}
   await checkUser(obj);
  }
  
  
    return (
      <div className="App">
        <div className="loginform">
          <h1>Login</h1>
          <div className="username">
            <p>Username</p>
            <input type="text" id="name" onChange={e=>setUserName(e.target.value)}/>
          </div>
          <div className="pass">
            <p>Password</p>
            <input type="password" id="passsword" onChange={e=>setPassword(e.target.value)} />
          </div>
  
          {/* <button type="submit" onClick={handleSubmit}>Login</button> */}
          <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
  
  export default Login;
  