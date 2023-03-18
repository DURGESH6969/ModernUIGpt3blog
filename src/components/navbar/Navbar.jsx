import React,{useState} from 'react';
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu=()=>{
  return(
    <>
          <p><a href='#home'>Home</a> </p>
          <p><a href='#wgpt3'>What is GPT?</a> </p>
          <p><a href='#possibility'>Open AI</a> </p>
          <p><a href='#features'>Case Studies</a> </p>
          <p><a href='#blog'>Library</a></p>
    </>
  )
}

const Navbar=() =>{
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
       </div>
       <div className='gpt3__navbar-sign'>
       <a href='https://auth0.openai.com/u/login/identifier?state=hKFo2SA5bEpCRFlFWFRoZTZ6SFhEV1I0VGRDRkt6a0JHR3liN6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDE5TUtWWVRvMWU5a3RFYmJkbGdxeHhFQ2lObXA3R0pzo2NpZNkgVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEc' target="_blank" rel="noreferrer"><p>Sign in</p></a>
        <a href='https://auth0.openai.com/u/signup/identifier?state=hKFo2SBPZlpEU29EVl9yNDEyQ2hGaFMyQkFtN0dib0NJOGNyeqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFFiTWF1WWplb2hXdTUwWVk0LTZ1LTBqQ2tzbzVYQXNPo2NpZNkgVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEc' target="_blank" rel="noreferrer"><button type='button'>Sign up</button></a>
       </div>
       <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
