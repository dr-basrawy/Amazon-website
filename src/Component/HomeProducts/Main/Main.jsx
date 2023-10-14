import React from 'react'
import Body from './Body/Body'
import LiftSide from './../../TodayDeals/todayDealsLiftSide/liftSide';

export default function Main() {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <LiftSide categoryId={"6508ca71b9e80db520b9d6f5"} lessThan={25} between1={[25,50]} between2={[50,100]} between3={[100,200]} greaterThan={200}/>
    <Body/>
        </div>
    </div>
  )
}
