import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import PropTypes from "prop-types";
import "../todayDeals.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function HeaderSlider(props) {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);

  return (
    <Splide
      options={{
        perPage: props.numberOfItems,
        rewind: true,
        pagination: false,
        direction: language == "en" ? "ltr" : "rtl",
      }}
      aria-label="React Splide TodayDeals"
      className="splide"
    >
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/allDeals.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("All Deals")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/extra discount coupons.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("extra discount coupons")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/primeExeclusiveDeals.png"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("prime Exclusive Deals")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/Electronics.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("Electronics")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/Home&Kitchen.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("Home& Kitchen")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/health%20and personal care.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("Health & Personal Care")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/Beauty.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">{t("Beauty")}</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/mobiles&Accessoires.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("Mobiles& Accessories")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/supermarket.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("supermarket")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/pc&accessoires.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("PC & accessories")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/fashion.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("Fashion")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/baby.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">{t("Baby")}</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/toys.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">{t("Toys")}</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/office supplies.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("Office Supplies")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/tools&home.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("Tools&Home Improvement")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/Automative.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("Automotive")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img
            src="./assets/todayDealsImage/outdoor&Garden.jpg"
            alt="Image 1"
          />
          <div className="fw-bolder text-center TDSlideText">
            {t("Outdoor& Garden")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/sports.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">{t("Sports")}</div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/video Game.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">
            {t("VideoGames")}
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="d-flex flex-column justify-content-center align-content-center container">
          <img src="./assets/todayDealsImage/Books.jpg" alt="Image 1" />
          <div className="fw-bolder text-center TDSlideText">{t("books")}</div>
        </div>
      </SplideSlide>
    </Splide>
  );
}
HeaderSlider.propTypes = {
  numberOfItems: PropTypes.number.isRequired,
};
