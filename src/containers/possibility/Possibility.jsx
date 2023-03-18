import React from 'react'
import possibilityImage from '../../assets/possibilityImage.png';
import './possibility.css';


function Possibility() {
  return (
    <div className='gpt3__possibility ' id='possibility'>
      <div gpt3__possibility-image>
      <img  src={possibilityImage} alt="possibility" width={600} />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>In a world where technology is advancing at an unprecedented pace, the possibilities for artificial intelligence are beyond our wildest imaginations. Enter ChatGPT - an AI chatbot developed by OpenAI that has the ability to understand context and detail and provide natural and fluid dialogue-like responses to queries. With its vast knowledge base and advanced learning techniques, ChatGPT is pushing the boundaries of what we thought was possible with AI. The future is here, and it’s more exciting than we ever could have imagined.</p>
        <h4>Request Early Access to Get Started</h4>

      </div>
    </div>
  )
}

export default Possibility;
