import React from 'react'

export default function CouponsCards() {
  return (
    <div className='col-6 border p-3 d-flex flex-column'>
    <img className='col-2 align-self-center' src='https://m.media-amazon.com/images/I/71Z7EVuOp1L.jpg'/>
    <h5 className='text-success fw-bolder'>Save EGP 20.00 at checkout</h5>
    <h5>DORCO TWIN BLADE FIXED HEAD - 10+2 FREE</h5>
    <button className='btn col-12' style={{border:"1px dotted black"}}> clip Coupon</button>
    </div>
  )
}
