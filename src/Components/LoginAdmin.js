import React, {useState} from 'react'
import LoginImg from '.././Images/Login.png'
import { Link } from "react-router-dom";

const LoginAdmin = () => {

    const [usernameAdmin,setusernameAdmin]=useState('')
    const [passwordAdmin,setpasswordAdmin]=useState('')

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            username: usernameAdmin,
            password: passwordAdmin
        })
    };
    const validateAdmin = () => {
        fetch('http://localhost/Avenue/Admin',requestOptions).then((response)=> {
            if (response.status===200){
                window.open('/Management','_self');
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
                        <p align="center" htmlFor="username">Username : <input onChange={(e)=>setusernameAdmin(e.target.value)}/><br /></p>
                        <p align="center" htmlFor="password">Password&nbsp; : <input type="password" onChange={(e)=>setpasswordAdmin(e.target.value)}/><br /></p>
                        <div><button type="button" onClick={validateAdmin}>LOGIN</button></div>
                    </form>
                    {console.log("Hello")}
                </div>
            </div>
            <div className="main-navigator">
                <button type="button" className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button type="button" className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </>
    )
}
export default LoginAdmin