import React, { useEffect, useState } from 'react'

import axiosInstance from '../../axiosConfig/instance';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../store/Slice/cartSlice';


export default function Product(props) {
    let [quantity, setquantity] = useState(props.item.quantity);
    let [change, setchange] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCart())

    }, [change ,quantity])

    async function deleteItem() {
        let userId=localStorage.getItem('userId').replaceAll('"',"")

        await axiosInstance.post(`cart/${userId}/removeProductsInCart/${props.item.product._id}`)
        dispatch(fetchCart())

    }

    async function updateQuantity(e) {

        if (e.target.value >props.item.product.quantity) { setquantity(props.item.product.quantity) }
        else if (e.target.value < 1) { setquantity(1) }
        else { setquantity(e.target.value) }

        let userId=localStorage.getItem('userId').replaceAll('"',"")

        await axiosInstance.patch(`cart/${userId}/updatequantity/${props.item.product._id}/${e.target.value}`)
        dispatch(fetchCart())

    }


    return (
        <>
            <div className="p-3  d-flex " >
                <img src={props.item.product.img} style={{ width: "200px" }} />
                <div className="product-details px-2 ">
                    <p style={{ fontSize: "1.2rem", fontWeight: "500" }} className="m-1  cart-max-line" >{props.item.product.title_en}</p>
                    <p className="m-1" style={{ fontWeight: "700", margin: "0" }}>{props.item.product.price.new * quantity} $</p>
                    <p className="m-1" style={{ fontWeight: "500", fontSize: ".7rem", color: "red" }}>{props.item.product.quantity} left in stock </p>
                    <div className="d-flex align-items-center ">
                        <p className="m-1" style={{ fontWeight: "500", fontSize: ".8rem" }}>sold by </p>
                        <a href="" style={{ fontWeight: "500", fontSize: ".8rem" }}>ahmed</a>
                    </div>
                    <div className="d-flex align-items-center ">
                        <p className="m-1">quantity </p>
                        <input onChange={(event) => { updateQuantity(event) }} type="number"  value={quantity} min="1" max={props.item.product.quantity} className="form-control mx-3" style={{ width: "80px", height: "30px" }} />
                        <a className="mx-3"  onClick={deleteItem}>delete</a>
                        <a className="mx-3" href="" onClick={() => { }}>save</a>
                    </div>
                </div>
            </div>
            <hr />

        </>
    )
}
