import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import PropTypes from 'prop-types';
import NewArrivalsCards from './newArrivalsCards';
import { useSelector } from 'react-redux';


export default function NewArrivalsSliders(props) {
    const state = useSelector((state) => state);
    console.log(state.products.products);
    const productsList = state.products.products;
    const imgSrc = './assets/homeProductsImages/';

    return (
        <div style={{maxHeight:"450px"}}>

            <Splide options={{ perPage: props.numberOfItems, rewind: true, pagination: false ,height:"300px" }}>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}highAccuracy.jpg`} title={'High Accuracy Digital Kitchen Scale 10 Kg...'} price={'102.00'} oldPrice={'114.00'} reviews={'26'} fullStar={3} emptyStar={1} halfStar={1} />
                </SplideSlide>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}launchSet.jpg`} title={'M-Design Lunch Set - 1.6L Lunch Box, 650...'} price={'245.00'} oldPrice={'275.00'} reviews={'1'} fullStar={5} emptyStar={0} halfStar={0} />
                </SplideSlide>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}pinkBottle.jpg`} title={'M-Design Square Bottle with Strap 8..'} price={'110.00'} oldPrice={'145.00'} reviews={'4'} fullStar={4} emptyStar={0} halfStar={1} />
                </SplideSlide>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}teaCups.jpg`} title={'[50 PCs Pack-C1] Tea and Coffee 7 Oz pa...'} price={'39.00'} oldPrice={''} reviews={'3'} fullStar={5} emptyStar={0} halfStar={0} />
                </SplideSlide>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}blueLaunchSet.jpg`} title={'M-Design Lunch Set - 1.6L Box, 650ml W...'} price={'245.00'} oldPrice={'275.00'} reviews={'3'} fullStar={3} emptyStar={1} halfStar={1} />
                </SplideSlide>
                <SplideSlide>
                    <NewArrivalsCards img={`${imgSrc}launchBox.jpg`} title={'Mintra Lunch...'} price={'27.00'} oldPrice={''} reviews={''} fullStar={0} emptyStar={0} halfStar={0} />
                </SplideSlide>
                {/* {productsList.map((item) => {
                    return <SplideSlide key={item.id}>
                        <NewArrivalsCards img={item.img} title={item.title} price={item.newPrice} oldPrice={item.oldPrice} reviews={'25'} fullStar={4} emptyStar={1} halfStar={0} />
                    </SplideSlide>
                })} */}

            </Splide>
        </div>
    )
}
NewArrivalsSliders.propTypes = {
    numberOfItems: PropTypes.number.isRequired
}