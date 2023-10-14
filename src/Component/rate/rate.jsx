import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'

export default function Rate(e) {
  return (
    <>
        {e.rate>=1 ?<FaStar className="checkedStar" />:<FaRegStar />}
        {e.rate>=2 ?<FaStar className="checkedStar" />:<FaRegStar />}
        {e.rate>=3 ?<FaStar className="checkedStar" />:<FaRegStar />}
        {e.rate>=4 ?<FaStar className="checkedStar" />:<FaRegStar />}
        {e.rate>=5 ?<FaStar className="checkedStar" />:<FaRegStar />}
    </>
  )
}
