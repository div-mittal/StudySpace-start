import React from 'react'
import './Forget.css'
const Forget = () => {
  return (
    <div className='forgetPage'>
        <div className="left">
            <img src="loginpage.jpg" alt="" />

        </div>
        <div className="right">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div className="hello">
                <h3>Forgot Your Password</h3>
                <p>Don't worry, we've got your back!</p>
            </div>
            <div className="details">
                <div className="credentials"> 
                    <input type="text" className="email detailButton" placeholder='Email'/>
                </div>
                <button className="mailButton">Recover</button>
            </div>
            <div className="noAcc">
                    <p>Don't have an account?</p>
                    <a href="/signup">Signup</a>
            </div>

        </div>

    </div>
  )
}

export default Forget