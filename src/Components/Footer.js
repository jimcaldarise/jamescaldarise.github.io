import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div className='footer-container'>
      <section className='footer-header-section'>
        <p className='footer-heading'>
          Contact
        </p>
         <div class='footer-link-items'>
            <h2><i class='fa fa-envelope-o' /></h2>
            <h2>jim.caldarise <span>at</span> gmail.com</h2>
         </div>
      </section>
      <div class='footer-links'>
         <div class='footer-link-items'>
            <a target="_blank" href="https://linkedin.com/in/jim-caldarise">
               <h2><i class='fab fa-linkedin' />LinkedIn</h2>
            </a>
         </div>
         <div class='footer-link-items'>
            <a target="_blank" href="https://github.com/jimcaldarise">
               <h2><i class='fab fa-github' />Github</h2>
            </a>
         </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              _jim.caldarise
            </Link>
          </div>
          <div class='credits'>
            <small class='website-rights'>Created by Jim Caldarise 2022</small>
            <small class='website-rights'>Favicon generated with Favicon.io</small>
            <small class='website-rights'>Background Video by John Mackintosh from Pexels</small>
          </div>
        </div>
      </section>
    </div>

   //  <div className='footer-container'>
   //     <section className='contact'>
   //       <h2>Contact</h2>
   //       <div className='footer-links'>
   //          <div className='footer-link-wrapper'>
   //             <div className='footer-link-items'>
   //                   <Link to="#">github.com/jimcaldarise</Link>
   //             </div>
   //          </div>
   //          <div className='footer-link-wrapper'>
   //             <div className='footer-link-items'>
   //                   <Link to="#">linkedin.com/in/jimcaldarise</Link>
   //             </div>
   //          </div>
   //          <div className='footer-link-wrapper'>
   //             <div className='footer-link-items'>
   //                   <Link to="#">jim.caldarise at gmail.com</Link>
   //             </div>
   //          </div>
   //       </div>
   //     </section>
   //     <section className='social-media'>
   //        <div className='social-media-wrap'>
   //           <div className='footer-logo'>
   //              <Link to="/" className='social-logo'>
   //                 _jim.caldarise
   //              </Link>
   //           </div>
   //           <small className='website-date'>Created by Jim Caldarise 2022</small>
   //        </div>
   //     </section>
   //  </div>
  )
}

export default Footer