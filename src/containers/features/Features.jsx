import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title:'Generates prompts for AI generators',
    text:'AI art generators have been at the forefront of artistic image creation since the release of Dalle-2, Midjourney, and other tools in the domain. Leaping ahead, OpenAI’s model can help generate a well-detailed prompted scenario for these generators.'
  },
  {
    title:'The (possible) future of edtech',
    text:'ChatGPT OpenAI is likely to have a colossal impact on education tech. Solely teaching the basics and providing an avenue to have doubts cleared is a big use case for lots of edtech companies'
  },
  {
    title:'Generate SQL Queries',
    text:'SQL is a key tool in any data scientist’s toolbox. Of course, mastering it is essential, but a good understanding of SQL will help you greatly in different phases of your career. Enter ChatGPT! '
  },
  {
    title:'Finding and fixing bugs',
    text:'If you’re a programmer, you can use ChatGPT to find and fix bugs in your code.To do so, copy and paste the code that has an error into ChaptGPT and ask for a fix.'

  }
  
]

function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into future today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>
        <Feature title={item.title} text={item.text} key={item.title + index}/>)}
      </div>
    </div>
  )
}

export default Features
