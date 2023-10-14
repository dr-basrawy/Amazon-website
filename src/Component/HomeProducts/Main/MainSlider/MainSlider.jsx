import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';

import PropTypes from 'prop-types';
import SlidersCards from './SlidersCards';
import { useSelector } from 'react-redux';

export default function MainSliders(props) {
    const imgSrc='./assets/homeProductsImages/';
    let language=useSelector((state)=>state.language.language)
  
    return (

            <Splide options={{ perPage: props.numberOfItems, rewind: true, pagination: false,direction:(language=='en'?"ltr":'rtl') }}>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/Home Curtains.jpg`} discount={"10%"} title='Home Curtains'/>
               </SplideSlide>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/Bedding Essentials.jpg`} discount={"30%"} title='Bedding Essentials'/>
               </SplideSlide>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/white Home Curtains.jpg`} discount={"10%"} title='Home Curtains'/>
               </SplideSlide>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/Home Essentials.jpg`} discount={"10%"} title='Home Essentials'/>
               </SplideSlide>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/Pedrini.jpg`} discount={"20%"} title='Pedrini'/>
               </SplideSlide>
               <SplideSlide>
               <SlidersCards img={`${imgSrc}/brownHome Curtains.jpg`} discount={"10%"} title='Home Curtains'/>
               </SplideSlide>
            </Splide>  
    )
}
MainSliders.propTypes = {
    numberOfItems: PropTypes.number.isRequired
}