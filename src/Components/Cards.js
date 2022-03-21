import React from 'react'
import CardItem from './CardItem'
import '../App.css';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
       <h1>Selected Projects</h1>
       <div className='cards__container'>
          <div className='cards__wrapper'>
             <ul className='cards__items'>
                <CardItem 
                src="images/codepic.jpg"
                title="Road Trip Shortest Paths"
                label="C++"
                text="Calculate the shortest path between cities for a roadtrip."
                path="/project1"/>
                <CardItem 
                src="images/codepic.jpg"
                title="Project 2 Title"
                label="JavaScript"
                text="Description of this project."
                path="/project2"/>
                <CardItem 
                src="images/codepic.jpg"
                title="Project 3 Title"
                label="Python"
                text="Description of this project."
                path="/project3"/>
             </ul>
          </div>
       </div>
       <h3>...and, of course, this very site. Built by me using <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>, and <span>Node.js</span>.</h3>
    </div>
  )
}

export default Cards