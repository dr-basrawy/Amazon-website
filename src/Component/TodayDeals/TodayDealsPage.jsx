import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink,Outlet } from 'react-router-dom'

export default function TodayDealsPage() {
    const { t } = useTranslation();
    return (

        <div className='container-fluid p-0'>
            <ul className="nav shadow-sm">
                <li className="nav-item">
                    <NavLink to='' className="nav-link text-dark fw-bolder" >{t("todayDeals")}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='coupons' className="nav-link text-dark">{t("Coupons")}</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
