import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink,Outlet } from 'react-router-dom'
// import './Fashion.css'
export default function VgamesNav() {
  const { t } = useTranslation();
  return (
    <>
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm nav-last">
                <li className="nav-item li-nav">
                    <NavLink to='' className="nav-link text-dark fw-bolder  ancor" >{t("VideoGames")}</NavLink>
                </li>
                <li className="nav-item li-nav">
                    <NavLink to='BestSeller' className="nav-link text-dark ancor">{t("Best Sellers")}</NavLink>
                </li>
                
            </ul>
            <Outlet/>
        </div>
    
    
    </>
  )
}
