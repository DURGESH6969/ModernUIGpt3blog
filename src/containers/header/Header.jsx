import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css';

function Header() {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Welcome to our website, your one-stop destination for the latest insights and research from OpenAI. Our platform is dedicated to providing you with access to the cutting-edge work of OpenAI's GPT3.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address" />
          <a href='https://chat.openai.com/auth/login'target="_blank" rel="noopener noreferrer" ><button type='button'>Get Started</button></a>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
