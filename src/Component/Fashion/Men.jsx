import React, { useState } from "react";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
// import { FaStar, FaRegStar } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Fashion.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosConfig/instance";
import { useEffect } from "react";
import { fetchcategory } from "../../../store/Slice/categorySlice";
import { useTranslation } from "react-i18next";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
import { getFilteredList } from "../../../store/Slice/filteredList";
export default function Men() {
  const { t } = useTranslation();
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  let language = useSelector((state) => state.language.language);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let isMounted = true;
    axiosInstance
      .get("category/651ed4af1f7aed6d784da27d")
      .then((data) => {
        if (isMounted) {
          const products = data.data.data.products;
          dispatch(getFilteredList(products));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(fetchcategory("Men Fashion"));
    return () => {
      isMounted = false;
      dispatch(getFilteredList([]));
    };
  }, []);
  function gotodetails(prodId) {
    console.log(prodId);
    navigate("/productdetails", { state: { productId: prodId } });
  }

  return (
    <>
      <div className="row container-fluid m-0 justify-content-center">
        {/* left Side  */}
        <LiftSide
          categoryId={"651ed4af1f7aed6d784da27d"}
          lessThan={99}
          between1={[100, 199]}
          between2={[200, 299]}
          between3={[300, 399]}
          greaterThan={400}
        />
        {/* Right Side  */}
        <div className="col-10  sideRight justify-content-center align-content-center mt-4 ">
          <h2 className="fw-bold fs-2">{t("Men Fashion")}</h2>
          <div
            className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small mb-2"
            style={{ width: "100%", height: "80px" }}
          >
            <p className="h6 fw-bold ">
              {t(
                "Enjoy FREE delivery, exclusive deals, award-winning TV and more Join today"
              )}
            </p>
            <button
              type="button"
              className="btn btn-warning btn-sm  ms-5 bootn"
            >
              {t("Try Prime FREE htmlFor 30 days")}
            </button>
          </div>
          <img
            src={
              language == "en"
                ? "../assets/images/o1.jpeg"
                : "../assets/images/fashionArabicImag.jpg"
            }
            className="img-fluid  mt-2"
            width="100%"
          />

          <img
            src="../assets/images/men1.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men2.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men3.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men4.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men5.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men6.PNG"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men7.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />
          <img
            src="../assets/images/men8.jpg"
            className="img-fluid  mt-2"
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <Container>
            <Row>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr1.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr2.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr3.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
              <Col>
                {" "}
                <img
                  src="../assets/images/pr4.jpg"
                  className="img-fluid "
                  width="100%"
                  style={{ marginBottom: "20px" }}
                />
              </Col>
            </Row>
          </Container>

          <h3 className="text-center m-3">Shop by brand</h3>
          <img
            src="../assets/images/many.PNG"
            className="img-fluid "
            width="100%"
            style={{ marginBottom: "20px" }}
          />

          <div className="card mt-2">
            <div className="card-body">
              <p className="fw-normal">
                1-12 of over 30,000 results for{" "}
                <span className="text-warning fw-bold">Men</span>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {filteredList.map((moda) => {
                return (
                  <>
                    <div
                      key={moda._id}
                      className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center"
                    >
                      <div
                        className="card border-0"
                        style={{ width: "20rem", height: "25rem" }}
                      >
                        <img
                          src={moda.img}
                          className="card-img-top  h-75"
                          onClick={() => {
                            gotodetails(moda._id);
                          }}
                        />
                        <div className="d-inline-block">
                          <p className="card-text">
                            {language == "en" ? moda.title_en : moda.title_ar}
                          </p>
                          <BsStarFill color="#FFA41C" />
                          <BsStarFill color="#FFA41C" />
                          <BsStarFill color="#FFA41C" />
                          <BsStarFill color="#FFA41C" />
                          <BsStar color="#FFA41C" />
                        </div>
                        <div className="d-flex">
                          {language == "en" ? t("EGP") : "00"}{" "}
                          <sub>
                            <h3>{moda.price.new}</h3>
                          </sub>
                          {language == "en" ? "00" : t("EGP")}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn mt-4 mb-5"
              style={{ backgroundColor: "#ebeaea", color: "rgb(62, 110, 130)" }}
              type="button"
            >
              <h5>{t("See all results")}</h5>
            </button>
          </div>

          {/* ending counteiner  */}
        </div>
      </div>
    </>
  );
}
