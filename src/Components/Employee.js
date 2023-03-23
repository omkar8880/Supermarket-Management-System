import React, {useState} from 'react'
import { Link } from "react-router-dom"
import ViewEmployee from './ViewEmployee'

const Employee = () => {

    const [E_Name,setE_Name]=useState('')
    const [E_Id,setE_Id]=useState('')
    const [data, setdata] = useState('')

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
        })
    };

    const validateEmployee = () => {
        fetch('http://localhost/Avenue/EmpByid',requestOptions).then((response)=> {
            if(response.status===404){
                alert("Please enter valid Employee Details!");
            }
            else if(response.status===200){
                response.json().then(function(data) {
                    setdata(data);
                });
                // window.open('/ViewEmployee','_self');
                setdata(response)
                {var element = document.getElementById("main-wrapper");
                element.classList.add("mystyle");}
                {var element = document.getElementById("mystyle2");
                element.classList.add("mystyle");}
                {element = document.getElementById("check1");
                element.classList.remove("mystyle");
                element = document.getElementById("check2");
                element.classList.remove("mystyle");}
                return;
            }
        })
        
        // setcheck(true)
        // {var element = document.getElementById("main-wrapper");
        // element.classList.add("mystyle");
        // element = document.getElementById("mystyle2");
        // element.classList.add("mystyle");
        // element = document.getElementById("check1");
        // element.classList.remove("mystyle");
        // element = document.getElementById("check2");
        // element.classList.remove("mystyle");}
    }

    const back = () => {
        window.location.reload();
    }

    return (
        <>  
            {/* {check && <ViewEmployee />} */}
            <div className="main-wrapper mystyle" id='check1'> 
                <div className="view-employee-container ">
                    <form className="view-employee-form" action="">
                        <p align="center" for="EName">Employee Name : <input disabled value={data.E_Name} type="text" id="EName" name="EName" /><br /></p>
                        <p align="center" for="Ecode">Employee Code &nbsp;: <input disabled value={data.id} type="text" id="Ecode" name="Ecode" /><br /></p>
                        <p align="center" for="Eaddress">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input disabled value={data.Address} type="text" id="Eaddress" name="Eaddress" /><br /></p>
                        <p align="center" for="Econtact">Contact Number : <input disabled value={data.Phone} type="text" id="Econtact" name="Econtact" /><br /></p>
                        <p align="center" for="Edesignation">Designation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input disabled value={data.Designation} type="text" id="Edesignation" name="Edesignation" /><br /></p>
                        <p align="center" for="EDOB">Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input disabled value={data.D_O_B} type="text" id="EDOB" name="EDOB" /><br /></p>
                    </form>
                </div>
            </div>
            <div className="main-navigator product-navigator mystyle" id='check2'>
                <button className="button1" style={{cursor: 'pointer'}}  onClick={back}>BACK</button>
                <button className="button2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button>
            </div>







            <div className="main-wrapper"  id='main-wrapper'>
                <div className="products-container">
                    <div className="products-heading">
                        <h1>Employee Details </h1>
                    </div>
                    <form className="products-form" action="">

                        <p align="center" for="EmployeeName">Employee Name : <input onChange={(e)=>setE_Name(e.target.value)} /><br /></p>
                        <p align="center" for="EmployeeCode">Employee ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <input onChange={(e)=>setE_Id(e.target.value)} /><br /></p>
                        <div className="products-buttons">
                            <button type="button" onClick={validateEmployee}>Find Employee</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="products-buttons-out" id='mystyle2'>
            <div className="products-buttons">
                <button type="button" style={{position: "relative", top: "-10vh" }}><Link className='button2-link' style={{color: "#000080"}} to="/AddEmployee">ADD EMPLOYEE</Link></button>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/Management">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
            </div>
        </>
    )
}
export default Employee