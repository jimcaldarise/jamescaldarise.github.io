import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
       <Link  className='cards__item__link' to={props.path}>
          <div className='cards__item__title'>
             <h3 className='cards__title__text'>{props.title}</h3>
          </div>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
             <video src={props.src} alt="Project Video" className='cards__item__img' autoplay muted loop></video>
          </figure>
          <div className='cards__item__info'>
             <h5 className='cards__item__text'>{props.text}</h5>
          </div>
       </Link>
    </li>
    </>
  )
}

export default CardItem