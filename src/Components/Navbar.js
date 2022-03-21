import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

  return (
   <>
      <nav className='navbar'>
         <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
               _jim.caldarise
            </Link>
            <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                  <HashLink to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                     <p>_projects</p>
                     <Button>_projects</Button>
                  </HashLink>
               </li>
               <li className='nav-item'>
                  <HashLink to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                     <p>_contact</p>
                     <Button>_contact</Button>
                  </HashLink>
               </li>
               <li className='nav-item'>
                  <HashLink to='/#about' className='nav-links' onClick={closeMobileMenu}>
                     <p>_about</p>
                    <Button>_about</Button> 
                  </HashLink>
               </li>
            </ul>
         </div>
      </nav>
   </>
  )
}

export default Navbar