import React, { useEffect } from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import MainCards from "../TodayDeals/todayDealsComponents/MainCard";
import { useSelector } from "react-redux";

export default function Home() {
  let filterList = useSelector((state) => state.filteredList.filteredList);
  useEffect(
    function () {
      console.log(filterList);
    },
    [filterList]
  );

  let { t } = useTranslation();
  let language = useSelector((state) => state.language.language);

  return (
    <>
      <div className="w-80">
        <div className="section-main">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../assets/images/sec1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../assets/images/sec2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../assets/images/sec3.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-80">
        <div className="row m-0 px-3 transform-x">
          <div className="col-12 col-md-6  col-lg-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Gaming Accessories")}</h5>
                <div className="d-flex flex-wrap">
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/headset.jpg"
                      alt=""
                    />
                    <span>{t("Headsets")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                      alt=""
                    />
                    <span>{t("Keyboard")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/mouse.jpg"
                      alt=""
                    />
                    <span>{t("Computer mice")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/chair.jpg"
                      alt=""
                    />
                    <span>{t("Chairs")}</span>
                  </div>
                </div>
                <a href="#" className="card-link">
                  {t("See more")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 mt-md-0">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Get fit at home")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/message.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("See more")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Health & Personal Care")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/brush.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("See more")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mt-3 mt-lg-0">
            <div className="card err1">
              <div className="card-body bg-white pb-4 d-flex flex-column">
                <h5 className="card-title">
                  {t("Sign in for the best experience")}
                </h5>

                <button className="bg-warning w-100 rounded-3 py-1 fs-6 border-0">
                  {t("Sign in securly")}
                </button>
              </div>
            </div>
            <div className="pt-3">
              <img
                src="../assets/images/amazon_pack.jpg"
                className="w-100"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 col-lg-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">Shop by Category</h5>
                <div className="d-flex flex-wrap">
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/lap.jpg"
                      alt=""
                    />
                    <span>{t("Computers, Components & Accessories")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/plystation.jpg"
                      alt=""
                    />
                    <span>{t("VideoGames")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/baby.jpg"
                      alt=""
                    />
                    <span> {t("Baby")}</span>
                  </div>
                  <div className="d-flex flex-column w-50">
                    <img
                      className="w-100"
                      src="../assets/images/lol.jpg"
                      alt=""
                    />
                    <span>{t("Toys & Games")}</span>
                  </div>
                </div>
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Dresses")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/dress.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Electronics")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/camera.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("See more")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Easy returns")}</h5>
                <img className="w-100" src="../assets/images/rool.jpg" alt="" />
                <a href="#" className="card-link">
                  {t("See more")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Dresses")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/dress.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">
                  {t("Shop activity trackers and smart watch")}
                </h5>
                <img
                  className="w-100"
                  src="../assets/images/watch.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">
                  {t("Deals in Tools and Home Improvement")}
                </h5>
                <img
                  className="w-100"
                  src="../assets/images/tools.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Spring new arrivals")}</h5>
                <img className="w-100" src="../assets/images/wem.jpg" alt="" />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Home refresh ideas")}</h5>
                <img className="w-100" src="../assets/images/ket.jpg" alt="" />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Find your ideal TV")}</h5>
                <img className="w-100" src="../assets/images/tvv.jpg" alt="" />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1 ">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Shop school essentials")}</h5>
                <img
                  className="w-100"
                  src="../assets/images/books.jpg"
                  alt=""
                />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  col-lg-3 mt-3 ">
            <div className="card h-100 err1">
              <div className="card-body justify-content-between d-flex flex-column">
                <h5 className="card-title">{t("Home & Kitchen Under $30")}</h5>
                <img className="w-100" src="../assets/images/zoh.jpg" alt="" />
                <a href="#" className="card-link">
                  {t("Shop now")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 
            <div className="container">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                    data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../assets/images/sec1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="../assets/images/sec3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
      </div>
      <div className="col-xl-10 col-md-9 col-8 container-fluid">
        <div className="row">
          {filterList.length > 0 &&
            filterList.map((item) => {
              return (
                <MainCards
                  key={item._id}
                  img={item.img}
                  title={language == "en" ? item.title_en : item.title_ar}
                  discount={item.price.discount}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
