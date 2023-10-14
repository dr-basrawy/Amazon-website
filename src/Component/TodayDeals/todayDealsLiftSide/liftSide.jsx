import React, { useEffect, useState } from "react";
import "./leftSide.css";
import { FaStar, FaRegStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import axiosInstance from "../../../axiosConfig/instance";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredList } from "../../../../store/Slice/filteredList";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import "../../books/Books.css";
export default function LiftSide({
  categoryId,
  lessThan,
  between1,
  between2,
  between3,
  greaterThan,
}) {
  let Location = useLocation();
  const { t } = useTranslation();
  let dispatch = useDispatch();
  let [subCategoryName, setSubCategoryName] = useState([]);
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  useEffect(
    function () {
      if (categoryId == "65186c48dff647423cf4def7") {
        axiosInstance
          .get(`searchBySubCategory/65186c48dff647423cf4def7`)
          .then((data) => {
            console.log(data);
            setSubCategoryName(data.data);
            console.log(subCategoryName);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return () => {
        dispatch(getFilteredList([]));
      };
    },
    [categoryId]
  );
  let [checked, setChecked] = useState(false);
  function getSubCategoryData(evt, id) {
    if (checked == true) {
      if (evt.target.checked) {
        axiosInstance
          .get(`subcategory/${id}`)
          .then((data) => {
            let products = data.data.data.products;
            let newData =
              filteredList.length > 0
                ? [...filteredList, ...products]
                : [...products];

            dispatch(getFilteredList(newData));
          })
          .catch((error) => {
            console.error("Error fetching data from the API", error);
          });
      } else {
        // Handle the case when the checkbox is unchecked
        console.log("Checkbox is unchecked");
        console.log(id);
      }
    } else {
      if (evt.target.checked) {
        setChecked(true);
        axiosInstance
          .get(`subcategory/${id}`)
          .then((data) => {
            let products = data.data.data.products;
            dispatch(getFilteredList(products));
          })
          .catch((error) => {
            console.error("Error fetching data from the API", error);
          });
      }
    }
  }

  function getAllProduct() {
    axiosInstance
      .get(`category/${categoryId}`)
      .then((data) => {
        console.log(data.data.data.products);
        dispatch(getFilteredList(data.data.data.products));
      })
      .catch((err) => console.log(err));
  }
  function handleSearchByLessPrice(price) {
    axiosInstance
      .get(`searchByCategory/${categoryId}/lessThan/${price}`)
      .then((data) => {
        console.log(data.data);
        dispatch(getFilteredList(data.data));
      })
      .catch((err) => console.log(err));
  }
  function handleSearchBetweenPrices(minPrice, maxPrice) {
    axiosInstance
      .get(`searchByCategory/${categoryId}/between/${maxPrice}/${minPrice}`)
      .then((data) => {
        console.log(data.data);
        dispatch(getFilteredList(data.data));
      })
      .catch((err) => console.log(err));
  }

  function handleSearchByGreaterPrice(price) {
    axiosInstance
      .get(`searchByCategory/${categoryId}/greaterThan/${price}`)
      .then((data) => {
        console.log(data.data);
        dispatch(getFilteredList(data.data));
      })
      .catch((err) => console.log(err));
  }
  function handleSearchByDiscount(discount) {
    axiosInstance
      .get(`searchByCategory/${categoryId}/discount/${discount}`)
      .then((data) => {
        console.log(data.data);
        dispatch(getFilteredList(data.data));
      })
      .catch((err) => console.log(err));
  }
  async function handleSearchByReview(num) {
    let reviewsArr = [];
    await axiosInstance.get("review").then((data) => {
      reviewsArr = data.data.data;
    });
    let catReviews = reviewsArr.filter(
      (item) => item.product.categoryId == categoryId
    );
    // console.log(catReviews);
    let filteredList = catReviews.filter((item) => item.rating >= num);
    // console.log(filteredList);
    let productList = [];
    for (let i = 0; i < filteredList.length; i++) {
      productList.push(filteredList[i].product);
    }
    console.log(productList);
    dispatch(getFilteredList(productList));
  }
  return (
    <>
      <section className="col-xl-2 col-md-3 col-4 todayDealsLeftSide ps-xl-4 ps-1">
        {Location.pathname == "/todayDeals" && (
          <>
            <header className="d-flex flex-column pb-3">
              <a className="active" href="#">
                {" "}
                {t("All Deals")}
              </a>
              <a href="#"> {t("Available")}</a>
              <a href="#"> {t("Upcoming")}</a>
              <a href="#"> {t("WatchList")}</a>
            </header>
            <section className="leftSideSections pb-3">
              <h2>{t("Prime Programs")}</h2>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="primeCheckbox"
                  id="primeCheckbox"
                />
                <label
                  className="col-10 text-info fw-bold"
                  htmlFor="primeCheckbox"
                >
                  <FaCheck className="fa-solid fa-check text-warning" />
                  {t("Prime")}
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="PrimeEarlyAccessDealsCheckbox"
                  id="PrimeEarlyAccessDealsCheckbox"
                />
                <label
                  className="col-10 fw-bold"
                  htmlFor="PrimeEarlyAccessDealsCheckbox"
                >
                  {t("Prime Early Access deals")}
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="PrimeExclusiveDealsCheckbox"
                  id="PrimeExclusiveDealsCheckbox"
                />
                <label
                  className="col-10 fw-bold"
                  htmlFor="PrimeExclusiveDealsCheckbox"
                >
                  {t("Prime Exclusive deals")}
                </label>
              </span>
            </section>
            <section className="leftSideSections pb-3">
              <h2>{t("Categories")}</h2>
              <p id="selectAll" className="fw-bold">
                {t("Select All")}
              </p>
              {subCategoryName.map((item) => {
                return (
                  <span
                    key={item._id}
                    className="d-flex flex-row justify-content-around align-items-baseline"
                  >
                    <input
                      className="CategoryCheckBoxes col-1"
                      type="checkbox"
                      name={`${item.name}`}
                      id={`${item.name}`}
                      onChange={(evt) => {
                        getSubCategoryData(evt, item._id);
                      }}
                    />
                    <label className="col-10 fw-bold" htmlFor={`${item.name}`}>
                      {t(item.name)}
                    </label>
                  </span>
                );
              })}
            </section>
            <section className="d-flex flex-column pb-3">
              <h2>{t("Deal type")}</h2>
              <a className="active" href="#">
                {" "}
                {t("All Deals")}
              </a>
              <a href="#"> {t("Deal of the day")}</a>
              <a href="#"> {t("Lightning deals")}</a>
              <a href="#"> {t("Best deals")} </a>
            </section>
          </>
        )}
        {(Location.pathname == "/mobile" ||
          Location.pathname == "/fashion" ||
          Location.pathname == "/fashion/men") && (
          <div className="my-5">
            <section className="leftSideSections pb-3">
              <h6>{t("Eligible For free delivery")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="primeCheckbox"
                  id="primeCheckbox"
                />
                <label className="col-10" htmlFor="primeCheckbox">
                  <i className="fa-solid fa-check text-warning"></i>
                  {t(
                    "All customers get FREE Shipping on orders shipped by Amazon"
                  )}
                </label>
              </span>
            </section>
            <section className="leftSideSections pb-3">
              <h2>{t("Categories")}</h2>
              <h6>{t("Fashion")}</h6>
              <a href="#" className="text-dark">
                {" "}
                {t("Women")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {" "}
                {t("Men")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Girls")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Boys")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Baby")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Luggage & Travel Gear")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Novelty & Special Use")}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Shoe, Jewelry & Watch")}{" "}
              </a>
              <br />
              <a href="#" className="text-dark">
                {t("Accessories")}
              </a>
              <br />
              <p className="h6 fw-bold mt-4">{t("Color")}</p>
              <div>
                <div className="square black"></div>
                <div className="square gray"></div>
                <div className="square white"></div>
                <div className="square bro"></div>
                <div className="square red"></div>
                <div className="square pink"></div>
                <div className="square orange"></div>
                <div className="square yellow"></div>
                <div className="square green"></div>
                <div className="square blue"></div>
                <div className="square darkblue"></div>
                <div className="square purple"></div>
                <div className="square bage"></div>
                <div className="square bage1"></div>
                <div className="square bage2"></div>
              </div>
              <p className="h6 fw-bold mt-4">{t("Fulfilled by Amazon")}</p>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="AutomotiveCheckbox"
                  id="AutomotiveCheckbox"
                />
                <label className="col-10 " htmlFor="AutomotiveCheckbox">
                  {t("Fulfilled by Amazon")}
                </label>
              </span>

              <p className="h6 fw-bold mt-4">{t("Brand")}</p>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10 " htmlFor="BabyFashionCheckbox">
                  adidas
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10 " htmlFor="BabyProductsCheckbox">
                  Conttonil
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10 " htmlFor="BeautyCheckbox">
                  Casio
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10 " htmlFor="BooksCheckbox">
                  American Eagle
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10 " htmlFor="BoysFashionCheckbox">
                  Carina
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10 "
                  htmlFor="ComputersComponents&Accessories"
                >
                  Grinta
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="ElectronicsCheckbox"
                  id="ElectronicsCheckbox"
                />
                <label className="col-10 " htmlFor="ElectronicsCheckbox">
                  Dice
                </label>
              </span>
            </section>
            <section className="d-flex flex-column pb-3">
              <h2>{t("Condition")}</h2>
              <a href="#" className="text-dark">
                {" "}
                {t("New")}
              </a>
              <a href="#" className="text-dark">
                {t("Used")}
              </a>
            </section>
          </div>
        )}
        {(Location.pathname == "/electronics" ||
          Location.pathname == "/Monitor") && (
          <>
            <header className="d-flex flex-column mt-3 pb-3">
              <p className="h6 fw-bold">{t("Eligible For free delivery")}</p>
            </header>
            <section className="leftSideSections">
              <input
                className="col-1"
                type="checkbox"
                name="primeCheckbox"
                id="primeCheckbox"
              />
              {t("Free Shipping")}
              <label className="col-10 " htmlFor="primeCheckbox">
                <i className="fa-solid fa-check text-warning"></i>
                {t(
                  "All customers get FREE Shipping on orders shipped by Amazon"
                )}
              </label>
              <h6 className=" fw-bold mt-4">{t("Categories")}</h6>
              <h6 className="px-2 fw-bold">{t("Electronics")}</h6>
              <div className="px-3">
                <label>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Camera & Photo")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Car & Vehicle Electronics")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Computers, Components & Accessories")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("eBook Readers & Accessories")}{" "}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Headphones, Earbuds & Accessories")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Hi-Fi & Home Audio")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Home Theater, TV & Video")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Household Batteries & Chargers")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Mobile Phones & Communication")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Portable Sound & Vision")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Power Accessories")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Sat Nav, GPS, Navigation & Accessories")}
                </label>
                <label>
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Tablets")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Telephones, VoIP & Accessories")}
                </label>
                <label className="mt-2">
                  <a
                    className="link-offset-2 link-underline link-underline-opacity-0"
                    href="#"
                  ></a>
                  {t("Wearable Technology")}
                </label>
              </div>
              <h6 className="mt-4 fw-bold">{t("Fulfilled by Amazon")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="PrimeExclusiveDealsCheckbox"
                  id="PrimeExclusiveDealsCheckbox"
                />
                <label className="col-10" htmlFor="PrimeExclusiveDealsCheckbox">
                  {t("Fulfilled by Amazon")}
                </label>
              </span>
            </section>
            <section className="leftSideSections mt-3 pb-3">
              <p className="h6 fw-bold">{t("Brand")}</p>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="AutomotiveCheckbox"
                  id="AutomotiveCheckbox"
                />
                <label className="col-10" htmlFor="AutomotiveCheckbox">
                  Other
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  SAMSUNG
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10" htmlFor="BabyProductsCheckbox">
                  HP
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  Nillkin
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  Dragon
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Baseus
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  Spigen
                </label>
              </span>

              <p className="h6 fw-bold mt-3">{t("Condition")}</p>
              <span>
                <label className="col-10">{t("New")}</label>
                <label className="col-10">{t("Used")}</label>
              </span>
            </section>
            <section className="d-flex flex-column">
              <h6 className="mt-4">{t("Seller")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  Amazon.eg
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10" htmlFor="BabyProductsCheckbox">
                  دلع.موبايلك
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  المعز.ستور
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  High.Quality
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Classy Phone
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  ELMOT77DA
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="ElectronicsCheckbox"
                  id="ElectronicsCheckbox"
                />
                <label className="col-10" htmlFor="ElectronicsCheckbox">
                  bombaaaaaaaa
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="FashionCheckbox"
                  id="FashionCheckbox"
                />
                <label className="col-10" htmlFor="FashionCheckbox">
                  Mobile Shop 2023
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GardenCheckbox"
                  id="GardenCheckbox"
                />
                <label className="col-10" htmlFor="GardenCheckbox">
                  Amazon Warehouse
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GirlsFashionCheckbox"
                  id="GirlsFashionCheckbox"
                />
                <label className="col-10" htmlFor="GirlsFashionCheckbox">
                  Mobilic ٍStore
                </label>
              </span>
            </section>
            <h6 className="mt-3">{t("Availability")}</h6>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input
                className="CategoryCheckBoxes col-1"
                type="checkbox"
                name="GroceryCheckbox"
                id="GroceryCheckbox"
              />
              <label className="col-10 " htmlFor="GroceryCheckbox">
                {t("Include Out of Stock")}
              </label>
            </span>
          </>
        )}
        {Location.pathname == "/videogames" && (
          <>
            <section className="d-flex flex-column">
              <h6 className="mt-3">{t("New Arrivals")}</h6>
              <span>
                <label className="col-10">{t("Last 30 days")}</label>
                <label className="col-10">{t("Last 90 days")}</label>
              </span>
            </section>
            <header className="d-flex flex-column mt-3 pb-3">
              <p className="h6 fw-bold">{t("Eligible For free delivery")}</p>
            </header>
            <section className="leftSideSections">
              <input
                className="col-1"
                type="checkbox"
                name="primeCheckbox"
                id="primeCheckbox"
              />
              {t("Free Shipping")}
              <label className="col-10 " htmlFor="primeCheckbox">
                <i className="fa-solid fa-check text-warning"></i>
                {t(
                  "All customers get FREE Shipping on orders shipped by Amazon"
                )}
              </label>
              <h6 className=" fw-bold mt-4">{t("Categories")}</h6>
              <h6 className="px-2 fw-bold">{t("VideoGames")}</h6>
              <div className="px-3">
                <div className="mt-2">{t("Legacy Systems")}</div>
                <div className="mt-2">{t("Linux Games")}</div>
                <div className="mt-2">{t("Mac")}</div>
                <div className="mt-2">{t("Nintendo Switch")}</div>
                <div className="mt-2">{t("PC")}</div>
                <div className="mt-2">{t("PlayStation 4")}</div>
                <div className="mt-2">{t("PlayStation 5")}</div>
                <div className="mt-2">{t("Warranties")}</div>
                <div className="mt-2">{t("Xbox 360")}</div>
                <div className="mt-2">{t("Xbox One")}</div>
                <div className="mt-2">{t("NXbox Series X & S")}</div>
              </div>
              <h6 className="mt-4 fw-bold">{t("Fulfilled by Amazon")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="PrimeExclusiveDealsCheckbox"
                  id="PrimeExclusiveDealsCheckbox"
                />
                <label className="col-10" htmlFor="PrimeExclusiveDealsCheckbox">
                  {t("Fulfilled by Amazon")}
                </label>
              </span>
            </section>
            <section className="leftSideSections mt-3 pb-3">
              <p className="h6 fw-bold">{t("Brand")}</p>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="AutomotiveCheckbox"
                  id="AutomotiveCheckbox"
                />
                <label className="col-10" htmlFor="AutomotiveCheckbox">
                  Other
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  SAMSUNG
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10" htmlFor="BabyProductsCheckbox">
                  HP
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  Nillkin
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  Dragon
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Baseus
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  Spigen
                </label>
              </span>

              <p className="h6 fw-bold mt-3">{t("Condition")}</p>
              <span>
                <label className="col-10">{t("New")}</label>
                <label className="col-10">{t("Used")}</label>
              </span>
            </section>
            <section className="d-flex flex-column">
              <h6 className="mt-4">{t("Seller")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  Amazon.eg
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10" htmlFor="BabyProductsCheckbox">
                  دلع.موبايلك
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  المعز.ستور
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  High.Quality
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Classy Phone
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  ELMOT77DA
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="ElectronicsCheckbox"
                  id="ElectronicsCheckbox"
                />
                <label className="col-10" htmlFor="ElectronicsCheckbox">
                  bombaaaaaaaa
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="FashionCheckbox"
                  id="FashionCheckbox"
                />
                <label className="col-10" htmlFor="FashionCheckbox">
                  Mobile Shop 2023
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GardenCheckbox"
                  id="GardenCheckbox"
                />
                <label className="col-10" htmlFor="GardenCheckbox">
                  Amazon Warehouse
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GirlsFashionCheckbox"
                  id="GirlsFashionCheckbox"
                />
                <label className="col-10" htmlFor="GirlsFashionCheckbox">
                  Mobilic ٍStore
                </label>
              </span>
            </section>
            <h6 className="mt-3">{t("Availability")}</h6>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input
                className="CategoryCheckBoxes col-1"
                type="checkbox"
                name="GroceryCheckbox"
                id="GroceryCheckbox"
              />
              <label className="col-10 " htmlFor="GroceryCheckbox">
                {t("Include Out of Stock")}
              </label>
            </span>
          </>
        )}
        {(Location.pathname == "/HomeProducts" ||
          Location.pathname == "/HomeProducts/Decor") && (
          <>
            <header className="d-flex flex-column mt-3 pb-3">
              <p className="h6 fw-bold">{t("Eligible For free delivery")}</p>
            </header>
            <section className="leftSideSections">
              <input
                className="col-1"
                type="checkbox"
                name="primeCheckbox"
                id="primeCheckbox"
              />
              {t("Free Shipping")}
              <label className="col-10 " htmlFor="primeCheckbox">
                <i className="fa-solid fa-check text-warning"></i>
                {t(
                  "All customers get FREE Shipping on orders shipped by Amazon"
                )}
              </label>
              <h6 className=" fw-bold mt-4">{t("Categories")}</h6>
              <h6 className="px-2 fw-bold">{t("Home & Kitchen")}</h6>
              <div className="px-3">
                <div className="mt-2">{t("Artwork")}</div>
                <div className="mt-2">{t("Bath")}</div>
                <div className="mt-2">{t("Bedding & Linen")}</div>
                <div className="mt-2">{t("Furniture")}</div>
                <div className="mt-2">{t("Home Decor")}</div>
                <div className="mt-2">{t("Household Appliances")}</div>
                <div className="mt-2">
                  {t("Household Cleaning Tools & Vacuums")}
                </div>
                <div className="mt-2">{t("Kitchen")}</div>
                <div className="mt-2">{t("Laundry, Steaming & Ironing")}</div>
                <div className="mt-2">{t("Storage & Organization")}</div>
                <div className="mt-2">{t("Waste & Recycling")}</div>
              </div>
              <h6 className="mt-4 fw-bold">{t("Fulfilled by Amazon")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="col-1"
                  type="checkbox"
                  name="PrimeExclusiveDealsCheckbox"
                  id="PrimeExclusiveDealsCheckbox"
                />
                <label className="col-10" htmlFor="PrimeExclusiveDealsCheckbox">
                  {t("Fulfilled by Amazon")}
                </label>
              </span>
            </section>
            <section className="leftSideSections mt-3 pb-3">
              <p className="h6 fw-bold">{t("Brand")}</p>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="AutomotiveCheckbox"
                  id="AutomotiveCheckbox"
                />
                <label className="col-10" htmlFor="AutomotiveCheckbox">
                  Other
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  PEDRINI
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label className="col-10" htmlFor="BabyProductsCheckbox">
                  Tupperware
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  Tornado
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  Ikea
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Tefal
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  Berghoff
                </label>
              </span>

              <p className="h6 fw-bold mt-3">{t("Condition")}</p>
              <span>
                <label className="col-10">{t("New")}</label>
                <label className="col-10">{t("Used")}</label>
              </span>
            </section>
            <section className="d-flex flex-column">
              <h6 className="mt-4">{t("Seller")}</h6>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyFashionCheckbox"
                  id="BabyFashionCheckbox"
                />
                <label className="col-10" htmlFor="BabyFashionCheckbox">
                  Amazon.eg
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BabyProductsCheckbox"
                  id="BabyProductsCheckbox"
                />
                <label
                  className="col-10"
                  htmlFor="BabyProductsCheckbox"
                ></label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BeautyCheckbox"
                  id="BeautyCheckbox"
                />
                <label className="col-10" htmlFor="BeautyCheckbox">
                  Spaceshoop_October
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BooksCheckbox"
                  id="BooksCheckbox"
                />
                <label className="col-10" htmlFor="BooksCheckbox">
                  ⭐⭐HOMES-MART⭐⭐
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="BoysFashionCheckbox"
                  id="BoysFashionCheckbox"
                />
                <label className="col-10" htmlFor="BoysFashionCheckbox">
                  Donald-Duck
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="Computers,Components&Accessories"
                  id="ComputersComponents&Accessories"
                />
                <label
                  className="col-10"
                  htmlFor="ComputersComponents&Accessories"
                >
                  ELMOT77DA
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="ElectronicsCheckbox"
                  id="ElectronicsCheckbox"
                />
                <label className="col-10" htmlFor="ElectronicsCheckbox">
                  A.H.Q Group
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="FashionCheckbox"
                  id="FashionCheckbox"
                />
                <label className="col-10" htmlFor="FashionCheckbox">
                  Mark_Spain
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GardenCheckbox"
                  id="GardenCheckbox"
                />
                <label className="col-10" htmlFor="GardenCheckbox">
                  malik0000
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GirlsFashionCheckbox"
                  id="GirlsFashionCheckbox"
                />
                <label className="col-10" htmlFor="GirlsFashionCheckbox">
                  Kitchen 360
                </label>
              </span>
              <span className="d-flex flex-row justify-content-around align-items-baseline">
                <input
                  className="CategoryCheckBoxes col-1"
                  type="checkbox"
                  name="GirlsFashionCheckbox"
                  id="GirlsFashionCheckbox"
                />
                <label className="col-10" htmlFor="GirlsFashionCheckbox">
                  Portal99
                </label>
              </span>
            </section>
            <h6 className="mt-3">{t("Availability")}</h6>
            <span className="d-flex flex-row justify-content-around align-items-baseline">
              <input
                className="CategoryCheckBoxes col-1"
                type="checkbox"
                name="GroceryCheckbox"
                id="GroceryCheckbox"
              />
              <label className="col-10 " htmlFor="GroceryCheckbox">
                {t("Include Out of Stock")}
              </label>
            </span>
          </>
        )}
        {Location.pathname == "/books" && (
          <>
            <h6 style={{ fontWeight: "100" }}>{t("Popular in Books")}</h6>
            <div className="px-3 d-flex flex-column mb-3">
              <Link className="a-book"> {t("Summer Reading")}</Link>
              <Link className="a-book"> {t("Read with Pride")}</Link>
              <Link className="a-book"> {t("Raising Asian Voices")}</Link>
              <Link className="a-book"> {t("Books by Black Authors")}</Link>
              <Link className="a-book">
                {" "}
                {t("Hispanic and Latino Stories")}
              </Link>
              <Link className="a-book"> {t("Books in Spanish")}</Link>
              <Link className="a-book"> {t("Celebrity Picks")}</Link>
              <Link className="a-book"> {t("Children's Books")}</Link>
              <Link className="a-book"> {t("Deals in Books")}</Link>
              <Link className="a-book"> {t("Best Books of 2023 So Far")}</Link>
              <Link className="a-book"> {t("Best Books of the Month")}</Link>
            </div>
            <h6 style={{ fontWeight: "100" }}>{t("More in Books")}</h6>
            <div className="px-3 d-flex flex-column mb-3">
              <Link className="a-book"> {t("Book Merch Shop")}</Link>
              <Link className="a-book">
                {" "}
                {t("100 Books to Read in a Lifetime")}
              </Link>
              <Link className="a-book"> {t("Amazon Book Review")}</Link>
              <Link className="a-book"> {t("Amazon Books on Facebook")}</Link>
              <Link className="a-book"> {t("Amazon Books on Twitter")}</Link>
              <Link className="a-book"> {t("Amazon First Reads")}</Link>
              <Link className="a-book"> {t("Book Club Picks")}</Link>
              <Link className="a-book"> {t("From Page to Screen")}</Link>
              <Link className="a-book"> {t("Start a New Series")}</Link>
              <Link className="a-book"> {t("Your Company Bookshelf")}</Link>
            </div>
            <h6 style={{ fontWeight: "100" }}> {t("Textbooks")}</h6>
            <div className="px-3 d-flex flex-column mb-3">
              <Link className="a-book">{t("Textbooks Store")}</Link>
              <Link className="a-book"> {t("Textbook Rentals")}</Link>
              <Link className="a-book"> {t("Kindle eTextbooks")}</Link>
            </div>
            <h6 style={{ fontWeight: "100" }}> {t("Kindle & Audible")}</h6>
            <div className="px-3 d-flex flex-column mb-3">
              <Link className="a-book">{t("Audible Audiobooks")}</Link>
              <Link className="a-book"> {t("Kindle eBooks")}</Link>
              <Link className="a-book">{t("Kindle Deals")}</Link>
              <Link className="a-book"> {t("Kindle Unlimited")}</Link>
              <Link className="a-book"> {t("Kindle Vella")}</Link>
              <Link className="a-book">{t("Prime Reading")}</Link>
            </div>
            <h6 style={{ fontWeight: "100" }}> {t("New Releases")}</h6>
            <div className=" d-flex flex-column mb-3">
              <Link style={{ fontSize: "15px" }} className="a-book">
                {t("Last 30 days")}
              </Link>
              <Link style={{ fontSize: "15px" }} className="a-book">
                {t("Last 90 days")}
              </Link>
              <Link style={{ fontSize: "15px" }} className="a-book">
                {t("Coming Soon")}
              </Link>
            </div>

            <h6 style={{ fontWeight: "100" }}> {t("Department")}</h6>
            <h6 className="px-3 " style={{ fontWeight: "100" }}>
              {" "}
              {t("Books")}
            </h6>
            <div className="px-4 d-flex flex-column mb-3">
              <Link className="a-book"> {t("Arts & Photography")}</Link>
              <Link className="a-book">{t("Biographies & Memoirs")}</Link>
              <Link className="a-book">{t("Business & Money")}</Link>
              <Link className="a-book">{t("Calendars")}</Link>
              <Link className="a-book">{t("Children's Books")}</Link>
              <Link className="a-book">{t("Christian Books & Bibles")}</Link>
              <Link className="a-book">{t("Comics & Graphic Novels")}</Link>
              <Link className="a-book">{t("Computers & Technology")}</Link>
              <Link className="a-book"> {t("Cookbooks, Food & Wine")}</Link>
              <Link className="a-book">{t("Crafts, Hobbies & Home")}</Link>
              <Link className="a-book">{t("Education & Teaching")}</Link>
              <Link className="a-book">
                {t("Engineering & Transportation")}
              </Link>
              <Link className="a-book">{t("Health, Fitness & Dieting")}</Link>
              <Link className="a-book">{t("History")}</Link>
              <Link className="a-book">{t("Humor & Entertainment")}</Link>
              <Link className="a-book">{t("Law")}</Link>
              <Link className="a-book">{t("Literature & Fiction")}</Link>
              <Link className="a-book">{t("Medical Books")}</Link>
              <Link className="a-book">
                {t("Mystery, Thriller & Suspense")}
              </Link>
              <Link className="a-book">{t("Parenting & Relationships")}</Link>
              <Link className="a-book">{t("Politics & Social Sciences")}</Link>
              <Link className="a-book">{t("Reference")}</Link>
              <Link className="a-book">{t("Religion & Spirituality")}</Link>
              <Link className="a-book">{t("Romance")}</Link>
              <Link className="a-book">{t("Science & Math")}</Link>
              <Link className="a-book">{t("Science Fiction & Fantasy")}</Link>
              <Link className="a-book">{t("Self-Help")}</Link>
              <Link className="a-book">{t("Sports & Outdoors")}</Link>
              <Link className="a-book">{t("Teen & Young Adult")}</Link>
              <Link className="a-book">{t("Test Preparation")}</Link>
              <Link className="a-book">{t("Travel")}</Link>
            </div>
            <h6 style={{ fontWeight: "100" }}>{t("Format")}</h6>
            <div className=" d-flex flex-column mb-3">
              <Link className="a-book">{t("Paperback")}</Link>
              <Link className="a-book">{t("Hardcover")}</Link>
              <Link className="a-book">{t("Kindle Edition")}</Link>
              <Link className="a-book">{t("Large Print")}</Link>
              <Link className="a-book">{t("Audible Audiobook")}</Link>
              <Link className="a-book">{t("Printed Access Code")}</Link>
              <Link className="a-book">{t("Loose Leaf")}</Link>
              <Link className="a-book">{t("Audio CD")}</Link>
              <Link className="a-book">{t("Board Book")}</Link>
              <Link className="a-book">{t("Spiral-bound")}</Link>
            </div>

            <h6 style={{ fontWeight: "100" }}>{t("Kindle Unlimited")}</h6>
            <div className=" d-flex flex-column mb-3">
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" />{" "}
                {t("Paperback")}
              </a>
            </div>
            <h6 style={{ fontWeight: "100" }}>{t("Author")}</h6>
            <div className=" d-flex flex-column mb-3">
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Caroline
                Peckham
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Rebecca Yarros
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Marina J.
                Lostetter
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Gwendolyn Kiste
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Stephen King
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Keila Shaheen
              </a>
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" /> Ann Patchett
              </a>
            </div>
            <h6 style={{ fontWeight: "100" }}>{t("Promotion")}</h6>
            <div className=" d-flex flex-column mb-3">
              <a className="a-book">
                {" "}
                <FormCheckInput type="checkbox" name="" id="" />{" "}
                {t("Bargain Books")}
              </a>
            </div>
          </>
        )}
        <section className="d-flex flex-column pb-3">
          <h2>{t("Price")}</h2>
          <span className="searchByPrice" onClick={getAllProduct}>
            {" "}
            {t("All")}
          </span>
          <span
            onClick={() => handleSearchByLessPrice(lessThan)}
            className="searchByPrice"
          >
            {" "}
            {t("Under")} EGP{lessThan}
          </span>
          <span
            onClick={() => handleSearchBetweenPrices(between1[0], between1[1])}
            className="searchByPrice"
          >
            {" "}
            EGP{between1[0]} {t("to")} EGP{between1[1]}
          </span>
          <span
            onClick={() => handleSearchBetweenPrices(between3[0], between2[1])}
            className="searchByPrice"
          >
            {" "}
            EGP{between2[0]} {t("to")} EGP{between2[1]}{" "}
          </span>
          <span
            onClick={() => handleSearchBetweenPrices(between3[0], between3[1])}
            className="searchByPrice"
          >
            {" "}
            EGP{between3[0]} {t("to")} EGP{between3[1]}{" "}
          </span>
          <span
            onClick={() => handleSearchByGreaterPrice(greaterThan)}
            className="searchByPrice"
          >
            {" "}
            EGP{greaterThan} & {t("above")}{" "}
          </span>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>{t("Discount")}</h2>
          <span
            className="active searchByPrice"
            onClick={() => handleSearchByDiscount(1)}
          >
            {" "}
            {t("All Deals")}
          </span>
          <span
            className="searchByPrice"
            onClick={() => handleSearchByDiscount(10)}
          >
            {" "}
            {t("10% off or more")}
          </span>
          <span
            className="searchByPrice"
            onClick={() => handleSearchByDiscount(20)}
          >
            {" "}
            {t("20% off or more")}
          </span>
          <span
            className="searchByPrice"
            onClick={() => handleSearchByDiscount(30)}
          >
            {" "}
            {t("30% off or more")}
          </span>
          <span
            className="searchByPrice"
            onClick={() => handleSearchByDiscount(40)}
          >
            {" "}
            {t("40% off or more")}
          </span>
          <span
            className="searchByPrice"
            onClick={() => handleSearchByDiscount(50)}
          >
            {" "}
            {t("50% off or more")}
          </span>
        </section>
        <section className="d-flex flex-column pb-3">
          <h2>{t("Average customer review")}</h2>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar />
            <span
              className="averageReview"
              onClick={() => handleSearchByReview(4)}
            >
              {t("& up")}
            </span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar />
            <span
              className="averageReview"
              onClick={() => handleSearchByReview(3)}
            >
              {t("& up")}
            </span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <span
              className="averageReview"
              onClick={() => handleSearchByReview(2)}
            >
              {t("& up")}
            </span>
          </span>
          <span>
            <FaStar className="checkedStar" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <span
              className="averageReview"
              onClick={() => handleSearchByReview(1)}
            >
              {t("& up")}
            </span>
          </span>
        </section>
      </section>
    </>
  );
}
LiftSide.propTypes = {
  categoryId: PropTypes.string,
  lessThan: PropTypes.number,
  between1: PropTypes.array,
  between2: PropTypes.array,
  between3: PropTypes.array,
  greaterThan: PropTypes.number,
};
