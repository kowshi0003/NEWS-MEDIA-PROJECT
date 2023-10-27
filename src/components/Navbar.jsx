import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { LoginNavbar } from './LoginNavbar'
import style from './Navbar.module.css'
export const Navbar = () => {
    let todaysDate = new Date()
    let splitDate = todaysDate.toString().split(" ")
    let result = splitDate[0] + " " + splitDate[1] + " " + splitDate[2] + " " + splitDate[3]
    return (
        <div className={style.upperBox}>
            <div className={style.first_Dark}>
                <div className={style.languages}>
                    <ul style={{ borderTop: "3px solid red" }}><strong>ENGLISH</strong></ul>
                    <ul><strong>தமிழ்</strong></ul>
                    <ul><strong>বাংলা</strong></ul>
                    <ul><strong>മലയാളം</strong></ul>
                    <ul><strong>हिंदी</strong></ul>
                    <ul><strong>मराठी</strong></ul>
                </div>
            </div>
            <div className={style.expresslogocont}>
                <div>
                    <div >
                        <strong>Follow Us:</strong>
                        <div>
                           <BsFacebook style={{ fontSize: "36px", paddingRight: "10px" }} />
                            <BsTwitter style={{ fontSize: "36px", paddingRight: "10px" }} />
                        </div>
                    </div>
                    <div>
                        <img style={{ maxHeight: "40%", maxWidth: "98%" }} src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="logo" />
                        <h4 style={{ marginTop: "5px" }}>{result}</h4>
                    </div>
                </div>
            </div> 
            <LoginNavbar />
        </div>
    )
}
