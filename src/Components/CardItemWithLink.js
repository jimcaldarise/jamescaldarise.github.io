import React from 'react'
import { Link } from 'react-router-dom'

function CardItemWithLink(props) {
  return (
    <>
    <li className='cards__item'>
       <div  className='cards__item__link'>
          <div className='cards__item__title'>
             <h3 className='cards__title__text'>{props.title}</h3>
          </div>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
             <img src={props.src} alt="Project Image" className='cards__item__img'p/>
          </figure>
          <div className='cards__item__info'>
             <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <div className='cards__button'>
            <a target="_blank" href="https://roadtripper-playlist.herokuapp.com">
               <h2>Check it Out</h2>
            </a>
          </div>
       </div>
    </li>
    </>
  )
}

export default CardItemWithLink