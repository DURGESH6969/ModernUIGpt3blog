import React from 'react'
import Feature from '../../components/feature/Feature.jsx'
import './whatGPT3.css';

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="ChatGPT is an artificial intelligence chatbot developed by OpenAI and launched in November 2022. It is built on top of OpenAI's GPT-3 and GPT-4 families of large language models and has been fine-tuned (an approach to transfer learning) using both supervised and reinforcement learning techniques." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots" text="ChatGPT is an AI-powered chatbot designed to provide natural and fluid dialogue-like responses to queries. It has the ability to understand context and detail and can recognize when it has made mistakes." />
          <Feature title="Knowledgebase" text="ChatGPT is based on GPT-3, a large-scale language model that uses its architecture to sift through an immense pool of internet data and sources to reference as its knowledge base." />
          <Feature title="Methods" text="This model is trained using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup.The trainers are given access to model-written suggestions to help them compose their responses. "/>
        </div>  
    </div>
  )
}

export default WhatGPT3
