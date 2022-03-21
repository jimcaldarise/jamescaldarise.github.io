import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Cards from '../Cards';
import About from '../About';
import Footer from '../Footer';

function Home () {
   return (
      <>
         <Hero />
         <div id="projects">
             <Cards/>
         </div>
         <div id="about">
            <About/>
         </div>
         <div id="contact">
            <Footer id="contact" />
         </div>
      </>
   );
}

export default Home;