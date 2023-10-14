import React, { useLayoutEffect, useState } from 'react'
import './body.css'
import MainSliders from '../MainSlider/MainSlider'
import NewArrivalsSliders from '../MainSlider/newArrivalsSlider';
import HomeAndBestSellers from '../MainSlider/homeAndBestSellers';
import BodyCards from './Cards';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Body() {
    const imgSrc = './assets/homeProductsImages/';
    const [screenWidth, setScreen] = useState(window.innerWidth);
    const {t}=useTranslation()
    let language= useSelector((state)=>state.language.language)

    useLayoutEffect(function () {
        function handleResize() {
            setScreen(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='container-fluid col-xl-10 col-md-9 col-8 p-3 homeBody'>
            <h2 className='fw-bold'> {t("Home and Kitchen")}</h2>
            <img className='w-100'
             src={language=='en'? './assets/homeProductsImages/new.jpg':"../assets/images/videoGamesMainIamages.jpg"} />
            <div className='container-fluid  my-3 py-4' id='joinPrime'>
                <div className='row col-12 d-flex flex-md-row flex-column justify-content-center p-2'>
                    <p className='col-md-5 me-2 fs-5'>
                        {t("Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today")}
                    </p>
                    <button className='btn btn-warning col-md-2  fs-5 h-50'> {t("Join Prime")}</button>
                </div>
            </div>
            <div className='container-fluid' id='homeSlider'>
                <h2>{t("Home & Kitchen best deals")}</h2>
                <MainSliders numberOfItems={(screenWidth > 1200) ? 3 : (screenWidth < 1200 && screenWidth > 768) ? 2 : 1} />
            </div>
            <hr />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 p-0'><img className='w-100' src={`${imgSrc}Deals on Diamond products.jpg`} /></div>
                    <div className='col-6 p-0'><img className='w-100' src={`${imgSrc}Deals on Siag.jpg`} /></div>
                </div>
                <div className='row'>
                    <div className='col-12 p-0 my-3'><img className='w-100' src={`${imgSrc}EveryThing For home.jpg`} /></div>

                </div>
                <hr />
                <hr className='my-4' />
                <div className='container-fluid'>
                    <h3 className='text-center'> {t("You may also like Home")}</h3>
                    <div className='row'>
                        <div className='col-lg-3 col-6'><img className='w-100' src={`${imgSrc}Kitchen.jpg`} /></div>
                        <div className='col-lg-3 col-6'><img className='w-100' src={`${imgSrc}Appliances.jpg`} /></div>
                        <div className='col-lg-3 col-6'><img className='w-100' src={`${imgSrc}Furniture.jpg`} /></div>
                        <div className='col-lg-3 col-6'><img className='w-100' src={`${imgSrc}Garden_Outdoor.jpg`} /></div>
                    </div>
                </div>
                <div className='container-fluid my-5' style={{ maxHeight: "400px" }}>
                    <h3>{t("New Arrivals")}</h3>
                    <hr />
                    <NewArrivalsSliders numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth >= 768) ? 2 : (screenWidth < 768 && screenWidth > 650) ? 2 : 1} />
                </div>
                <div className='container-fluid my-5' style={{ maxHeight: "400px" }}>
                    <h3>{t("Home | Best Sellers")}</h3>
                    <hr />
                    <HomeAndBestSellers numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth >= 768) ? 2 : (screenWidth < 768 && screenWidth > 650) ? 2 : 1} />
                </div>
            </div>
            <div className='border rounded-3 py-3 px-5'> {t("1-12 of over 70,000 results for")} <span className='text-warning'>{t("Home & Kitchen")}</span> </div>
            <div className='container-fluid my-4'>
                <div className='row d-flex justify-content-evenly'>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}oilSpry.jpg`}
                        title={'Oil Sprayer for Cooking, Olive Oil S...'}
                        fullStar={3}
                        emptyStar={1}
                        halfStar={1}
                        reviews={'16,740'}
                        bestSellers={true}
                        price={'43.00'}
                        oldPrice={'65.28'} /></div>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}freshKeepingBags.jpg`}
                        title={'Fresh Keeping Bags, Elastic Food Storag...'}
                        fullStar={4}
                        emptyStar={1}
                        halfStar={0}
                        reviews={'353'}
                        bestSellers={true}
                        price={'30.00'}
                        oldPrice={'41.00'} /></div>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}highAccuracy.jpg`}
                        title={'High Accuracy Digital Kitchen Scale 10 Kg...'}
                        fullStar={3}
                        emptyStar={1}
                        halfStar={1}
                        reviews={'26'}
                        bestSellers={true}
                        price={'102.00'}
                        oldPrice={'114.00'} /></div>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}oilSpry.jpg`}
                        title={'Oil Sprayer for Cooking, Olive Oil S...'}
                        fullStar={3}
                        emptyStar={1}
                        halfStar={1}
                        reviews={'16,740'}
                        bestSellers={false}
                        price={'43.00'}
                        oldPrice={'65.28'} /></div>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}freshKeepingBags.jpg`}
                        title={'Fresh Keeping Bags, Elastic Food Storag...'}
                        fullStar={4}
                        emptyStar={1}
                        halfStar={0}
                        reviews={'353'}
                        bestSellers={true}
                        price={'30.00'}
                        oldPrice={'41.00'} /></div>
                    <div className='mx-1 my-1 col-lg-3 col-md-6 card'><BodyCards img={`${imgSrc}highAccuracy.jpg`}
                        title={'High Accuracy Digital Kitchen Scale 10 Kg...'}
                        fullStar={3}
                        emptyStar={1}
                        halfStar={1}
                        reviews={'26'}
                        bestSellers={false}
                        price={'102.00'}
                        oldPrice={'114.00'} />
                        </div>
                        </div>
                 
                
            </div>
        </div>
    )
}
