import React, { useState } from "react";
import style from "./SignIn.module.css";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
// import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logginSuccess } from "./redux/actionType";
export const SignIn = () => {
  const [contactNumber, setContactNumber] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const matchData = () => {
    axios
      .get(
        `https://cryptic-ravine-10338.herokuapp.com/allusers?contactNum=${contactNumber}&password=${confirmPassword}`
      )
      .then((res) => {
        if (res.data.length === 1) {
          localStorage.setItem(
            "username",
            JSON.stringify(res.data[0].username)
          );
          dispatch({
            type: logginSuccess,
            payload: res.data[0],
          });
          // alert("success");
          // navigate("/");
        } else {
          alert("Credential not matched");
        }
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className={style.topNav}>
        <Link to="/" className={style.back_to_home}>
          <MdOutlineArrowBack style={{ fontSize: "28px" }} />
          <p >Back to Indianexpress</p>
        </Link>
        <div className={style.newsLogo}>
          <img
            style={{ height: "100%" }}
            src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg"
            alt=""
          />
        </div>
      </div>
      <div className={style.signIn_wrapper}>
        <h2>Welcome back</h2>

        <div className={style.eachSocial}>
          <div className={style.evfafagoogle}></div>
          <span className={style.evsocialbtntext}>Continue with Google</span>
        </div>

        <div className={style.eachSocial}>
          <div className={style.evfafafb}></div>
          <span className={style.evsocialbtntext}>Continue with Facebook</span>
        </div>

        <div className={style.eachSocial}>
          <div className={style.evfafaapple}></div>
          <span className={style.evsocialbtntext}>Continue with Apple</span>
        </div>

        <div className={style.txtspacer}>
          <hr style={{ marginBottom: "-15px" }} />
          <p className={style.ngbinding}>OR</p>
        </div>

        <p
          className={style.numberInput}
          style={{ border: "none", color: " rgb(125, 125, 125)" }}
        >
          Enter the mobile number associated with your account to sign in.
        </p>
        <div className={style.numberInput}>
          <div className={style.evfafaemail}></div>
          <input
            type="text"
            name=""
            placeholder="Insert Phone Number"
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
          />
        </div>

        <div className={style.numberInput} style={{ marginTop: "15px" }}>
          <div className={style.evfafaepass}></div>
          <input
            type="password"
            name=""
            placeholder="Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <br></br>
        <div className={style.eachSocialb} onClick={matchData}>
          <span>Sign In</span>
        </div>
        <p
          style={{
            border: "none",
            color: " rgb(125, 125, 125)",
            fontSize: "18px",
            marginBottom: "0px",
            textAlign:"center"
          }}
        >
          New to The Indian Express?
        </p>
        <Link to="/signup" className={style.createAccount}>
          Create an account to get started.
        </Link>
      </div>
    </div>
  );
};
