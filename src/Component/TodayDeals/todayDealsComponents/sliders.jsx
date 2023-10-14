import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

import PropTypes from 'prop-types';
import SliderCards from './sliderCards';

export default function Sliders(props) {
    const imgSrc='./assets/todayDealsImage/';
    return (
        <div style={{maxHeight:"650px"}}>
            <Splide options={{ perPage: props.numberOfItems, rewind: true, pagination: false }}>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}playStation.jpg`} title={"Disc Edition Face Plates Cover Skins Shell Panels for PS5 Console, Playstation 5 Accessori..."} fullStar={4} emptyStar={1} reviews={"1,001"} deal={true} price={"1,119.20"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}laptophousing.jpg`} title={"Replacement Faceplate Cover Housing Shell Case for Sony Playstation 5 Ultra HD Digital Edition Console..."} fullStar={4} emptyStar={1} reviews={"423"} deal={false} price={"750.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}kindle.jpg`} title={" All-new Kindle (2022   release) — The lightest and most compact  Kindle, now with a 6 300 ppi high-resolutio..."} fullStar={4} emptyStar={0} halfStar={1} reviews={"423"} deal={false} price={"2999.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}kindleCase.jpg`} title={"  Kindle 6 Inch Protective Case Cover Interior Padded Shockproof Pocket Pouch Durable Bag with Zipper Closur..."} fullStar={4} emptyStar={1} halfStar={0} reviews={"26"} deal={false} price={"450.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}kindleOases.jpg`} title={"Kindle Oasis (10th Gen), Now with adjustable warm light, 7 Display, Waterproof, 32 GB, Wi- Fi, Graphite"} fullStar={4} emptyStar={0} halfStar={1} reviews={"116"} deal={false} price={"450.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}kindleleatherCase.jpg`} title={"Premium Pu leather Case for Kindle Paperwhite 1 lth Generation and Kindle Paperwhite Signature Edition (6.8 inch, 2021 Release) -..."} fullStar={0} emptyStar={0} halfStar={0} reviews={""} deal={false} price={"449.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}MSI.jpg`} title={"MSI Creator 15 Professional Laptop: 15.6 UHD OLED 4K DCI- P3 100% Display, Intel Core i7-11800H, NVIDIA GeForce RTX 3060, 16GB RAM, 512GB NVME SS..."} fullStar={0} emptyStar={0} halfStar={0} reviews={""} deal={false} price={"59,999.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}GF63.jpg`} title={"GF63 Thin 1 IUC (RTX3050, GDDR6 4GB)"} fullStar={0} emptyStar={0} halfStar={0} reviews={""} deal={false} price={"27,499.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}Hp Victus.jpg`} title={"Victus 16-el OOOne Gaming Laptop - Ryzen 5 6600H 6-Cores, 16GB RAM DDR5-4800, 512GB SSD, NVIDIA GeForce RTX 3050 4GB GDDR6..."} fullStar={0} emptyStar={0} halfStar={0} reviews={""} deal={false} price={"30,404.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}MSI stealth.jpg`} title={"MSI GS66 Stealth 11UG (i7 11800H / 16GB / ITB SSD/RTX 3070 8GB / 360Hz / Win 10)"} fullStar={0} emptyStar={0} halfStar={0} reviews={""} deal={false} price={"64,762.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}legion7.jpg`} title={"Legion7 16ITHg6 ,16WQXGA_AG_500N_165_N_HDR_SRGB ,STORM_GREY ,CORE_I7-11800H_2.3G_8C_MB..."} fullStar={3} emptyStar={2} halfStar={0} reviews={"5"} deal={false} price={"80,850.00"}/>
                </SplideSlide>
                <SplideSlide>
                    <SliderCards img={`${imgSrc}legon5pro.jpg`} title={"Legion 5 Pro 16ACH6H Gaming Laptop Ryzen7- 5800H 16 WQXGA 3070 8GB-2x 8GB Ram-ITB SSD- Windows 11..."} fullStar={0} emptyStar={0} halfStar={0} reviews={"5"} deal={false} price={"71,820.00"}/>
                </SplideSlide>
            </Splide>
        </div>
    )
}
Sliders.propTypes = {
    numberOfItems: PropTypes.number.isRequired
}
