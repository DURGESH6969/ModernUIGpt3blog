import React from 'react'
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import './blog.css';
import {Article} from '../../components';

function Blog() {
  return (
    <div className='gpt3__blog' id='blog'>
      <div className='gpt3__blog-heading'>
      <h1 className="gradient__text">A lot is happening and we are blogging about it. </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date="March 18, 2023" title="Let's explore OpenAI Chat GPT3" link="https://openai.com/blog/chatgpt"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="March 18, 2023" title="Open AI CEO Sam Altman warns about AI threat" link="https://indianexpress.com/article/technology/artificial-intelligence/openai-chatgpt-gpt-4-escape-sam-altman-8504934/"/>
        <Article imgUrl={blog03} date="March 18, 2023" title="Can AI take your Job?" link='https://economictimes.indiatimes.com/news/how-to/could-ai-take-your-job-chatgpt-says-it-can-replace-humans-in-these-20-professions/articleshow/98756808.cms'/>
        <Article imgUrl={blog04} date="March 18, 2023" title="Is the New GPT4 model more creative and reliable?" link="https://www.theguardian.com/technology/2023/mar/14/chat-gpt-4-new-model"/>
        <Article imgUrl={blog05} date="March 18, 2023" title="How to Use OpenAI’s New GPT-4 Right Now?" link="https://www.analyticsinsight.net/how-to-use-openais-new-gpt-4-right-now/"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
