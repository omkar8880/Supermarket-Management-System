import React from 'react'
import { Link } from "react-router-dom"

class Homepage extends React.Component {
    render() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="homepage-container">
                        <h1>AVENUE <br /> SUPERMART</h1>
                    </div>
                </div>
                <div className="main-navigator">
                    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="button2"><Link className='button2-link' to="/LoginSelection">LOGIN</Link></button>
                </div>
            </>
        )
    }
}

export default Homepage