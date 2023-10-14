import { useContext } from "react";
import { AuthContext } from "../../Context/user-auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchuser } from "../../../store/Slice/userSlice";
import React, { useEffect, useState } from "react";
import "./userInfo.css";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ImHeart } from "react-icons/im";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsHandbagFill } from "react-icons/bs";
export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  //   const status = useSelector((state) => state.user.status);
  

  useEffect(() => {
   dispatch(fetchuser());
  }, [dispatch]);



  const { userData } = useContext(AuthContext);
  const [avatarSrc, setAvatarSrc] = useState("");
  // console.log(userData)
  // const readURL = (input) => {
  //     if (input.files && input.files[0]) {
  //         const reader = new FileReader();
  //         reader.onload = function (e) {
  //             setAvatarSrc(e.target.result);
  //         }
  //         reader.readAsDataURL(input.files[0]);
  //     }
  // }

  // const handleFileChange = (event) => {
  //     readURL(event.target);
  // };

  ////////////////////

  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  

  /////////////////////////

  // const ImageComponent = () => {
  //     const [imageUrl, setImageUrl] = useState('');

  //     useEffect(() => {
  //       const fetchImage = async () => {
  //         try {
  //           const response = await axios.get('./image/user.webp'); // Replace with your image URL
  //           setImageUrl(response.data.imageUrl);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       };

  //       fetchImage();
  //     }, []);
  // }

  var fav = useSelector((state) => { try{return state.favorite.data.productId }catch{}})


  try{
    for (const item of items) { totalItems += item.quantity }

  }catch(err){console.log(err)}
  return (
    <>
      {/* {userData.name && <p> {userData.name}</p>}
            {userData.userName && <p>Username: {userData.userName}</p>}
            {userData.email && <p>Email: {userData.email}</p>} */}
      <div className="m-5">
        <div className="wallpeper">
          <img className="img-fluid imgProFile" src="../assets/images/uuser2.png" width="22%" />
        </div>
        <div className="p-4 fs-4 fw-bold ">
          <>
            <div className="container">
              <div className="row">
                <div className="col-sm-10"></div>
              </div>
              <div className="row">
                <div className="col-sm-4 layout-profile">
                  <span>
                    <h4>Name : {user.name}</h4>
                    <h4>email : {user.email}</h4>
                    <h4>Address : {user.address}</h4>
                    <button className="btn btn-success ">
                      <Link className="text-light text-decoration-none" to="/profile/edit">
                        Edit Profile
                      </Link>
                    </button>
               
                  </span>

                  <hr />
                  <br />
                  <ul className="list-group">
                    <li className="list-group-item text-muted">Activity </li>
                   
                    <li className="list-group-item text-right">
                    {/* <NavLink className="links" to="/favorite" style={{ textDecoration: "none" }}><MdOutlineFavoriteBorder to='/favorite' color='red' size={25} /></NavLink>
                {fav?fav.length:""} */}
                                <NavLink className="links mx-1" to="/favorite" style={{ textDecoration: "none" }}> <ImHeart className='mx-1' to='favorite' color='red' size={20} /></NavLink>{fav?fav.length:""} 

                    </li>
                    <li className="list-group-item text-right">
                
                                <NavLink className="links mx-1" to='tracking'  style={{ textDecoration: "none" }}> <BsHandbagFill className='mx-1' to='tracking'  color='gray' size={25} /></NavLink>Order

                    </li>
            
                  </ul>
                </div>
                <div className="col-sm-9">
                  <div className="tab-content">
                    <div className="tab-pane" id="settings">
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
