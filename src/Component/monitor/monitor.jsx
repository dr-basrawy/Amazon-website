/* eslint-disable no-constant-condition */
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './minetor.css'
import React, { useEffect, useState } from "react"
import LiftSide from '../TodayDeals/todayDealsLiftSide/liftSide';
import '../TodayDeals/todayDealsLiftSide/leftSide.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategory, fetchcategorypage } from '../../../store/Slice/categorySlice';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { addProductInCart, fetchCart } from "../../../store/Slice/cartSlice";
// import "../TodayDeals/todayDealsLiftSide/leftSide.css";

import { useTranslation } from "react-i18next";
import { addProductInfavorite, fetchfavorite } from '../../../store/Slice/favorite';

export default function Monitor() {
  let language = useSelector((state) => state.language.language)
  const { t } = useTranslation();
  const [page, setPage] = useState(1)
  let [change, setchange] = useState(0);
  let [pages, setpages] = useState();
  let navigate = useNavigate()
  let dispatch = useDispatch()
  
  let data = useSelector((state) => {
    return state.category.data;
  });
  useEffect(() => {
    dispatch(fetchcategorypage("Monitors", page)).then((e) => {
      setpages(e.payload);
    });
    dispatch(fetchcategory({ name: "Monitors", page }));
    dispatch(fetchCart());
    dispatch(fetchfavorite());
  }, [dispatch, change, page]);
  let filteredList = useSelector((state) => state.filteredList.filteredList);
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
  function isinfav(prdId) {
    if (fav) {
      for (const item of fav) {
        if (prdId == item._id) {
          return true;
        }
      }
    } else {
      return false;
    }
  }
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
  function gotodetails(prdId) {
    navigate("/productdetails", { state: { productId: prdId } });
  }
  async function viewcart() {
    navigate("/cart")
  }
  return (
    <>
      <div className=" container-fluid ">
        <div className="row">
          <LiftSide
            categoryId={"651af954eb03aa680952f49d"}
            lessThan={100}
            between1={[100, 200]}
            between2={[200, 300]}
            between3={[300, 400]}
            greaterThan={400}
            className="s"
          />
          <div className="col-xl-10 col-md-9 col-12">
            <div className="row d-flex justify-content-center">
              <h1>{t("Results")}</h1>{" "}
              {!filteredList.length>0 &&
               data.map((prd) => {
                return (
                  <Card
                    className="col-xl-3 col-lg-4 col-md-8 col-10  mx-2 my-3"
                    key={prd._id}
                  >
                    <Card.Img variant="top" className="img" src={prd.img} />
                    <Card.Body>
                      <Card.Title className="title-wrapper">
                        {language=="en"? prd.title_en:prd.title_ar}
                      </Card.Title>
                      <Card.Text className="m-0">
                        <span className="fs-4">{t("Quantity")}</span>{" "}
                        <span> {prd.quantity}</span>
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4"> {t("old price")}</span>{" "}
                        {prd.price["old"]}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4"> {t("new price")}</span>{" "}
                        {prd.price["new"]}
                      </Card.Text>
                    </Card.Body>
                    <div className="d-felx  ">
                      <button
                        onClick={() => {
                          gotodetails(prd._id);
                        }}
                        className="btn btn-secondary m-2"
                      >
                        {t("details")}
                      </button>
                      {!isInCart(prd._id) ? (
                        <button
                          disabled={prd.quantity < 1}
                          onClick={() => {
                            addtocart(prd._id);
                          }}
                          className="btn btn-warning"
                        >
                          {t("add to cart")}
                        </button>
                      ) : (
                        <button onClick={viewcart} className="btn btn-warning">
                          {t("view cart")}
                        </button>
                      )}
                      {true ? (
                        <MdOutlineFavoriteBorder
                          style={{ fontSize: "25px", marginLeft: "10px" }}
                        ></MdOutlineFavoriteBorder>
                      ) : (
                        <MdFavorite></MdFavorite>
                      )}
                    </div>
                  </Card>
                );
              })}
              {filteredList.length>0 &&
               filteredList.map((prd) => {
                return (
                  <Card
                    className="col-xl-3 col-lg-4 col-md-5  col-5 mx-2 my-3"
                    key={prd._id}
                  >
                    <Card.Img variant="top" className="img" src={prd.img} />
                    <Card.Body>
                      <Card.Title className="title-wrapper">
                        {language == "en" ? prd.title_en : prd.title_ar}
                      </Card.Title>
                      <Card.Text className="m-0">
                        <span className="fs-4">{t("Quantity")}</span>{" "}
                        <span> {prd.quantity}</span>
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4"> {t("old price")}</span>{" "}
                        {prd.price["old"]}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4"> {t("new price")}</span>{" "}
                        {prd.price["new"]}
                      </Card.Text>
                    </Card.Body>
                    <div className="d-felx  ">
                      <button
                        onClick={() => {
                          gotodetails(prd._id);
                        }}
                        className="btn btn-secondary m-2"
                      >
                        details
                      </button>
                      {!isInCart(prd._id) ? (
                        <button
                          disabled={prd.quantity < 1}
                          onClick={() => {
                            addtocart(prd._id);
                          }}
                          className="btn btn-warning"
                        >
                          add to cart
                        </button>
                      ) : (
                        <button
                          onClick={viewcart}
                          className="btn btn-warning"
                        >
                          view cart
                        </button>
                      )}
                      {!isinfav(prd._id) ? (
                        <MdOutlineFavoriteBorder
                          onClick={() => {
                            addtofav(prd._id);
                          }}
                          style={{ fontSize: "25px", marginLeft: "10px" }}
                        ></MdOutlineFavoriteBorder>
                      ) : (
                        <MdFavorite></MdFavorite>
                      )}
                      {/* <MdOutlineFavoriteBorder onClick={addtofav(prd._id)} style={{ fontSize: "25px", marginLeft: "10px" }}></MdOutlineFavoriteBorder> */}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div className="paginated">

        <PaginationControl 
          page={page}
          between={2}
          total={3}
          limit={1}
          changePage={(page) => {
            setPage(page);
            setchange(page);
          }}
        />
        </div>
      </div>
    </>
  );
}

/* <div className="d-inline-block">
<BsStarFill color='#FFA41C' />
<BsStarFill color='#FFA41C' />
<BsStarFill color='#FFA41C' />
<BsStarHalf color='#FFA41C' />
<BsStar color='#FFA41C' />
31
</div>   */
{/* <div className=" container-fluid ">
        <div className="row">
          <LiftSide
            categoryId={"651af954eb03aa680952f49d"}
            lessThan={100}
            between1={[100, 200]}
            between2={[200, 300]}
            between3={[300, 400]}
            greaterThan={400}
            className="s"
          />
          <div className="col-xl-10 col-md-9 col-12">
            <div className="row d-flex justify-content-center">
              <h1>{t("result")}</h1>{" "}
              {data.map((prd) => {
                return (
                  <Card
                    className="col-xl-2 col-lg-3 col-md-5  col-5 mx-2 my-3"
                    key={prd.id}
                  >
                    <Card.Img
                      variant="top"
                      className="img"
                      src={prd.imageURL}
                    /> */}
{/* <Card.Body>
                      <Card.Title className="title-wrapper">
                        {prd.title}
                      </Card.Title>
                      <Card.Text className="m-0"> */}
{/* <span className='fs-4' >{prd.price}</span> */ }
{/* {prd.discount == null ? (
                          <>
                            <span className="fs-4">{prd.price}</span>
                          </>
                        ) : (
                          <>
                            <span style={{ textDecoration: "line-through" }}>
                              ({prd.price})
                            </span>
                          </>
                        )}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4">
                          {prd.discount == null ? (
                            <></>
                          ) : (
                            <>discount : {prd.discount}</>
                          )}
                        </span>
                      </Card.Text>
                      <Card.Text className="m-0">
                        <span className="fs-4"></span> {prd.rate}{" "}
                        <div className="d-inline-block">
                          <BsStarFill color="#FFA41C" />
                          <BsStarFill color="#FFA41C" />
                          <BsStarFill color="#FFA41C" />
                          <BsStarHalf color="#FFA41C" />
                          <BsStar color="#FFA41C" />
                        </div>
                        <span style={{ color: "#007185" }}>
                          ({prd.totalRates})
                        </span>
                      </Card.Text> */}

{/* <Card.Text>
                                                <span className='fs-4' >totalRates</span>                {prd.totalRates}
                                            </Card.Text> */}
{/* <Card.Text className="m-0">
                        <span className="fs-4">deliveryDate</span>{" "}
                        {prd.deliveryDate}
                      </Card.Text> */}
{/* <Button variant="primary">Go somewhere</Button> */ }
{/* </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}