import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchfavorite, removeProductInfavorite } from '../../../store/Slice/favorite';
import { useNavigate } from 'react-router';

export default function FavProduct(props) {
    let dispatch=useDispatch()
    let navigate=useNavigate()

    let [change, setchange] = useState(0);
    useEffect(()=>{
        dispatch(fetchfavorite())
    },[dispatch,change])

    async function removeFromCart(prodId) {
       await dispatch(removeProductInfavorite(prodId))
        setchange(prodId)
      }
    function gotodetails(bookId) {
        navigate("/productdetails", { state: { productId: bookId } });
      }
    return (
        <>
            <div className="p-3  d-flex ">
                <img src={props.product.img} style={{ width: "200px" }} />
                <div className="product-details px-2 w-100 ">
                    <p style={{ fontSize: "1.2rem", fontWeight: "500" }} className="m-1  cart-max-line" >{props.product.title_en}</p>
                    <p className="m-1" style={{ fontWeight: "700", margin: "0" }}>{props.product.price.new} $</p>
                    <p className="m-1" style={{ fontWeight: "500", fontSize: ".7rem", color: "red" }}>{props.product.quantity} left in stock </p>
                    <div className="d-flex aligns-center ">
                        <p className="m-1" style={{ fontWeight: "500", fontSize: ".8rem" }}>sold by </p>
                        <a href="" style={{ fontWeight: "500", fontSize: ".8rem" }}>ahmed</a>
                    </div>
                    <div className="d-flex w-100 justify-content-end ">
                        <button onClick={() => { gotodetails(props.product._id)}} className="btn btn-secondary mx-3">details </button>
                        <button onClick={() => { removeFromCart(props.product._id)  }} className="btn btn-danger">remove</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
