import React, { useLayoutEffect, useState } from "react";
import HeaderSlider from "./todayDealsComponents/HeaderSlider";
import LiftSide from "./todayDealsLiftSide/liftSide";
import TodayMain from "./todayDealsMain/TodayMain";
import Pagination from "react-bootstrap/Pagination";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Sliders from "./todayDealsComponents/sliders";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function TodayDeals() {
  let categoryId="65186c48dff647423cf4def7";
    let language=useSelector((state)=>state.language.language)
    const {t}=useTranslation()
  const [screenWidth, setScreen] = useState(window.innerWidth);

  useLayoutEffect(function () {
    function handleResize() {
      setScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(screenWidth);
  return (
    <>
      <div className="p-3" style={{ boxSizing: "border-box" }}>
        <h3>{t("todayDeals")}</h3>
        <HeaderSlider
          numberOfItems={
            screenWidth > 1200
              ? 12
              : screenWidth < 1200 && screenWidth > 768
              ? 6
              : screenWidth < 768 && screenWidth > 466
              ? 4
              : 2
          }
        />
      </div>
      <div className="container-fluid">
        <hr />
        <div className="row d-flex">
          <LiftSide categoryId={categoryId} lessThan={400} between1={[400,800]} between2={[800 , 1200]} between3={[1200,1600]} greaterThan={1600} />
          <TodayMain />
        </div>
      </div>
      <div className="container d-flex justify-content-center my-5">
        <Pagination id="todayDealsPagination">
          <Pagination.Item disabled>
            {(language=='en')? <GrLinkPrevious />:<GrLinkNext />}
            {t("Previous")}
          </Pagination.Item>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{21}</Pagination.Item>
          <Pagination.Item>
            {t("Next")}
            {(language=='en')? <GrLinkNext />:<GrLinkPrevious />}
          </Pagination.Item>
        </Pagination>
      </div>
      <div className="p-3" style={{ boxSizing: "border-box" }}>
        <span className="d-flex align-items-baseline">
          <h3 className="me-1">{t("Related to Items you`ve viewed")}</h3>
          <span className="seeMore">{t("See more")}</span>
        </span>
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
      </div>
    </>
  );
}
