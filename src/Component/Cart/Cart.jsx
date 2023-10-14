import React, { useEffect, useState } from "react";
import Product from "./product";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from '../../../store/Slice/cartSlice';
import { useNavigate } from "react-router-dom";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Alert } from "react-bootstrap";

export default function Cart() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  var items = useSelector((state) => { return state.cart.data })
  console.log(items);
  let totalItem = 0
  let totalPrice = 0

  try{
    
  for (const item of items) {
    totalPrice += item.quantity * item.product.price.new
    totalItem += item.quantity
  }

  }catch(err){console.log(err);}
  function Proceed() {
    if (items.length == 0) {
      setisitems(true)
      return true
    }
    else {
      navigate("/order")
    }
  }
  let [isitems, setisitems] = useState(false)

  console.log(11);
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])


  return (
    <>
      <div className=" d-flex row w-auto p-3 cart  container-fluid " style={{ backgroundColor: "rgb(234,237,237)" }}>
        <div className="p-2 col-sm-12 col-lg-9">
          <div className="cart-left-side p-3   " style={{ backgroundColor: "white" }}>
            <h2>Shopping Cart</h2>
            <hr />
            {
              items.map((item) => {
                return <Product key={item._id} item={item} />

                
              })
            }
          </div>
        </div>
        <div className="p-2 col-sm-12 col-lg-3">
          <div className="cart-right-side p-3  " style={{ backgroundColor: "white" }}>
            <h5 className="p-2">Items : {totalItem}</h5>
            <h5 className="p-2">Total Price : {totalPrice} $</h5>
            <button onClick={Proceed} className=" p-2 btn btn-warning w-100" > Proceed to Buy</button>
          </div>

        </div>
        {isitems ? <div className="alert alert-warning" role="alert">cart is empty!</div> : ""}


      </div>

    </>
  );
}
