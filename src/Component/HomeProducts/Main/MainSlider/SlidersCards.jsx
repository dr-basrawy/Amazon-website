import React from 'react'
import PropTypes from 'prop-types';

export default function SlidersCards(props) {
  return (
    <div className="card overflow-hidden py-3 h-100 border-0">
    <img className="pt-4 w-75 align-self-center h-75" src={props.img} alt="image"/>
    <div className="card-body h-25">
      <h4 className="card-title text-danger"><span className="badge rounded-1 bg-danger p-2 me-1">Up to {props.discount}
          off</span>Deal</h4>
      <p className="card-text mainCards">Save On {props.title}</p>
    </div>
  </div>
  )
}
SlidersCards.propTypes={
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    discount:PropTypes.string.isRequired,
}
