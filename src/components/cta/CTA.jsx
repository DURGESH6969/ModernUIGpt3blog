import React from 'react';
import './cta.css';

function CTA() {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & Start exploring the Endless Possibilities</h3>
      </div>
      <div className='gpt3__cta-btn'>
      <a href='https://chat.openai.com/auth/login'target="_blank" rel="noopener noreferrer" ><button type='button'>Get Started</button></a>
      </div>
    </div>
  )
}

export default CTA
