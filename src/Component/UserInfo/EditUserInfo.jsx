import { useDispatch, useSelector } from "react-redux";
import { fetchuser, updateUser } from "../../../store/Slice/userSlice";
import React, { useEffect, useState } from "react";
import "./userInfo.css";
export default function EditUserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  //   const status = useSelector((state) => state.user.status);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  useEffect(() => {
    console.log(user.name)
    dispatch(fetchuser());

  }, []);




  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email, address }));
    const data = new FormData();

    data.append("image", fileData);

    fetch("http://localhost:3300/user/single", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          console.log("File Sent Successful");
        } else {
          throw new Error("File upload failed");
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
  };
  return (
    <>

      <div className="container m-7">
        <h3 className="mt-4"> Edit Your Profile</h3>

        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="name">
                <h4>First name</h4>
              </label>
              <input type="text" className="form-control" id="name" value={name || ''} onChange={(e) => { setName(e.target.value); }} />
            </div>
          </div>
          {/* <div className="form-group">
            <div className="col-xs-6">
              <label htmlFor="image">
                <h4>Image</h4>
              </label>
              <input type="text" className="form-control" id="image" value={image || ''} onChange={(e) => { setImage(e.target.value); }} />

            </div>
          </div> */}

          <div className="form-group">
            <div className="col-xs-6 mt-3">
              <label htmlFor="email">
                <h4>Email</h4>
              </label>
              <input type="text" className="form-control" id="email" value={email || ''} onChange={(e) => { setEmail(e.target.value); }} />

            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6 mt-3">
              <label htmlFor="address">
                <h4>Address</h4>
              </label>
              <input type="text" className="form-control" id="address" value={address || ''} onChange={(e) => { setAddress(e.target.value); }} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-12">
              <br />
              <button className="btn btn-lg btn-success pull-right" type="submit">
                <i className="glyphicon glyphicon-ok-sign"></i> Save
              </button>
              {/* <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}