import React, { useEffect } from "react";
import MainCards from "../todayDealsComponents/MainCard";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../axiosConfig/instance";
import { useLocation } from "react-router-dom";
import { getFilteredList } from "../../../../store/Slice/filteredList";

export default function TodayMain() {
  let filteredList = useSelector((state) => state.filteredList.filteredList);
  const location = useLocation();
  let dispatch = useDispatch();
  // let [productList, setProductList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    axiosInstance
      .get("category/65186c48dff647423cf4def7")
      .then((data) => {
        if(isMounted){
          const products = data.data.data.products;
          dispatch(getFilteredList(products));
        }
      })
      .catch((err) => console.log(err));
      return () => {
        isMounted = false;
        dispatch(getFilteredList([]));
      };
  }, [location.pathname]);

  const state = useSelector((state) => state);
  let language = state.language.language;

  return (
    <>
      <aside className="col-xl-10 col-md-9 col-8 container-fluid">
        <div className="row">
          {filteredList.map((item) => {
            return (
              <MainCards
                key={item._id}
                img={item.img}
                id={item._id}
                title={language === "en" ? item.title_en : item.title_ar}
                discount={item.price.discount}
              />
            );
          })}
        </div>
      </aside>
    </>
  );
}
