import { Col, Container, Row } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import "./Vgames.css";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
import { useDispatch } from "react-redux";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
import { getFilteredList } from "../../../store/Slice/filteredList";

export default function VideoGames() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    let isMounted = true;
    axiosInstance
      .get("category/6513e74cd998df0148e42307")
      .then((data) => {
        if (isMounted) {
          const products = data.data.data.products;
          dispatch(getFilteredList(products));
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isMounted = false;
      dispatch(getFilteredList([]));
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function gotodetails(prodId) {
    console.log(prodId);
    navigate("/productdetails", { state: { productId: prodId } });
  }
  return (
    <>
      <div className="row container-fluid">
        <LiftSide
          categoryId={"6513e74cd998df0148e42307"}
          lessThan={99}
          between1={[100, 399]}
          between2={[300, 699]}
          between3={[700, 1500]}
          greaterThan={1500}
        />
        <div className="col-xl-10 col-md-9 col-8 sideRight container-fluid justify-content-center align-content-center">
          <Container>
            <Row>
              <h2 className="mt-2">{t("VideoGames")}</h2>
              <img
                src={
                  language == "en"
                    ? "../assets/images/new.jpg"
                    : "../assets/images/videoGamesMainIamages.jpg"
                }
                className="img-fluid"
                alt="..."
              />
              <div className={windowWidth <= 890 ? "div2" : "div1"}>
                {windowWidth <= 890 ? (
                  <div className=" div2">
                    <img
                      src="../assets/images/play (4).jpg"
                      className="img-fluid mt-3"
                      alt="..."
                    />
                    <img
                      src="../assets/images/play 1.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <img
                      src="../assets/images/play 2.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <img
                      src="../assets/images/play (3).jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <img
                      src="../assets/images/category.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re1.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re2.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re3.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re4.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re5.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re6.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <img
                      src="../assets/images/brand.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re7.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re8.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re9.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re10.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re11.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re12.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                    <Row className="g-0">
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re13.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                      <Col sm={6} md={6}>
                        <img
                          src="../assets/images/re14.jpg"
                          className="img-fluid"
                          alt="..."
                        />
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div className="div1">
                    <img
                      src="../assets/images/1top.jpg"
                      className="img-fluid mt-3"
                      alt="..."
                    />
                    <div dir="ltr" className="d-flex">
                      <img
                        src="../assets/images/2play.jpg"
                        className="imgRow"
                        alt="..."
                      />
                      <img
                        src="../assets/images/3nintendo.jpg"
                        className="imgRow"
                        alt="..."
                      />
                      <img
                        src="../assets/images/4xbox.jpg"
                        className="imgRow"
                        alt="..."
                      />
                    </div>

                    <img
                      src="../assets/images/5top.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <div dir="ltr" className="d-flex">
                      <img
                        src="../assets/images/6gaming.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/7monitors.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/8pc.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                    </div>
                    <div dir="ltr" className="d-flex">
                      <img
                        src="../assets/images/9keyboard.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/10access.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/11gchairs.jpg"
                        className=" imgRow  "
                        alt="..."
                      />
                    </div>
                    <img
                      src="../assets/images/12top.jpg"
                      className="img-fluid"
                      alt="..."
                    />
                    <div dir="ltr" className="d-flex">
                      <img
                        src="../assets/images/13hp.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/14havit.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/15logitech.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/16hyper.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                    </div>
                    <div dir="ltr" className="d-flex">
                      <img
                        src="../assets/images/17palit.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/18asus.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/19lenovo.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                      <img
                        src="../assets/images/20micro.jpg"
                        className=" imgRowS  "
                        alt="..."
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <span>
                    {t("1-12 of over 70,000 results for")}{" "}
                    <span className="text-danger fw-bold">
                      {t("VideoGames")}
                    </span>
                  </span>
                </div>
              </div>

              {filteredList.map((prod) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center">
                      <div className="card" style={{ width: "21rem" }}>
                        <span className="bestSellerBadge2 card-subtitle ">
                          {t("Best Sellers")}
                        </span>
                        <img
                          src={prod.img}
                          onClick={() => {
                            gotodetails(prod._id);
                          }}
                          className="card-img-top imgCard3 container-fluid justify-content-center align-content-center mt-5 h-75"
                          style={{ width: "9rem", marginLeft: "6rem" }}
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {language == "en" ? prod.title_en : prod.title_ar}
                          </p>
                          <div className="d-inline-block">
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarFill color="#FFA41C" />
                            <BsStarHalf color="#FFA41C" />
                            <BsStar color="#FFA41C" />
                            31
                          </div>
                          <div className="d-flex">
                            {language == "en" && t("EGP")}{" "}
                            {language == "ar" && "00"}{" "}
                            <sub>
                              <h3>{prod.price.new}</h3>
                            </sub>
                            {language == "en" && "00"}
                            {language == "ar" && t("EGP")}
                            <span className="pt-3 me-2">
                              {t("List")}{" "}
                              <span className="text-muted pt-3 text-decoration-line-through me-2">
                                {" "}
                                {language == "en" && t("EGP")}{" "}
                                {language == "ar" && "00"} {prod.price.old}.
                                {language == "en" && "00"}
                                {language == "ar" && t("EGP")}
                              </span>
                            </span>
                          </div>
                          <div className="d-flex align-items-start me-3">
                            <img
                              src="../assets/images/a.PNG"
                              style={{ width: "50px" }}
                            />
                            <span>
                              {t("Get it as soon as")}
                              <span className="fw-bold">
                                {" "}
                                {t("Saturday, September 9")}
                              </span>
                            </span>
                          </div>
                          <p>{t("Fulfilled by Amazon - FREE Shipping")}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="d-grid gap-2">
                <button className="btn mt-4 mb-5 seeAll" type="button">
                  <h5>{t("See all results")}</h5>
                </button>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
