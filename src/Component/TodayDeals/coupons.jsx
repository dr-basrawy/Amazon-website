import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDown } from "react-icons/ai";
import CouponsCards from "./todayDealsComponents/couponsCards";
import { useTranslation } from "react-i18next";
export default function Coupons() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCat, setShowCat] = useState(false);
  const handleCloseCat = () => setShowCat(false);
  const handleShowCat = () => setShowCat(true);
  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column align-items-center my-3">
        <img
          className="img-fluid"
          style={{ maxWidth: "428px" }}
          src="https://images-eu.ssl-images-amazon.com/images/G/42/Coupons/Store/1214908_coupon_banner_mobile_en.jpg"
        />
        <h3>{t("Most Popular Coupons")}</h3>
        <h6>{t("Display")}:</h6>
        <Button
          style={{ backgroundColor: "#f0f2f2", color: "black" }}
          className="shadow border-0"
          onClick={handleShow}
        >
          {t("all")} {t("Coupons")} <AiOutlineDown />
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          className="h-75 overflow-auto my-5"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-0">
            <ListGroup>
              <ListGroup.Item>{t("AllCoupons")}</ListGroup.Item>
              <ListGroup.Item>{t("BabyProducts")}</ListGroup.Item>
              <ListGroup.Item>{t("Beauty")}</ListGroup.Item>
              <ListGroup.Item>{t("Camera")}</ListGroup.Item>
              <ListGroup.Item>{t("Clothing")} & {t("Accessories")}</ListGroup.Item>
              <ListGroup.Item>{t("Computers")} & {t("Accessories")}</ListGroup.Item>
              <ListGroup.Item>{t("Tools & HomeImprovement")}</ListGroup.Item>
              <ListGroup.Item>{t("Electronics")}</ListGroup.Item>
              <ListGroup.Item>{t("Grocery & Gourmet")}</ListGroup.Item>
              <ListGroup.Item>{t("Health & Personal Care")}</ListGroup.Item>
              <ListGroup.Item>{t("Home& Kitchen")}</ListGroup.Item>
              <ListGroup.Item>{t("Jewelry")}</ListGroup.Item>
              <ListGroup.Item>{t("Office & School Supplies")}</ListGroup.Item>
              <ListGroup.Item>{t("Pets Supplies")}</ListGroup.Item>
              <ListGroup.Item>{t("Shoes & Handbags")}</ListGroup.Item>
              <ListGroup.Item>{t("Sports & Outdoors")}</ListGroup.Item>
              <ListGroup.Item>{t("Toys & Games")}</ListGroup.Item>
              <ListGroup.Item>{t("Watches")}</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
        <h6>{t("sort by")} :</h6>
        <Button
          style={{ backgroundColor: "#f0f2f2", color: "black" }}
          className="shadow-lg border-0"
          onClick={handleShowCat}
        >
          {t("Most Popular")} <AiOutlineDown />
        </Button>

        <Modal
          show={showCat}
          onHide={handleCloseCat}
          size="lg"
          className="h-75 overflow-auto my-5"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-0">
            <ListGroup>
              <ListGroup.Item>{t("Most Popular")}</ListGroup.Item>
              <ListGroup.Item>{t("Newest")}</ListGroup.Item>
              <ListGroup.Item>{t("Oldest")}</ListGroup.Item>
              <ListGroup.Item>{t("Expiring Soon")}</ListGroup.Item>
              <ListGroup.Item>{t("Discount Percentage")}</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
      <div className="container-fluid">
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
        <div className="row">
          <CouponsCards />
          <CouponsCards />
        </div>
      </div>
      <div className="row d-flex justify-content-center my-3">
        <button className="btn btn-light border border-1 border-black rounded  col-2">
          {" "}
          Show More Coupons
        </button>
      </div>
    </div>
  );
}
