import "./Mobile.css";
import React from "react";
import { useEffect } from "react";
import "../TodayDeals/todayDealsLiftSide/leftSide.css";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosConfig/instance";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LiftSide from "../TodayDeals/todayDealsLiftSide/liftSide";
import { getFilteredList } from "../../../store/Slice/filteredList";

export default function Mobile() {
  const { t } = useTranslation();
  let language = useSelector((state) => state.language.language);
  let navigate = useNavigate();

  // let [mobile, setmobile] = useState([]);
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  let dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    axiosInstance
      .get("category/651827dc6cc9fe1018cc5009")
      .then((data) => {
        if (isMounted) {
          let products = data.data.data.products;
          // setmobile(products);
          dispatch(getFilteredList(products));
        }
      })
      .catch((err) => {
        console.log(err);
      });

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
        <LiftSide
          categoryId={"651827dc6cc9fe1018cc5009"}
          lessThan={3999}
          between1={[4000, 5999]}
          between2={[6000, 7999]}
          between3={[8000, 9999]}
          greaterThan={10000}
        />
        {/* Right Side  */}
        <div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4">
          <h2 className="fw-bold fs-2">{t("Cell Phones")}</h2>
          <img
            src={
              language == "en"
                ? "../assets/images/ha.jpg"
                : "../assets/images/videoGamesMainIamages.jpg"
            }
            className="img-fluid veiw"
            width="100%"
          />
          <div
            className="bg-primary mt-4 p-3 d-lg-flex d-sm-none small "
            style={{ width: "100%", height: "80px" }}
          >
            <p className="h6 fw-bold">
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
          <div>
            <p
              className="h1 fw-bold text-center mt-5 heading "
              style={{ color: "blueviolet" }}
            >
              {t("Flagship brands")}
            </p>
            <div className="container">
              <div className="row">
                <div dir="ltr" className="col-6 d-md-flex d-none px-0">
                  <img src="../assets/images/1.jpg" className="w-50" />
                  <img src="../assets/images/1.1.jpg" className="w-50" />
                </div>
                <div className="col-12 col-md-6">
                  <div className="row ps-1">
                    <div className="col-6 ps-0 pe-0">
                      <img src="../assets/images/2.jpg" className="w-100" />
                    </div>
                    <div className="col-6 px-0">
                      <img src="../assets/images/3.jpg" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-flex">
                <div className="row">
                  <div dir="ltr" className="col-6 d-flex px-0">
                    <img src="../assets/images/1.3.jpg" className="w-50" />
                    <img src="../assets/images/1.4.jpg" className="w-50" />
                  </div>
                  <div className="col-6 ps-1 pe-0">
                    <div>
                      <img src="../assets/images/tt.jpg" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-fluid m-0 justify-content-center">
            {/* left Side  */}

            {/* Right Side  */}
            <div className="col-xl-10 col-md-9 col-8 container-fluid  sideRight justify-content-center align-content-center mt-4">
              {/* second  */}
              <div className="row">
                <div dir="ltr" className="col-12 col-md-6 d-flex ">
                  <div className="row ps-1 ps-md-0">
                    <div className="col-6 px-0 ">
                      <img src="../assets/images/5.jpg" className="w-100" />
                    </div>
                    <div className="col-6 px-0">
                      <img src="../assets/images/6.jpg" className="w-100" />
                    </div>
                  </div>
                </div>
                <div dir="ltr" className="col-6 d-none d-md-flex ps-1 pe-0">
                  <img src="../assets/images/7.jpg" className="w-50" />
                  <img src="../assets/images/7.1.jpg" className="w-50" />
                </div>
              </div>
              <div className="d-none d-md-block">
                <div className="row">
                  <div dir="ltr" className="col-6 d-flex px-0">
                    <img src="../assets/images/4.jpg" className="w-50" />
                    <img src="../assets/images/4.1.jpg" className="w-50" />
                  </div>
                  <div dir="ltr" className="col-6 d-flex ps-1 pe-0">
                    <img src="../assets/images/7.2.jpg" className="w-50" />
                    <img src="../assets/images/7.3.jpg" className="w-50" />
                  </div>
                </div>
              </div>
            </div>

            {/* cards htmlFor phones 
      row 1  */}
            <div className="container">
              <div className="row">
                {filteredList.map((mob) => {
                  return (
                    <div
                      key={mob._id}
                      className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 d-flex justify-content-center"
                    >
                      <div className="card" style={{ width: "22rem" }}>
                        <img
                          src={mob.img}
                          className="card-img-top h-57 "
                          onClick={() => {
                            gotodetails(mob._id);
                          }}
                        />
                        <div className="card-body">
                          <p className="card-text">
                            {language == "en" ? mob.title_en : mob.title_ar}
                          </p>
                        </div>
                        <div className="d-inline-block">
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star text-warning"></i>
                          <i className="fa-solid fa-star-half-stroke text-warning"></i>
                        </div>
                        <div className="d-flex">
                          {language == "en" && t("EGP")}{" "}
                          {language == "ar" && "00"}{" "}
                          <sub>
                            <h3>{mob.price.new}</h3>
                          </sub>
                          {language == "en" && "00"}
                          {language == "ar" && t("EGP")}
                          <span className="pt-3 me-2">
                            {t("List")}
                            <span className="text-muted pt-3 text-decoration-line-through me-2">
                              {mob.price.old}
                            </span>
                          </span>
                        </div>
                        <div className="d-flex align-items-start me-3">
                          <img
                            src="../assets/images/images.png"
                            width="80px"
                            height="25px"
                          />
                          <p>
                            {t("Get it as soon as")}{" "}
                            <b>{t("tomorrow, Jul 31")}</b>
                            {t("Fulfilled by Amazon - FREE Shipping")}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
