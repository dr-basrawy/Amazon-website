import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Rate from "./../rate/rate";
import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdOutlinePlace,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../store/Slice/productsSlice";
import { fetchuser } from "../../../store/Slice/userSlice";
import { addProductInCart, fetchCart } from "../../../store/Slice/cartSlice";
import {
  addProductInfavorite,
  fetchfavorite,
} from "../../../store/Slice/favorite";
import { addreviwes, fetchreviwes } from "../../../store/Slice/reviwes";
import "./productdetails.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { fetchOrder } from "../../../store/Slice/orderSlice";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  let language = useSelector((state) => state.language.language);
  let location = useLocation();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let user = useSelector((state) => {
    return state.user.data;
  });

  // console.log(user);
  var product = useSelector((state) => {
    return state.products.data;
  });
  var cart = useSelector((state) => {
    return state.cart.data;
  });
  var fav = useSelector((state) => {
    return state.favorite.data.productId;
  });

  var reviws = useSelector((state) => {
    return state.reviwes.data;
  });

  const [formData, setFormData] = useState({
    rating: 1,
    comment: "",
  });
  const handleValidation = (name, value) => {
    setFormData({ ...formData, [name]: value });
    console.log("here", formData);
  };
  let [change, setchange] = useState(0);
  let [quantity, setquantity] = useState(1);
  const [show, setShow] = useState(false);

  const body = {
    rating: formData.rating,
    comment: formData.comment,
    // userId: JSON.parse(localStorage.getItem('userId')),
    // productId: product._id
  };
  async function Addreviw(e) {
    await dispatch(addreviwes({ body, prdId: product._id }));
    setShow(false);
    setchange(e);
  }
  useEffect(() => {
    dispatch(fetchuser());
    dispatch(fetchCart());
    dispatch(fetchfavorite());
    dispatch(fetchProductById(location.state.productId));
    dispatch(fetchreviwes(location.state.productId));
    dispatch(fetchOrder());
  }, [dispatch, change, quantity]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function prod(x, y) {
    try {
      if (x && y) {
        return product[x][y];
      } else if (x) {
        return product[x];
      }
    } catch {
      console.log("err");
    }
  }

  function isInCart(bookId) {
    for (const item of cart) {
      if (bookId == item.product._id) {
        return true;
      }
    }
  }
  function viewcart() {
    navigate("/cart");
  }
  async function setq(e) {
    if (e.target.value > prod("quantity")) {
      setquantity(prod("quantity"));
    } else if (e.target.value < 1) {
      setquantity(1);
    } else {
      setquantity(e.target.value);
    }
  }

  async function addtocart(productId) {
    await dispatch(
      addProductInCart({ items: [{ product: productId, quantity: quantity }] })
    );
    setchange(productId);
  }
  var orders = useSelector((state) => {
    return state.order.data;
  });
  console.log("orders", orders);
  function isInOrder(productId) {
    console.log(productId);

    for (const x of orders) {
      for (const y of x.products) {
        if (y.product._id == productId) {
          console.log("--------");
          return true;
        }
      }
    }
  }

  function isinfav(bookId) {
    for (const item of fav) {
      console.log(item._id);
      if (bookId == item._id) {
        return true;
      }
    }
  }
  async function addtofav(productId) {
    console.log(productId);
    await dispatch(addProductInfavorite(productId));
    setchange(productId + 1);
  }
  function scrollto() {
    const element = document.getElementById("rates");
    element.scrollIntoView();
  }
const {t}=useTranslation();
  return (
    <>
      <div className="row justify-content-center ">
        <div className="col-lg-5 col-md-5 col-sm-6 p-5  d-flex justify-content-center">
          <img
            style={{ height: "fit-content", width: "100%" }}
            src={prod("img")}
            alt=""
          />
        </div>
        <div className="col-lg-4  col-md-4 col-sm-6 p-4  ">
          <h4>{language == "en" ? prod("title_en") : prod("title_ar")}</h4>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "rgb(0,113,165)" }}
          >
             <p>
              {t("category")} :{" "}
              {language == "en"
                ? prod("categoryId", "name_en")
                : prod("categoryId", "name_ar")}
            </p>
          </NavLink>
          <div className="d-flex  align-items-end justify-content-between">
            <p style={{ fontSize: "1.4rem" }} className="p-0 px-2 m-0">
              {prod("avg_rating") ? prod("avg_rating").toFixed(2) : ""}
            </p>
            <div style={{ fontSize: "1.22rem", color: "rgb(237,139,31)" }}>
              {" "}
              <Rate rate={prod("avg_rating")} />
            </div>
            <a
              onClick={scrollto}
              style={{ textDecoration: "none", color: "rgb(0,113,165)" }}
            >
              ({prod("num_rating")}) rating
            </a>
          </div>
          <hr />
          <div
            className="p-2 px-4 "
            style={{
              width: "fit-content",
              borderRadius: "5px",
              backgroundColor: "rgb(204,12,57)",
            }}
          >
            <p className="p-0 m-0" style={{ color: "white" }}>
            {t("discount")}
            </p>
          </div>
          <div className="d-flex py-3">
            <p
              className="p-0 m-0"
              style={{ color: "rgb(204,12,57)", fontSize: "25px" }}
            >
              {prod("price", "discount")}%
            </p>
            <p className=" m-0" style={{ paddingLeft: "20px " }}>
            {language == "en" && t("EGP")} {language == "ar" && "00"}{" "}
            </p>
            <p className="p-0 m-0" style={{ fontSize: "30px" }}>
              {prod("price", "new")}
            </p>
            <p className=" m-0">{language == "en" && "00"}
              {language == "ar" && t("EGP")}</p>
          </div>
          <div
            className="d-flex"
            style={{ color: "gray", fontSize: ".9rem", fontWeight: "600" }}
          >
            <p className="m-0">{t("Was")}</p>
            <p className="m-0"> {prod("price", "old")}  {t("EGP")}</p>
          </div>
          <p>
            {t("All prices include VAT.")} <br />
            {t("Buy with installments and pay")}{" "}
            {(prod("price", "new") / 60).toFixed(2)}{" "}
            {t("for 60 months with select banks")}
          </p>
          <hr />
          {language == "en" &&prod("info_en")
            ? prod("info_en").map((item) => {
                const [key, value] = item.split(":");
                return (
                  <>
                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }} className="m-1">
                        {key} :
                      </p>
                      <p className="m-1">{value}</p>
                    </div>
                  </>
                );
              })
            : ""}
            {language == "ar" && prod("info_ar")
            ? prod("info_ar").map((item) => {
                const [key, value] = item.split(":");
                return (
                  <>
                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }} className="m-1">
                        {key} :
                      </p>
                      <p className="m-1">{value}</p>
                    </div>
                  </>
                );
              })
            : ""}
          <hr />
          <h5>{t("About this item")}</h5>
          {language == "en" &&prod("aboutItem_en")
            ? prod("aboutItem_en").map((item) => {
                const [key, value] = item.split(":");
                return (
                  <>
                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }} className="m-1">
                        {key} :
                      </p>
                      <p className="m-1">{value}</p>
                    </div>
                  </>
                );
              })
            : ""}
            {language == "ar" && prod("aboutItem_ar")
            ? prod("aboutItem_ar").map((item) => {
                const [key, value] = item.split(":");
                return (
                  <>
                    <div className="d-flex">
                      <p style={{ fontWeight: "600" }} className="m-1">
                        {key}
                      </p>
                      <p className="m-1">{value}</p>
                    </div>
                  </>
                );
              })
            : ""}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-8 p-4  ">
          <div className="border border-1 p-2">
            <div className="d-flex py-2">
              <p className=" m-0 p-0" style={{ paddingLeft: "20px " }}>
              {language == "en" && t("EGP")} {language == "ar" && "00"}{" "}
              </p>
              <p className="p-0 m-0" style={{ fontSize: "30px" }}>
                {prod("price", "new")}
              </p>
              <p className=" m-0">{language == "en" && "00"}
                {language == "ar" && t("EGP")}</p>
            </div>
            <a
              onClick={scrollto}
              style={{ textDecoration: "none", color: "rgb(0,113,165)" }}
            >
              ({prod("num_rating")}) rating
            </a>
            <p style={{ fontWeight: "550", fontSize: ".9rem" }}>
              {" "}
              <a
                href="#"
                style={{ textDecoration: "none", color: "rgb(0,113,165)" }}
              >
                {t("FREE delivery")}
              </a>{" "}
              {t("Tomorrow, 4 October")}
            </p>
            <div style={{ fontSize: ".9rem" }}>
              <MdOutlinePlace></MdOutlinePlace>
              <a
                href="#"
                style={{ textDecoration: "none", color: "rgb(0,113,165)" }}
              >
                {" "}
                {language === "en" ? (
                  <>
                    {t("Deliver To")} {user.name} - {user.address}
                  </>
                ) : (
                  <>
                    {t("Deliver To")} {user.address} - {user.name}
                  </>
                )} ‌
              </a>
            </div>
            <p
              className="p-0 m-0  my-2"
              style={{ color: "green", fontWeight: "600" }}
            >
              {
              language === "en" ? (
                <>
                  {prod("quantity")} {t("in stock")}
                </>
              ) : (
                <>
                {t("in stock")} {prod("quantity")} 
                </>
                ) }
            </p>
            <div className="d-flex align-items-center  my-2">
              <p className="m-1">{t("Qty")}:</p>
              <input
                type="number"
                onChange={(event) => {
                  setq(event);
                }}
                value={quantity}
                min="1"
                max={prod("quantity")}
                className="form-control mx-3"
                style={{ width: "80px", height: "30px" }}
              />
            </div>
            <div className="d-flex flex-column p-2 ">
              {!isInCart(prod("_id")) ? (
                <button
                  disabled={prod("quantity") < 1}
                  onClick={() => {
                    addtocart(prod("_id"));
                  }}
                  className="btn my-1"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "rgb(255,216,20)",
                  }}
                >
                  {t("add to cart")}
                </button>
              ) : (
                <button
                  onClick={viewcart}
                  className="btn my-1"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "rgb(255,216,20)",
                  }}
                >
                  {t("view cart")}
                </button>
              )}

              <div className="d-flex flex-row justify-content-between">
                <button
                  className="btn w-100 my-1"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "rgb(255,164,28)",
                  }}
                >
                  {t("buy now")}
                </button>

                {fav ? (
                  <div className="p-2">
                    {" "}
                    {!isinfav(prod("_id")) ? (
                      <MdOutlineFavoriteBorder
                        onClick={() => {
                          addtofav(prod("_id"));
                        }}
                        style={{ fontSize: "25px", marginLeft: "10px" }}
                      ></MdOutlineFavoriteBorder>
                    ) : (
                      <MdFavorite></MdFavorite>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        {/* review */}

        <div className="cointainer" id="rates">
          <hr className="w-75 mx-auto" />
          <div className="row">
            <div className="reviews col-md-3  ps-4">
              <h1 className="">{t("Reviews")}</h1>
              <Button
                disabled={!isInOrder(prod("_id"))}
                variant="primary"
                onClick={handleShow}
              >
                {t("Add Review")}
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add review </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    {/* <div className="d-flex flex-wrap ">
                                            {

                                                reviewRate.map((rate, index) => {
                                                    return (
                                                        <>
                                                            <div key={index} className='d-flex w-50'>
                                                                <Form.Check
                                                                    name='rate'
                                                                    type='radio'
                                                                    label={rate.label}
                                                                    id={rate.id}
                                                                />
                                                                <span> &#128512; </span>

                                                            </div>
                                                        </>


                                                    )
                                                })
                                            }
                                        </div> */}

                    <Form.Label className="pe-3">Review Rate</Form.Label>
                    <Rating
                      placeholderRating={formData.rating}
                      placeholderSymbol={<FaStar className="checkedStar" />}
                      fullSymbol={<FaStar className="checkedStar" />}
                      emptySymbol={<FaRegStar />}
                      onChange={(rate) => handleValidation("rating", rate)}
                    />
                    <Form.Group
                      className="my-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Review Comment</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          handleValidation("comment", e.target.value)
                        }
                        value={formData.comment}
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={(e) => Addreviw(e)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className=" col-9">
              <div className="row ">
                {reviws
                  ? reviws.map((item, i) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="col-md-12 " key={i}>
                          <div>
                            <Rate rate={item.rating}></Rate>
                            <a
                              href={"mailto: " + item.user.email}
                              className="mx-2"
                            >
                              {item.user.email}{" "}
                            </a>
                          </div>
                          <span className="py-2 text-secondary">
                            {new Date(item.createdAt).toLocaleString()}
                          </span>
                          <p className="text-secondary fs-5 pe-3 upper-first-letter">
                            {" "}
                            {item.comment}{" "}
                          </p>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
