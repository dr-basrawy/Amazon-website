import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchfavorite } from '../../../store/Slice/favorite'
import FavProduct from './FavProduct'

export default function Favorite() {
    var dispatch = useDispatch()
    var favorite = useSelector((state) => { return state.favorite.data })
    useEffect(() => {
        dispatch(fetchfavorite())
    }, [dispatch])

    return (
        <>
            <div className=" d-flex row w-auto p-3 cart  container-fluid " style={{ backgroundColor: "rgb(234,237,237)" }}>
                <div className="p-2  col-sm-12 col-lg-12">
                    <div className=" col-12 cart-left-side p-3 w-100  " style={{ backgroundColor: "white" }}>
                        <h2>Your Favorite</h2>
                        <hr />
                        {
                            Array.isArray(favorite.productId) ?
                                favorite.productId.map(element => {
                                    return <FavProduct product={element} />;
                                }) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
