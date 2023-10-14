import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import PropTypes from 'prop-types';
import NewArrivalsCards from './newArrivalsCards';
// import { useSelector } from 'react-redux';


export default function HomeAndBestSellers(props) {
    // const state= useSelector((state)=>state);
    // console.log(state.products.products);
    // const productsList=state.products.products;
    const imgSrc=(props.img)?'../assets/homeProductsImages/':'./assets/homeProductsImages/';

  
    return (

            <Splide options={{ perPage: props.numberOfItems, rewind: true, pagination: false , height:"300px"}}>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}freshKeepingBags.jpg`} title={'Fresh Keeping Bags, Elastic Food Storag...'} price={'30.00'} oldPrice={'41.00'} reviews={'353'} fullStar={4} emptyStar={1} halfStar={0}/>
               </SplideSlide>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}pillowCase.jpg`} title={'Bless Pillow Case'} price={'114.00'} oldPrice={'160.00'} reviews={'465'} fullStar={5} emptyStar={0} halfStar={1}/>
               </SplideSlide>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}BrushForDishes.jpg`} title={'Brush for dishes with liquid soap-plastic...'} price={'7.00'} oldPrice={'15.00'} reviews={'923'} fullStar={3} emptyStar={1} halfStar={1}/>
               </SplideSlide>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}colthesStorage.jpg`} title={'Large Capacity Clothes Storage Ba...'} price={'78.00'} oldPrice={''} reviews={'7,770'} fullStar={4} emptyStar={1} halfStar={0}/>
               </SplideSlide>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}replacement.jpg`} title={'Panasonic p-6jrc-zeg replacement water ...'} price={'598.00'} oldPrice={''} reviews={'1,194'} fullStar={4} emptyStar={0} halfStar={1}/>
               </SplideSlide>
               <SplideSlide>
                <NewArrivalsCards img={`${imgSrc}oilSpry.jpg`} title={'Oil Sprayer for Cooking, Olive Oil S...'} price={'43.00'} oldPrice={'65.28'} reviews={'16,740'} fullStar={3} emptyStar={1} halfStar={1}/>
               </SplideSlide>
               {/* {productsList.map((item)=>{
                return <SplideSlide key={item.id}>
                <NewArrivalsCards img={item.img} title={item.title} price={item.newPrice} oldPrice={item.oldPrice} reviews={'25'} fullStar={4} emptyStar={1} halfStar={0}/>
               </SplideSlide>
               })} */}
             
            </Splide>  
    )
}
HomeAndBestSellers.propTypes = {
    numberOfItems: PropTypes.number.isRequired,
    img: PropTypes.string
}