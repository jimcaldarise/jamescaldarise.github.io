import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <h1 className='about-heading'>About Me</h1>
      <div className='about-text'>
         <p>I am software engineer based in Seattle, WA seeking to learn more and expand my software development experience.</p>
         <p>As a student in UW Bothell's Graduate Certificate in Software Design and Development, I have taken formal courses in data structures, algorithms, object-oriented programming (C++, Java, and Python), software development processes, and software modeling techniques.</p>
         <p>As a lifelong-learner, I am self-taught in web development including JavaScript, HTML, CSS, Node.js, React, Git, Github, and basic SQL.</p>
         <p>My areas of professional interest in software development are primarily in back-end design, and I have a particular fascination with Natural Language Processing and Machine Learning.</p>
         <p>When I'm not working on a new project, I enjoy exploring the beautiful Pacific Northwest with my partner and our dog.</p>
      </div>
    </div>
  )
}

export default About