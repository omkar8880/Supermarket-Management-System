import React from 'react'
import { Link } from "react-router-dom";

class EmployeeList extends React.Component {
    render() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="add-products-container">
                        <form className="add-products-form" action="">
                            <p align="center" for="PName">Product Name : <input type="text" id="PName" name="PName" /><br /></p>
                            <p align="center" for="Pcode">Product Code &nbsp;: <input type="text" id="Pcode" name="Pcode" /><br /></p>
                            <p align="center" for="Pcost">Product Cost &nbsp;&nbsp;: <input type="text" id="Pcost" name="Pcost" /><br /></p>
                            <p align="center" for="Pdetails">Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" id="Pdetails" name="Pdetails" /><br /></p>
                            <p align="center" for="Pavailability">Availability &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" id="Pavailability" name="Pavailability" /><br /></p>
                        </form>
                    </div>
                </div>
                <div className="products-buttons">
                    <button className="add-products-button" style={{position: "relative", top: "-10vh" }}> UPDATE PRODUCTS </button>
                </div>
                <div className="main-navigator product-navigator">
                    <button className="button1"><Link className='button1-link' to="/">BACK</Link></button>
                    <button className="button2">BUTTON 2</button>
                </div>
            </>
        )
    }
}

export default EmployeeList