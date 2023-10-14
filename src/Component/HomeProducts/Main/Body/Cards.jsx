import React from 'react'
import { FaStar, FaRegStar , FaStarHalfStroke } from "react-icons/fa6";
import PropTypes from 'prop-types';
import './body.css'
import { useTranslation } from 'react-i18next';

export default function BodyCards(props) {
  let{t}=useTranslation();
    let fullStars=[];
    let RegularStars=[];
    for (let i = 0; i < props.fullStar; i++) {
      fullStars.push(<FaStar key={i} className='checkedStar' />);
    }
    for(let i=0;i<props.emptyStar;i++){
        RegularStars.push( <FaRegStar key={i}/>)
    }
  return (
    <div className="card relatedItemsCard border-0 position-relative">
    <img className="pt-4 w-100 align-self-center" src={props.img} alt="playStation"/>
    <div className="card-body h-25 ">
      <div className="card-title  d-flex flex-column">
        <span className="relatedItemsTitle">
        {props.title}
        </span>
        <span>
        {
           fullStars
        }
        {
            (props.halfStar)?<FaStarHalfStroke className='checkedStar'/>:""
        }
        {
            RegularStars
        }
         
          <span className="averageReview">{props.reviews}</span>
        </span>
      </div>
      {props.bestSellers && <span className="bestSellerBadge card-subtitle ">{t("Best Sellers")}</span>}
      <p className="card-text d-flex flex-column fw-bolder">
        <span><span>EGP{props.price}</span>{props.oldPrice&&
            <span style={{fontSize:"12px"}} className='ms-1 text-secondary text-decoration-line-through'> EGP{props.oldPrice}</span>
          }</span>
        <span>Get it as soon as Tomorrow, Jul 29</span>
        <span>Fulfilled by Amazon - FREE Shipping on orders over EGP 450 Only 2 left in
          stock-order...</span>
      </p>
    </div>
  </div>
  )
}
BodyCards.propTypes={
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    fullStar:PropTypes.number.isRequired,
    emptyStar:PropTypes.number.isRequired,
    halfStar:PropTypes.number.isRequired,
    reviews:PropTypes.string.isRequired,
    bestSellers:PropTypes.bool.isRequired,
    price:PropTypes.string.isRequired,
    oldPrice:PropTypes.string.isRequired
}