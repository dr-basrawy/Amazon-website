import "./Elec.css";
import Slider from "react-slick";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React from "react";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";

import { useDispatch } from "react-redux";
import Rate from "../rate/rate";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
import { getFilteredList } from "../../../store/Slice/filteredList";

export default function Electronics() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
  let dispatch = useDispatch();

  let navigate = useNavigate();
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  useEffect(() => {
    let isMounted = true;
    axiosInstance
      .get("category/651dda72537875a0a0d4ba3e")
      .then((data) => {
        if (isMounted) {
          const products = data.data.data.products;
          // setProductList(products);
          dispatch(getFilteredList(products));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      isMounted = false;
      dispatch(getFilteredList([]));
    };
  }, []);

  // var fav = useSelector((state) => { return state.favorite.data.productId })

  function gotodetails(prodId) {
    console.log(prodId);
    navigate("/productdetails", { state: { productId: prodId } });
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="row container-fluid">
        <LiftSide
          categoryId={"651dda72537875a0a0d4ba3e"}
          lessThan={50}
          between1={[50, 100]}
          between2={[100, 300]}
          between3={[700, 2500]}
          greaterThan={2500}
        />
        <div className="col-xl-10 col-md-9 col-8 sideRight container-fluid justify-content-center align-content-center">
          <div className="container-fluid">
            <div className="row">
              <h2 className="mt-2">{t("Electronics")}</h2>
              <img
                src={
                  language == "en"
                    ? "../assets/images/XCM_.jpg"
                    : "../assets/images/fashionArabicImag.jpg"
                }
                className="img-fluid"
                alt="..."
              />
              <div className="container-fluid my-2 joinPrime" id="joinPrime">
                <div className="row col-12 d-flex flex-md-row flex-column justify-content-center p-2">
                  <p className="col-md-5 me-2 fs-5">
                    {t(
                      "Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today"
                    )}
                  </p>
                  <button className="btn btn-warning col-md-2  fs-5 h-50">
                    {" "}
                    {t("Join Prime")}
                  </button>
                </div>
              </div>{" "}
              <img
                className="col-lg-6 col-md-12"
                src="../assets/images/1_EN.png"
                alt="..."
              />
              <img
                className="col-lg-6 col-md-12"
                src="../assets/images/2-EN.png"
                alt="..."
              />
              <hr className="mt-2" />
              <h3 className="mt-4 text-center">{t("SHOP BY CATEGORY")}</h3>
              <div className="mt-3">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/11.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="card-text text-center">
                          {t("Mobiles& Accessories")}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/22.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">{t("TVs")}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/33.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">
                          {t("Headphones")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/44.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">
                          {t("Laptops")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/55.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">
                          {t("PCs & accessories")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0">
                      <img
                        src="../assets/images/66.PNG"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-text text-center">
                          {t("Speakers")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <img src="../assets/images/818.jpg" className="mt-3 img-fluid" />
              <h3 className="mt-4 text-center">{t("FEATURED BRANDS")}</h3>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/88.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/77.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/99.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  border-0" style={{ width: "18rem" }}>
                    <img
                      src="../assets/images/66.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
              <img src="../assets/images/9=.jpg" className="mt-2 img-fluid" />
              <hr className="mt-3" />
              <h2>
                {t("Electronics")} | {t("New arrivals")}
              </h2>
              <hr />
              <Slider {...settings}>
                {filteredList.map((prod) => {
                  return (
                    <>
                      <div className="card border-0 ">
                        <img
                          src={prod.img}
                          className="card-img-top1"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {language == "en" ? prod.title_en : prod.title_ar}
                          </p>
                          {/* <span>Soundcore</span> */}
                          <div className="d-flex">
                            {t("EGP")}
                            <sub>
                              <h3>{prod.price.new}</h3>
                            </sub>
                            00
                          </div>
                          <span className="text-muted pt-3 text-decoration-line-through me-2">
                            {" "}
                            {prod.price.old}
                          </span>
                          <div>
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarHalf color="#FFA41C" />
                            <BsStar color="#FFA41C" />
                            (57)
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <h2 className="mt-4">
                {t("Electronics")} | {t("Best Sellers")}
              </h2>
              <hr />
              <Slider {...settings}>
                {filteredList.map((prod) => {
                  return (
                    <>
                      <div className="card border-0">
                        <img
                          src={prod.img}
                          onClick={() => {
                            gotodetails(prod._id);
                          }}
                          className="card-img-top1"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {language == "en" ? prod.title_en : prod.title_ar}
                          </p>
                          {/* <span>MONADIKOS</span> */}
                          <div className="d-flex">
                            {t("EGP")}
                            <sub>
                              <h3>{prod.price.new}</h3>
                            </sub>
                            00
                            <span className="text-muted pt-3 text-decoration-line-through me-2">
                              {" "}
                              {prod.price.old}
                            </span>
                          </div>
                          <div>
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarHalf color="#FFA41C" />
                            (2,494)
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div className="card mt-4">
                <div className="card-body">
                  <span>
                    {t("1-12 of over 70,000 results for")}{" "}
                    <span className="text-danger fw-bold">
                      {t("Electronics")}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {filteredList.map((prod) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                      <div className="card" style={{ width: "21rem" }}>
                        <img
                          src={prod.img}
                          onClick={() => {
                            gotodetails(prod._id);
                          }}
                          className="card-img-top imgCard container-fluid justify-content-center align-content-center"
                          alt="..."
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {language == "en" ? prod.title_en : prod.title_ar}
                          </p>

                          <Rate rate={prod.rate}></Rate>
                          <div className="d-flex">
                            {language == "en" && t("EGP")}{" "}
                            {language == "ar" && "00"}{" "}
                            <sub>
                              <h3>{prod.price.new}</h3>
                            </sub>
                            {language == "en" && "00"}
                            {language == "ar" && t("EGP")}
                            <span className="pt-3 me-2">
                              {" "}
                              <span className="text-muted pt-3 text-decoration-line-through me-2">
                                {prod.price.old}
                              </span>
                            </span>
                          </div>
                          <div className="d-flex align-items-start me-3">
                            <img
                              src="../assets/images/a.PNG"
                              style={{ width: "50px" }}
                            />
                            <h6>
                              {t("Get it as soon as")} {t("tomorrow, Jul 31")}
                            </h6>
                          </div>
                          <h6>{t("Fulfilled by Amazon - FREE Shipping")}</h6>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn mt-4 mb-5 seeAll" type="button">
              <h5>{t("See all results")}</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
