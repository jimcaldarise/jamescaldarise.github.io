import React from "react";
import '../App.css';
import './Hero.css';

function Hero() {
   return (
      <div className='hero-container'>
         <video src="/videos/pexels-john-mackintosh-9940663.mp4" autoPlay loop muted/>
         <div className="hero-text-container">
            <span><h1>Hi,</h1></span>
            <span><h1>I'm Jim.</h1></span>
            <span><h1>I like to build things.</h1></span>
            <span><p>Career-changer to software engineering.</p></span>
         </div>
      </div>
   )
}

export default Hero;