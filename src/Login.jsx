import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="login-bg">
      <div className="title">
        <h1>Filmyfrolic</h1>
        {/* <br/> */}
        <h3>Everything About Movie</h3>
      </div>
      
      <div className="vignette"></div>
      <div className="login-box">
        <h2>Log in</h2>
        <form>
          <h5>Email:</h5>
          <input type="text" placeholder="Enter your email address" required />
          <h5>Password:</h5>
          <input type="password" placeholder="Enter your email password" required />
          <a href="">Forgot Password?</a>
          <button type="submit">Log In</button>          
        </form>
      </div>
    </div>
  )
}

export default Login