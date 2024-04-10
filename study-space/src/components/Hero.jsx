import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='main'>
        <div className='info'>
            <div className='left'>
                <h2>Study Space lets you work more collaboratively and get more done.</h2>
                <p>
                    Study Space's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
                </p>
            </div>
            <div className='right'>
                <img src='5340737.jpg'/>
            </div>
        </div>
        <div className='signup'>
            <input type="text" placeholder='Email'/>
            <a href='/signup'>Sign Up - It's Free!</a >
        </div>
    </div>
  )
}

export default Hero