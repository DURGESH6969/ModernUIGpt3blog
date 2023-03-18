import React from 'react';
import Logo from '../../logo.svg';
import './footer.css';

function Footer() {
  return (
<div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href='https://chat.openai.com/auth/login' target="_blank" rel="noopener noreferrer"><button type='button'>Request Early Access</button></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="gpt3_logo" />
        <p>OpenAI GPT3, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href='https://openai.com/pricing' target="_blank" rel="noopener noreferrer"><p>Pricing</p></a>
        <a href='https://openai.com/product' target="_blank" rel="noopener noreferrer"><p>Product</p></a>
        <a href='https://www.youtube.com/OpenAI' target="_blank" rel="noopener noreferrer"><p>Social Media</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <a href='https://openai.com/policies' target="_blank" rel="noopener noreferrer"><p>Terms & Conditions </p></a>
        <a href='https://openai.com/careers' target="_blank" rel="noopener noreferrer"><p>Charter</p></a>
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <a href='https://www.instagram.com/d_phenomenal_warrior/'target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
        <a href='https://www.linkedin.com/in/durgesh-gupta-66017811a/?original_referer='target="_blank" rel="noopener noreferrer"><p>LinkedIN</p></a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
  );
}

export default Footer
