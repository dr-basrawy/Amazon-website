import React, { useLayoutEffect, useState } from 'react'
import LiftSide from './../../TodayDeals/todayDealsLiftSide/liftSide';
import HomeDecorCards from './cards/HomeDecorCards';
import NewArrivalsCards from '../Main/MainSlider/newArrivalsCards';
import HomeAndBestSellers from '../Main/MainSlider/homeAndBestSellers';
import BodyCards from '../Main/Body/Cards';
import { useTranslation } from 'react-i18next';

export default function HomeDecor() {
  const imgSrc = '../assets/homeProductsImages/';
  const [screenWidth, setScreen] = useState(window.innerWidth);

  const {t}=useTranslation();
  useLayoutEffect(function () {
    function handleResize() {
      setScreen(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  let cardColumn = (screenWidth > 1200) ? 2 : (screenWidth < 1200 && screenWidth > 991) ? 3 : (screenWidth < 991 && screenWidth > 350) ? 6 : 6;
  return (
    <div className='container-fluid py-4'>
      <div className='row'>
      <LiftSide categoryId={"6508ca71b9e80db520b9d6f5"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>
        <div className='col-xl-10 col-md-9 col-8 container-fluid'>
          <h1 >{t("Home Decor")}</h1>
          <h2 className='mt-5 mb-1'>{t("Featured categories")}</h2>
          <div className='row d-flex justify-content-around'>
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} li1={"Cushion Cover"} li2={"Cushions"} li3={"Poufs"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Evel.jpg`} title={"Decorative Accessories"} li1={"Sculptures"} li2={"Hanging Ornaments"} li3={"Wall Pediments"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}children Room.jpg`} title={"Children's Room Décor"} li1={"Wall Décor"} li2={"Rugs"} li3={"Money Banks"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}nusery.jpg`} title={"Nusery & Décor"} li1={"Wall Decoration"} li2={"Pillows"} li3={"Lighting"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Rugs.jpg`} title={"Rugs,Pads & Protectors"} li1={"Are Rugs"} li2={"Bath Rugs"} li3={"Doormats"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} li1={"Cushion Cover"} li2={"Cushions"} li3={"Poufs"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Evel.jpg`} title={"Decorative Accessories"} li1={"Sculptures"} li2={"Hanging Ornaments"} li3={"Wall Pediments"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}children Room.jpg`} title={"Children's Room Décor"} li1={"Wall Décor"} li2={"Rugs"} li3={"Money Banks"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}nusery.jpg`} title={"Nusery & Décor"} li1={"Wall Decoration"} li2={"Pillows"} li3={"Lighting"} />
            <HomeDecorCards column={cardColumn} img={`${imgSrc}Rugs.jpg`} title={"Rugs,Pads & Protectors"} li1={"Are Rugs"} li2={"Bath Rugs"} li3={"Doormats"} />
          </div>
          <div className='container-fluid'>
            <h2>{t("Up to 25 EGP")} <span className='ms-2 text-success fs-5'>{t("See more")}</span></h2>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} price={"20"} oldPrice={"30"} fullStar={3} emptyStar={1} halfStar={1} reviews='122' /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} price={"20"} oldPrice={"30"} fullStar={3} emptyStar={1} halfStar={1} reviews='122' /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} price={"20"} oldPrice={"30"} fullStar={3} emptyStar={1} halfStar={1} reviews='122' /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}Bedding Essentials.jpg`} title={"Cushions & Accessories"} price={"20"} oldPrice={"30"} fullStar={3} emptyStar={1} halfStar={1} reviews='122' /></div>
          </div>
          <div className='container-fluid'>
            <h2>{t("Most viewed")} <span className='ms-2 text-success fs-5'>{t("See more")}</span></h2>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}oilSpry.jpg`}
              title={'Oil Sprayer for Cooking, Olive Oil S...'}
              fullStar={3}
              emptyStar={1}
              halfStar={1}
              reviews={'16,740'}

              price={'43.00'}
              oldPrice={'65.28'} /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}oilSpry.jpg`}
              title={'Oil Sprayer for Cooking, Olive Oil S...'}
              fullStar={3}
              emptyStar={1}
              halfStar={1}
              reviews={'16,740'}

              price={'43.00'}
              oldPrice={'65.28'} /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}oilSpry.jpg`}
              title={'Oil Sprayer for Cooking, Olive Oil S...'}
              fullStar={3}
              emptyStar={1}
              halfStar={1}
              reviews={'16,740'}

              price={'43.00'}
              oldPrice={'65.28'} /></div>
            <div className='col-xl-3 col-6 d-inline-block'><NewArrivalsCards img={`${imgSrc}oilSpry.jpg`}
              title={'Oil Sprayer for Cooking, Olive Oil S...'}
              fullStar={3}
              emptyStar={1}
              halfStar={1}
              reviews={'16,740'}

              price={'43.00'}
              oldPrice={'65.28'} /></div>
          </div>
          <div className='container-fluid'>
            <h2>{t("Top Rated")} <span className='ms-2 text-success fs-5'>{t("See more")}</span></h2>
            <div className='col-xl-3 col-6 d-inline-block'>
            <NewArrivalsCards img={`${imgSrc}Evel.jpg`} title={'Paris Eiffel Tower model ornaments Decoration ho...'} fullStar={4} emptyStar={0} halfStar={1} reviews={'3'} price={'185'} oldPrice={''} />
            </div>
            <div className='col-xl-3 col-6 d-inline-block'>
            <NewArrivalsCards img={`${imgSrc}Evel.jpg`} title={'Paris Eiffel Tower model ornaments Decoration ho...'} fullStar={4} emptyStar={0} halfStar={1} reviews={'3'} price={'185'} oldPrice={''} />
            </div>
            <div className='col-xl-3 col-6 d-inline-block'>
            <NewArrivalsCards img={`${imgSrc}Evel.jpg`} title={'Paris Eiffel Tower model ornaments Decoration ho...'} fullStar={4} emptyStar={0} halfStar={1} reviews={'3'} price={'185'} oldPrice={''} />
            </div>
            <div className='col-xl-3 col-6 d-inline-block'>
            <NewArrivalsCards img={`${imgSrc}Evel.jpg`} title={'Paris Eiffel Tower model ornaments Decoration ho...'} fullStar={4} emptyStar={0} halfStar={1} reviews={'3'} price={'185'} oldPrice={''} />
            </div>

          </div>
          <HomeAndBestSellers img={'.'} numberOfItems={(screenWidth > 1200) ? 6 : (screenWidth < 1200 && screenWidth >= 768) ? 2 : (screenWidth < 768 && screenWidth > 650) ? 2 : 1} />
          <div className='border rounded-3 py-3 px-5'> {t("1-12 of over 70,000 results")} <span className='text-warning fw-bolder'>{t("Home Decor")}</span> </div>
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
            <div style={{backgroundColor:"#eee" ,color:"#007185"}} className='rounded col-12 text-center fw-bolder fs-5 py-3'>{t("See all results")}</div>
        </div>
      </div>
    </div>
  )
}
