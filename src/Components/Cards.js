import React from 'react'
import CardItem from './CardItem'
import CardItemWithLink from './CardItemWithLink';
import '../App.css';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
       <h1>Selected Projects</h1>
       <div className='cards__container'>
          <div className='cards__wrapper'>
             <ul className='cards__items'>
                <CardItemWithLink 
                src="/images/roadtrippersidebyside.png"
                title="RoadTripper Playlist"
                label="JavaScript, CSS, React, Node.js"
                text="A playlist maker app using Spotify API to authenticate an account,  Google Maps API to search for songs using the user's current location. Capable of adding songs to a playlist and saving that playlist back to the user's account." />
                <CardItem 
                src="/images/calculatorpic.png"
                title="Symbolic Algebra Calculator"
                label="C++"
                text="A calculator which parses user input using a tokenizer class, employs prefix notation to build binary trees which simplify algebraic equations subsituting user-defined variable values."
                path="/"/>
                <CardItem 
                src="/images/swissrail.png"
                title="Swiss Rail Costs"
                label="C++"
                text="A shortest path calculator using Dijkstra's algorithm to approximate the cheapest path between 35 towns and cities in Switzerland (and major international connections). Calculates the lowest cost path and displays the total cost and stops along the way."
                path="/"/>
             </ul>
          </div>
       </div>
       <h3>...and, of course, this very site. Built by me using <span>ReactJS</span>, <span>CSS</span>, and <span>Node.js</span>.</h3>
    </div>
  )
}

export default Cards