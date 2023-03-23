import React, {useState} from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";

const LoginCashier = () => {

    const [usernameLoginCashier,setusernameLoginCashier]=useState('')
    const [passwordLoginCashier,setpasswordLoginCashier]=useState('')

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            username: usernameLoginCashier,
            password: passwordLoginCashier
        })
    };
    const validateLoginCashier = () => {
        fetch('http://localhost/Avenue/Cashier',requestOptions).then((response)=> {
            if (response.status===200){
                window.open('/Cashier','_self');
            }
            else{
                alert("Please enter the correct username and password");
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="login-container">
                    <form className="login-form" action="">
                        <div className="login-heading">
                            <h1>Login Details&nbsp; </h1>
                            <img src={LoginImg} alt="" />
                        </div>
                        <p align="center" for="username">Username : <input onChange={(e)=>setusernameLoginCashier(e.target.value)}/><br /></p>
                        <p align="center" for="password">Password&nbsp; : <input type="password" onChange={(e)=>setpasswordLoginCashier(e.target.value)}/><br /></p>
                        <div><button type="button" onClick={validateLoginCashier}>LOGIN</button></div>
                    </form>
                </div>
            </div>
            <div className="main-navigator">
                <button type="button" className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button type="button" className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </>
    )
}
export default LoginCashier