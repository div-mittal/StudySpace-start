import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='loginPage'>
        <div className="left">
            <img src="loginpage.jpg" alt="" />

        </div>
        <div className="right">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="hello">
                <h3>Hello Again!</h3>
                <p>One step away to explore new horizons together.</p>
            </div>
            <div className="details">
                <div className="credentials">
                    <input type="text" className="email detailButton" placeholder='Email'/>
                    <input type="password" className="password detailButton" placeholder='Password'/>
                </div>
                <div className="belowDetail">
                    <div className="remember">
                        <input type="checkbox" />
                        <label>Remember me</label>
                    </div>
                    <div className="forgot">
                        <a href="/forget">Recovery Password</a>
                    </div>
                </div>
                <button className="loginButton">Login</button>
                <div className="noAcc">
                    <p>Don't have an account?</p>
                    <a href="/signup">Signup</a>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login