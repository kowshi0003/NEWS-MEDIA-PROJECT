import React, { useEffect, useState } from 'react'
import style from './SignUp.module.css'
import { MdOutlineArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import axios from 'axios'

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [contactNum, setContactNum] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpass, setConfirmpass] = useState(null)
    const [matchPassword, setMatchPassword] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if(password===confirmpass){
            setMatchPassword(true)
            // console.log("Matched")
        }else{
            setMatchPassword(false)
        }
    }, [confirmpass,password])
    
    const signupData = () =>{
        let payload = {
            username,
            contactNum,
            password
        }
        if(username !== "" && contactNum !== "" && password !== "" && confirmpass !== null && matchPassword === true){
           axios
             .post(
               "https://cryptic-ravine-10338.herokuapp.com/allusers",
               payload
             )
             .then(() => {
               alert("Account created");
               navigate("/signin");
             });
        }else{
            alert("pls fill all detalis")
        }
    }
    
    return (
        <div>
            <div className={style.topNav}>
                <Link to='/' className={style.back_to_home}>
                    <MdOutlineArrowBack style={{ fontSize: "28px" }} />
                    <p>Back to Indianexpress</p>
                </Link>
                <div className={style.newsLogo}>
                    <img style={{ height: "100%" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg" alt="" />
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

                <div className={style.numberInput}>
                    <div className={style.evfafaeuser}></div>
                    <input type="text" name="" placeholder='Enter Your Name' onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                </div>
                <div className={style.numberInput}>
                    <div className={style.evfafaemail}></div>
                    <input type="text" name="" placeholder='Insert Phone Number' onChange={(e) => {
                        setContactNum(e.target.value)
                    }} />
                </div>

                <div className={style.numberInput} style={{ marginTop: "15px" }}>
                    <div className={style.evfafaepass}></div>
                    <input type="password" name="" placeholder='Password' onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className={style.numberInput} style={{ marginTop: "15px" }}>
                    <div className={style.evfafaepass}></div>
                    <input type="password" name="" placeholder='Confirm Password' onChange={(e) => {
                        setConfirmpass(e.target.value)
                    }} />
                </div>
                <p style={{color:"green",marginTop:"0px",marginBottom:"0px"}}>{matchPassword ?"Password matched": null }</p>
                <br></br>
                <div className={style.eachSocialb} style={{marginBottom:"0px"}} onClick={signupData}>
                    <span>Sign up</span>
                </div>
                <p style={{ border: "none",textAlign:"center", color: " rgb(125, 125, 125)", fontSize: "18px", marginBottom: "0px",marginTop: "0px"}}>Already have an account?</p>
                <Link to='/signin' className={style.createAccount}>Sign In</Link>
            </div >


        </div >
    )
}

export default SignUp