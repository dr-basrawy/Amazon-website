import React from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet , NavLink } from 'react-router-dom'

export default function HomeProducts() {
    const {t}=useTranslation();
  return (
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm">
                <li className="nav-item">
                    <NavLink to='' className="nav-link text-dark fw-bolder" >{t("Home")}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='Decor' className="nav-link text-dark">{t("Home Decor")}</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
  )
}
