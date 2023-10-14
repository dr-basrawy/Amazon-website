import React, { useEffect, useState } from 'react';
import "./userInfo.css";
import { cancelOrder, fetchOrder } from "../../../store/Slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from 'react-bootstrap/Badge';
// import format from 'date-fns/format'

export default function TrackingOrder() {
    var orders = useSelector((state) => { return state.order.data })
    const [isCancelled, setIsCancelled] = useState(false);
    const [change, setchange] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch,change]);

    async function funCancelOrder(orderId){
        await dispatch(cancelOrder(orderId))
        setchange(orderId)
    }

    // const handleCancelOrder = (productId, quantity) => {
    //     console.log(productId, quantity)
       
    //     dispatch(updateQuantity(productId, quantity))
    //         .then(() => {
    //             console.log("Quantity updated successfully",productId, quantity);
    //         })
    //         .catch((error) => {
    //             console.error("Failed to update quantity:", error);
    //         });
    //     setIsCancelled(true);
    // };

    return (
        <>
            <div className="container">
                <h3 className='m-5'>Your Orders</h3>
                <div className="order-table shadow">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="order-th shadow">Date</th>
                                <th className="order-th shadow">Order</th>
                                <th className="order-th shadow">Quantity</th>
                                <th className="order-th shadow">Status</th>
                                <th className="order-th shadow">Cancellation</th>
                            </tr>
                        </thead>
                        <tbody >
                            {orders.map((order) => (
                                <tr  className="order-tr-light" key={order.id}>
                                    <td className="order-td">{order.createdAt}</td>
                                    <td className="order-td d-flex flex-column">
                                        {order.products.map((product) => (
                                            <img key={product.product._id} src={product.product.img} alt="product" width={110} height={100} />
                                        ))}
                                    </td>

                                    <td className="order-td  ">
                                        {order.products.map((product) => (
                                            <h3 key={product.product._id}>
                                                <Badge bg="dark" text="white" className='mt-5'>
                                                    {product.quantity}
                                                </Badge>
                                            </h3>
                                        ))}
                                    </td>
                                    <td className="order-td">

                                        <h3 >
                                            <Badge bg={`${order.status=="cancelled"?"danger":"warning"}`} text="dark">
                                                {order.status}
                                            </Badge>
                                        </h3>
                                    </td>
                                    <td className="order-td">
                                        <div className='d-flex flex-column'>
                                           <button  className={`btn btn-danger ${order.status=="cancelled"?"d-none":""}`} onClick={()=>{funCancelOrder(`${order._id}`)}}>cancel order</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}