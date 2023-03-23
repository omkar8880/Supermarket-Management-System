import React from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';

class LoginSelection extends React.Component {
    render() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="login-container">
                        <form className="login-form" action="">
                            <div className="login-heading">
                                <h1 style={{ textDecoration: "underline" }}>Select Login</h1>&nbsp; &nbsp;
                                <img className="login-selection-img" src={LoginImg} alt="" />
                            </div>
                            <div className="login-selection-div">
                                <p className="login-selection-p-1"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/LoginAdmin"> Administration </Link></p>
                                <p className="login-selection-p"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/LoginSales"> Product Management </Link></p>
                                <p className="login-selection-p"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/LoginCashier"> Cashier </Link></p>
                            </div>
                            {/* <button className="login-selection-button">PROCEED</button> */}
                        </form>
                    </div>
                </div>
                <div className="main-navigator">
                    <button className="button1"><Link className='button1-link' to="/">BACK</Link></button>
                    <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
            </>
        )
    }
}

export default LoginSelection