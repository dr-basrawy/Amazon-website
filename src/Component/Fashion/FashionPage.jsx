import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import './Fashion.css'
import { useTranslation } from 'react-i18next';
export default function FashionPage() {
    const { t } = useTranslation();
  return (
    <>
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm nav-last">
                <li className="nav-item li-nav">
                    <NavLink to='' className="nav-link text-dark fw-bolder  ancor" >Amazon Fashion</NavLink>
                </li>
                <li className="nav-item li-nav">
                    <NavLink to='kids' className="nav-link text-dark ancor">{t("Kids & Baby")}</NavLink>
                </li>
                <li className="nav-item li-nav">
                    <NavLink to='men' className="nav-link text-dark ancor">{t("Men")}</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    
    
    </>
  )
}
