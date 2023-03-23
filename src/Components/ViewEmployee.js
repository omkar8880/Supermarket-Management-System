import React from 'react'
import { Link } from "react-router-dom";

class ViewEmployee extends React.Component {
    render() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="view-employee-container ">
                        <form className="view-employee-form" action="">
                            <p align="center" for="EName">Employee Name : <input type="text" id="EName" name="EName" /><br /></p>
                            <p align="center" for="Ecode">Employee Code &nbsp;: <input type="text" id="Ecode" name="Ecode" /><br /></p>
                            <p align="center" for="Eaddress">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" id="Eaddress" name="Eaddress" /><br /></p>
                            <p align="center" for="Econtact">Contact Number : <input type="text" id="Econtact" name="Econtact" /><br /></p>
                            <p align="center" for="Edesignation">Designation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" id="Edesignation" name="Edesignation" /><br /></p>
                            <p align="center" for="EDOB">Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input type="text" id="EDOB" name="EDOB" /><br /></p>
                        </form>
                    </div>
                </div>
                <div className="main-navigator product-navigator">
                    <button className="button1"><Link className='button1-link' to="/Employee">BACK</Link></button>
                    <button className="button2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button>
                </div>
            </>
        )
    }
}
export default ViewEmployee