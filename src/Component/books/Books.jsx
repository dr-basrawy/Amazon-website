/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import Rate from "../rate/rate";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useTranslation } from "react-i18next";

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Books from './Books';
// import Books from './Books';
import { useEffect } from "react";
import Sliders from "./sliders";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchcategory,
  fetchcategorypage,
} from "../../../store/Slice/categorySlice";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addProductInCart, fetchCart } from "../../../store/Slice/cartSlice";
import {
  addProductInfavorite,
  fetchfavorite,
} from "../../../store/Slice/favorite";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
import { getFilteredList } from "../../../store/Slice/filteredList";

export default function Books() {
  const { t } = useTranslation();

  const [page, setPage] = useState(1);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [change, setchange] = useState(0);
  let [pages, setpages] = useState();
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  console.log(filteredList)
  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      dispatch(fetchcategorypage("books", page)).then((e) => {
        setpages(e.payload);
      });
      dispatch(fetchcategory({ name: "books", page }));
      dispatch(fetchCart());
      dispatch(fetchfavorite());
    }
    return () => {
      isMounted = false;
      dispatch(getFilteredList([]));
    };
  }, [dispatch, change, page]);

 
  console.log(pages);
  var listbook = useSelector((state) => {
    return state.category.data;
  });
  var cart = useSelector((state) => {
    return state.cart.data;
  });
  var fav = useSelector((state) => {
    return state.favorite.data.productId;
  });

  function isInCart(bookId) {
    try {
      for (const item of cart) {
        if (bookId == item.product._id) {
          return true;
        }
      }
    } catch (err) {
      // console.log(err);
    }
  }
  function isinfav(bookId) {
    if (fav) {
      for (const item of fav) {
        if (bookId == item._id) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  function viewcart() {
    navigate("/cart");
  }
  const [screenWidth] = useState(window.innerWidth);

  var outhors = [
    "1",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  async function addtocart(productId) {
    await dispatch(
      addProductInCart({ items: [{ product: productId, quantity: 1 }] })
    );
    setchange(productId);
  }
  async function addtofav(productId) {
    await dispatch(addProductInfavorite(productId));
    setchange(productId + " ");
  }

  function gotodetails(bookId) {
    navigate("/productdetails", { state: { productId: bookId } });
  }

  return (
    <>
      <p style={{ fontSize: "40px" }} className="text-center ">
        {t("Book at amazon")}
      </p>
      <div className="d-flex ">
      <LiftSide categoryId={"6519d2f8a19024252354539f"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>

        <div className=" d-flex flex-column col-respons">
          <img style={{ width: "100%" }} src="../assets/books/1.jpg" alt="" />
          <div style={{ height: "20px" }}></div>
          <img style={{ width: "100%" }} src="../assets/books/2.jpg" alt="" />
          <div style={{ height: "20px" }}></div>
          <div className="d-flex flex-nowrap">
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/31.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/32.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/33.jpg"
              alt=""
            />
            <img
              className="p-2"
              style={{ width: "25%" }}
              src="../assets/books/34.jpg"
              alt=""
            />
          </div>

          <div className="w-100">
            <h2>{t("Best Sellers")}</h2>
            <div className=" d-flex flex-wrap p-2 ">
              {!filteredList.length>0 && listbook.map((book) => {
                return (
                  <>
                    <div className="col-lg-3 col-6 p-2">
                      <div className="bg-light w-100 p-2 text-center ">
                        <img className="w-50 " src={book.img} alt="" />
                        <p style={{ fontSize: "1vw", height: "50px" }}>
                          {book.title_en}
                        </p>
                        <div className="d-flex w-100 justify-content-center">
                          <Rate rate={book.avg_rating}></Rate>
                          <p className="p-0 m-0 px-2">( {book.num_rating} )</p>
                        </div>
                        <p style={{ fontSize: "1vw" }}>{book.price.new} $</p>
                        <p style={{ fontSize: "1vw", color: "red" }}>
                          {book.quantity} {t("in stock")}
                        </p>

                        <div className="d-felx  ">
                          <button
                            onClick={() => {
                              gotodetails(book._id);
                            }}
                            className="btn btn-secondary m-2"
                          >
                            {t("details")}
                          </button>
                          {!isInCart(book._id) ? (
                            <button
                              disabled={book.quantity < 1}
                              onClick={() => {
                                addtocart(book._id);
                              }}
                              className="btn btn-warning"
                            >
                              {t("add to cart")}
                            </button>
                          ) : (
                            <button
                              onClick={viewcart}
                              className="btn btn-warning"
                            >
                              view cart
                            </button>
                          )}
                          {!isinfav(book._id) ? (
                            <MdOutlineFavoriteBorder
                              onClick={() => {
                                addtofav(book._id);
                              }}
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            ></MdOutlineFavoriteBorder>
                          ) : (
                            <MdFavorite></MdFavorite>
                          )}
                          {/* <MdOutlineFavoriteBorder onClick={addtofav(book._id)} style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {filteredList.length>0 && filteredList.map((book) => {
                return (
                  <>
                    <div className="col-lg-3 col-6 p-2">
                      <div className="bg-light w-100 p-2 text-center ">
                        <img className="w-50 " src={book.img} alt="" />
                        <p style={{ fontSize: "1vw", height: "50px" }}>
                          {book.title_en}
                        </p>
                        <div className="d-flex w-100 justify-content-center">
                          <Rate rate={book.avg_rating}></Rate>
                          <p className="p-0 m-0 px-2">( {book.num_rating} )</p>
                        </div>
                        <p style={{ fontSize: "1vw" }}>{book.price.new} $</p>
                        <p style={{ fontSize: "1vw", color: "red" }}>
                          {book.quantity} {t("in stock")}
                        </p>

                        <div className="d-felx  ">
                          <button
                            onClick={() => {
                              gotodetails(book._id);
                            }}
                            className="btn btn-secondary m-2"
                          >
                            {t("details")}
                          </button>
                          {!isInCart(book._id) ? (
                            <button
                              disabled={book.quantity < 1}
                              onClick={() => {
                                addtocart(book._id);
                              }}
                              className="btn btn-warning"
                            >
                              {t("add to cart")}
                            </button>
                          ) : (
                            <button
                              onClick={viewcart}
                              className="btn btn-warning"
                            >
                              view cart
                            </button>
                          )}
                          {!isinfav(book._id) ? (
                            <MdOutlineFavoriteBorder
                              onClick={() => {
                                addtofav(book._id);
                              }}
                              style={{ fontSize: "25px", marginLeft: "10px" }}
                            ></MdOutlineFavoriteBorder>
                          ) : (
                            <MdFavorite></MdFavorite>
                          )}
                          {/* <MdOutlineFavoriteBorder onClick={addtofav(book._id)} style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <PaginationControl
            page={page}
            between={2}
            total={pages}
            limit={1}
            changePage={(page) => {
              setPage(page);
              setchange(page);
            }}
          />
          <div>
            <h2>Featured Page to Screen Adaptations</h2>
            <Sliders
              numberOfItems={
                screenWidth > 1200
                  ? 6
                  : screenWidth < 1200 && screenWidth > 768
                  ? 3
                  : screenWidth < 768 && screenWidth > 500
                  ? 2
                  : 1
              }
            />

            <p style={{ fontSize: "40px" }} className="text-center ">
              {t("Popular authors & series")}
            </p>

            <div className=" d-flex flex-wrap p-2 ">
              {outhors.map((outhor) => {
                return (
                  <>
                    <div className=" p-2" style={{ width: "20%" }}>
                      <div className="bg-light w-100 p-2 text-center ">
                        <img
                          className="w-50 "
                          src={`../assets/books/authors/${outhor}.jpg`}
                          alt=""
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <h2>{t("Books at Amazon")}</h2>
            <p style={{ fontSize: "14px" }}>
             {t("books at amazon Paragraph")}
            </p>
            <p style={{ fontSize: "14px" }}>
              {t("books at amazon 2nd Paragraph")}
            </p>
          </div>
        </div>
      </div>
      <p className="p-3" style={{ fontSize: "12px" }}>
        {t("books at amazon 3rd Paragraph")}
      </p>
    </>
  );
}
