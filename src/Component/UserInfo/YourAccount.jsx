import React from 'react'

import { Link, Outlet } from "react-router-dom";

import './userInfo.css';
export default function YourAccount() {


    return (
        <>
            <div className='container-fluid p-0'>
          
                <Outlet />
            </div>


        </>
    )
}


