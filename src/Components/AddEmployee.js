import React,{useState} from 'react'
import { Link } from "react-router-dom"

const AddEmployee = () => {

    const [E_Name,setE_Name]=useState('')
    const [E_Id,setE_Id]=useState('')
    const [Address,setAddress]=useState('')
    const [Phone,setPhone]=useState('')
    const [Designation,setDesignation]=useState('')
    const [D_O_B,setD_O_B]=useState('')

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            E_Name:E_Name,
            id:E_Id,
            Address:Address,
            Phone:Phone,
            Designation:Designation,
            D_O_B:D_O_B
        })
    };

    const addEmployee = () => {
        fetch('http://localhost/Avenue/Create/Emp',requestOptions).then((response)=> {
            if(response.message){
                alert("Please enter Valid Details of the Employee!");
            }
            else {
                // Read point 3 on notes.txt
                window.open('/Employee','_self');
                alert("The Employee was added successfully!")
                return;
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="view-employee-container add-employee-container">
                    <form className="view-employee-form" action="">
                        <p align="center" for="EName">Employee Name : <input onChange={(e)=>setE_Name(e.target.value)} /><br /></p>
                        <p align="center" for="Ecode">Employee Code &nbsp;: <input onChange={(e)=>setE_Id(e.target.value)} /><br /></p>
                        <p align="center" for="Eaddress">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setAddress(e.target.value)} /><br /></p>
                        <p align="center" for="Econtact">Contact Number : <input onChange={(e)=>setPhone(e.target.value)} /><br /></p>
                        <p align="center" for="Edesignation">Designation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setDesignation(e.target.value)} /><br /></p>
                        <p align="center" for="EDOB">Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setD_O_B(e.target.value)} /><br /></p>
                        <div className="products-buttons special-employee">
                            <button type="button" onClick={addEmployee}> ADD EMPLOYEE </button>
                        </div>
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
export default AddEmployee