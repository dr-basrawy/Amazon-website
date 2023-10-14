import React from 'react'
import './cards.css'
import { PropTypes } from 'prop-types';

export default function HomeDecorCards(props) {
  
  return (
    <div className={`HomeDecorCards p-0 mx-2 col-${props.column}`}>
    <div className="icon mb-3 p-3 d-flex justify-content-center align-items-center">
    <img className='w-75 h-75'  src={props.img}/>
    </div>
    <h3>{props.title}</h3>
    <div className="content">
    <hr/>
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
        </ul>
    </div>
</div>
  )
}
HomeDecorCards.propTypes={
  column:PropTypes.number.isRequired,
  img:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired ,
  li1:PropTypes.string.isRequired,
  li2:PropTypes.string.isRequired,
  li3:PropTypes.string.isRequired,
}