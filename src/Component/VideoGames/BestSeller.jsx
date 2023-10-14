import React from 'react'
import { Container, Pagination, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { useSelector } from 'react-redux'

export default function BestSeller() {
  const {t}=useTranslation();
  let language=useSelector((state)=>state.language.language)
  return (
  <>
   <img src={language=='en'?"../assets/images/BSeller.PNG":"../assets/images/videoGamesArabic.png"} className="img-fluid" alt="..." />
 <div className="row container-fluid">
    <section className="col-xl-2 col-md-3 col-4 leftSide ps-xl-4 ps-1">
    <a className="mt-4 text-dark">‹ Any Department</a>
      <h6 className="px-3 mt-2 fw-bold">Video Games</h6>
      <div className="px-4">
       <div> 
             <a className="abar">Installation Services</a>
       </div>  
    <div>
    <a className="abar">Legacy Systems</a>
    </div>
      <div>
      <a className="abar">Linux Games</a>
      </div>
        <div>
        <a className="abar">Mac</a>
        </div>
        <div>
        <a className="abar">Nintendo Switch</a>
        </div>
        <div>
        <a className="abar">Pc</a>
        </div>
        <div>
        <a className="abar">PlayStation 4</a>
        </div>
        <div>
        <a className="abar">PlayStation 5</a>
        </div>
        <div>
        <a className="abar">Warranties</a>
        </div>
        <div>
        <a className="abar">Xbox One</a>
        </div>
        <div>
        <a className="abar">NXbox Series X & S</a>
        </div>
</div>
    </section>
    <div className="col-xl-10 col-md-9 col-8 sideRight container-fluid justify-content-center align-content-center">
  <Container>
      <Row>
      <h2 className="mt-3">{t("Best Sellers in Video Games")}</h2>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#1</span>
                <img src="../assets/images/m2.jpg" className="card-img-top mx-5 h-50 w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">Aula S20 3200 Dpi LED Macro Gaming Mouse</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#2</span>
                <img src="../assets/images/m3.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">1 Year Extended Warranty Plan for one customer purchased IT or Audio-Video products from EGP1000 to EGP1499.99</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />8  
                         </div>
                         <span className="text-danger">EGP 92.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#3</span>
                <img src="../assets/images/m4.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch),with Non-Slip Base,Waterproof and Foldable</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#4</span>
                <img src="../assets/images/m5.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-40">
                  <a className="seeMore">ONIKUMA K8 RGB Gaming headphone Over-ear Headset with Microphone Volume Control Headphones RGB LED Lights</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#5</span>
                <img src="../assets/images/m6.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">ONIKUMA K8 RGB Gaming headphone Over-ear Headset with Microphone Volume Control Headphones RGB LED Lights</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />8  
                         </div>
                         <span className="text-danger">EGP 92.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#6</span>
                <img src="../assets/images/m7.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body ">
                  <a className="seeMore">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch),with Non-Slip Base,Waterproof and Foldable</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            
            <div className="card">
            <img src="../assets/images/hor.PNG" className="img-fluid " alt="..." />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#7</span>
                <img src="../assets/images/m8.jpg" className="card-img-top mx-5 h-50 w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch)</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#8</span>
                <img src="../assets/images/m9.jpg" className="card-img-top mx-5 h-50 w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">1 Year Extended Warranty Plan for one customer purchased IT or Audio-Video products from EGP1000 to EGP1499.99</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />8  
                         </div>
                         <span className="text-danger">EGP 92.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#9</span>
                <img src="../assets/images/m4.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch),with Non-Slip Base,Waterproof and Foldable</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#10</span>
                <img src="../assets/images/m5.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">ONIKUMA K8 RGB Gaming headphone Over-ear Headset with Microphone Volume Control Headphones RGB LED Lights</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#11</span>
                <img src="../assets/images/m6.jpg" className="card-img-top mx-5  w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">ONIKUMA K8 RGB Gaming headphone Over-ear Headset with Microphone Volume Control Headphones RGB LED Lights</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />8  
                         </div>
                         <span className="text-danger">EGP 92.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 g-0 divcard">
              <div className="card BCards h-100">
              <span className="bestSellerBadge2 card-subtitle ">#12</span>
                <img src="../assets/images/m7.jpg" className="card-img-top mx-5 w-50 imgCard2"/>
                <div className="card-body h-25">
                  <a className="seeMore">EFISH Large Gaming Mouse Map Pad 800×300×2MM (31.50X11.81X0.08 inch),with Non-Slip Base,Waterproof and Foldable</a>
                 <div>
                 <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarFill color='#FFA41C' />
          <BsStarHalf color='#FFA41C' />
          <BsStar color='#FFA41C' />156  
                         </div>
                         <span className="text-danger">EGP 144.99</span>
                </div>
              </div>
            </div>
        
            
            <div className='container d-flex justify-content-center my-5'>
                    <Pagination id='todayDealsPagination' >
                        <Pagination.Item disabled>
                        {language=='en'?<GrLinkPrevious />:<GrLinkNext />}{t("Previous")}</Pagination.Item>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item >{2}</Pagination.Item>
                        <Pagination.Item >{3}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{21}</Pagination.Item>
                        <Pagination.Item>{t("Next")}
                        {language=='en'?<GrLinkNext />:<GrLinkPrevious />}
                        </Pagination.Item>
                    </Pagination>
                </div>
      </Row>
      </Container>
      </div>
</div>
  </>
  )
}