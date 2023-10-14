import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
import { useDispatch, useSelector } from "react-redux";
import { fetchuser } from '../../../store/Slice/userSlice'
import { confirmAlert } from 'react-confirm-alert'
// import Login from '../Login/Login'
export default function AppLayout() {
  const location = useLocation();
  const unshow = location.pathname === '/login' || location.pathname === '/CreateAccount' || location.pathname === '/order';
  let language = useSelector((state) => state.language.language);
  let user = useSelector((state) => { return state.user.data })
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let [display, setdisplay] = useState(location.pathname=='/login'||location.pathname=='/'||location.pathname=='/CreateAccount'||localStorage.getItem('userId')?'':"d-none")
  
  
  function submet() {
    confirmAlert({
      title: "ERORR 404 ",
      message: "please log in",
      buttons: [
        {
          label: "log in ",
          onClick: async () => {
            setdisplay(""); navigate('/login') 
          },
        },
        // {
        //   label: "cancel",
        //   onClick: () => {},
        // },
      ],
    });
  }
  useEffect(() => {
    dispatch(fetchuser())
  }, [dispatch])
  console.log(user);
  return (
    <div dir={(language == 'en' ? 'ltr' : 'rtl')}>
      <div className={`${!user._id ? display : ""}`}>
        {!unshow && <Navbar />}
        <Outlet />
        {!unshow && <FooterCom />}
      </div>
      <div className={`${user._id ? display : ""}`}>
        {/* <div className='d-flex justify-content-center flex-column'>
          <h1>please log in to see this page</h1>
          <button className='btn btn-primary' onClick={() => { setdisplay(""); navigate('/login') }}> log in </button>

        </div> */}
        {
          display==""? "":submet()
        }
        
      </div>  
    </div>
  )
}
