import React from 'react'
import { useLocation } from 'react-router';

export default function CompleteOrder() {
    const location = useLocation();


    return (
        <>
            <div hidden={location.state.payment == 'paypal'}>
                cod
            </div>
            
            <div hidden={location.state.payment == 'cod'}>
                paypal
            </div>
        </>


    )
}
