import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function MainCards(props) {
  let language = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  let navigate=useNavigate()
  function goToDetails(){
    console.log(props.id)
    navigate("/productdetails", { state: { productId: props.id } });
  }
  return (
    <div
      className="card col-xl-3 col-md-6 col-12 overflow-hidden py-3"
      style={{ height: "400px" }} onClick={goToDetails}
    >
      <img
        className="pt-4 w-50 align-self-center h-50"
        src={props.img}
        alt="image"
      />
      <div className="card-body h-50">
        {language == "en" && (
          <h4 className="card-title text-danger">
            <span className="badge rounded-1 bg-danger p-2 me-1">
              {t("Up to")} {props.discount}%{t("off")}
            </span>
            {t("Deal")}
          </h4>
        )}
        {language == "ar" && (
          <h4 className="card-title text-danger">
            <span className="badge rounded-1 bg-danger p-2 ms-1">
            {t("off")}  {t("Up to")}  {props.discount}%
            </span>
            {t("Deal")}
          </h4>
        )}
        <p className="card-text mainCards">
          {t("Save On")} {props.title}
        </p>
      </div>
    </div>
  );
}
MainCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  discount: PropTypes.number,
  id: PropTypes.string,
};
