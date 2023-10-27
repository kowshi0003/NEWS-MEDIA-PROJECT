import React, { useEffect, useState } from 'react'
import style from './LoginNavbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BigFilter } from './BigFilter'
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "./redux/actionType.js";
import { LandingPage } from './LandingPage'

export const LoginNavbar = () => {
  const [hamPage, setHamPage] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [showFixednav, setShowFixednav] = useState(false);
  const[localStoredata, setLoaclStoreData] = useState(false)
  const dispatch = useDispatch();


let showSign = JSON.parse(localStorage.getItem("username"));
// const state = useSelector((state)=>state)

// console.log(state);

  useEffect( ()=> {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowLogo(true)
        setShowFixednav(true)
      } else {
        setShowFixednav(false);
        setShowLogo(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!hamPage) {
    return (
      <BigFilter el={{hamPage,setHamPage}}/>
    )
  }
  
const handleSignOut = () =>{
    dispatch({
      type: logout,
      payload:false

    })
  //  localStorage.removeItem("username")
  setLoaclStoreData(!localStoredata)
}
  return (
    <>
      <div className={showFixednav ? style.black_contone : style.black_cont}>
        <div>
          <GiHamburgerMenu onClick={() => setHamPage(false)} />
        </div>
        <div style={{ display: "flex", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ visibility: showLogo ? "visible" : "hidden" }}
              src="https://indianexpress.com/wp-content/themes/indianexpress/images/theindianexpress-logo-n.svg"
              alt="imgg"
            />
          </div>
          <div>
            <ul className={style.navUlist}>
              <li>Home</li>
              <li>Explained</li>
              <li>Political Pulse</li>
              <li>India</li>
              <li>Entertainment</li>
              <li>Education</li>
              <li>Sports</li>
              <li>Audio</li>
              <li>
                <span className={style.subscribe}>Subscribe</span>
              </li>
              {showSign ? (
                <li onClick={handleSignOut}>Sign Out</li>
              ) : (
                <Link to="/signin">
                  <li> Sign in</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div>
          <BiSearchAlt2 style={{fontSize:"26px"}} onClick={()=>alert("feature is in Progress")}/>
        </div>
      </div>
      <LandingPage />
    </>
  );
}
