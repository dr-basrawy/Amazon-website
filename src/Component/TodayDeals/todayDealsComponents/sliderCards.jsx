import React from 'react'
import { FaStar, FaRegStar , FaStarHalfStroke } from "react-icons/fa6";
import PropTypes from 'prop-types';

export default function SliderCards(props) {
    let fullStars=[];
    let RegularStars=[];
    for (let i = 0; i < props.fullStar; i++) {
      fullStars.push(<FaStar key={i} className='checkedStar' />);
    }
    for(let i=0;i<props.emptyStar;i++){
        RegularStars.push( <FaRegStar key={i}/>)
    }
  return (
    <div className="card relatedItemsCard border-0">
    <img className="pt-4 w-100 align-self-center" src={props.img} alt="playStation"/>
    <div className="card-body h-25">
      <div className="card-title  d-flex flex-column">
        <span className="relatedItemsTitle">
        {props.title}
        </span>
        <span>
        {
           fullStars
        }{
            RegularStars
        }{
            (props.halfStar)?<FaStarHalfStroke className='checkedStar'/>:""
        }
         
          <span className="averageReview">{props.reviews}</span>
        </span>
      </div>
      {props.deal && <h4 className="card-subtitle text-danger"><span className="badge rounded-1 bg-danger p-2 me-1">Deal</span>Top
        deal</h4>}
      <p className="card-text d-flex flex-column fw-bolder">
        <span>EGP{props.price}</span>
        <span>Get it as soon as Tomorrow, Jul 29</span>
        <span>Fulfilled by Amazon - FREE Shipping on orders over EGP 450 Only 2 left in
          stock-order...</span>
      </p>
    </div>
  </div>
  )
}
SliderCards.propTypes={
    fullStar:PropTypes.number.isRequired,
    emptyStar:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    halfStar:PropTypes.number.isRequired,
    reviews:PropTypes.string.isRequired,
    deal:PropTypes.bool.isRequired,
    price:PropTypes.string.isRequired,
}