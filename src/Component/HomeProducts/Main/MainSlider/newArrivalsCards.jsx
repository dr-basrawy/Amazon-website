import React from 'react'
import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
import PropTypes from 'prop-types';

export default function NewArrivalsCards(props) {
  let fullStars = [];
  let RegularStars = [];
  for (let i = 0; i < props.fullStar; i++) {
    fullStars.push(<FaStar key={i} className='checkedStar' />);
  }
  for (let i = 0; i < props.emptyStar; i++) {
    RegularStars.push(<FaRegStar key={i} />)
  }
  return (
    <div className="card relatedItemsCard border-0 h-100">
      <img className="h-50 w-75"src={props.img} alt="image" />
      <div className="card-body h-25">
        <div className="card-title  d-flex flex-column">
          <span className="relatedItemsTitle">
            {props.title}
          </span>
          <span className='d-flex'>
          <span style={{fontSize:"14px"}}>EGP{props.price}</span>
           {props.oldPrice&&
            <span style={{fontSize:"12px"}} className='ms-1 text-secondary text-decoration-line-through'> EGP{props.oldPrice}</span>
          }</span>
          <span>
            {
              fullStars
            }
            {(props.halfStar) ? <FaStarHalfStroke className='checkedStar' /> : ""}
            {
              RegularStars
            }
            {props.reviews&&<span className="averageReview">({props.reviews})</span>}
          </span>
        </div>
      </div>
    </div>
  )
}
NewArrivalsCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  fullStar: PropTypes.number.isRequired,
  emptyStar: PropTypes.number.isRequired,
  halfStar: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
}