import React from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";

class Management extends React.Component {
    render() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="login-container">
                        <form className="login-form" action="">
                            <div className="login-heading">
                                <img className="login-selection-img" src={LoginImg} alt="" />
                            </div>
                            <div className="login-selection-div management-div">
                                <p className="login-selection-p-1"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/Employee"> Employee Details </Link></p>
                                <p className="login-selection-p"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/Products"> Product Details </Link></p>
                                <p className="login-selection-p"> <span className="login-selection-span">&#8226;</span><Link style={{ textDecoration: "none", color: "red" }} to="/Cashier"> Cashier Interface </Link></p>
                            </div>
                            {/* <button className="login-selection-button">PROCEED</button> */}
                        </form>
                    </div>
                </div>
                <div className="main-navigator">
                    <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                    <button className="button2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button>
                </div>
            </>
        )
    }
}
export default Management