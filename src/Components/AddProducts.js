import React, {useState} from 'react'
import { Link } from "react-router-dom"

const AddProducts = () => {

    const [P_Name,setP_Name]=useState('')
    const [P_Code,setP_Code]=useState('')
    const [P_Price,setP_Price]=useState('')
    const [Description,setDescription]=useState('')
    const [P_Avail,setP_Avail]=useState('')
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            P_Name:P_Name,
            P_Code:P_Code,
            Description:Description,
            P_Price:P_Price,
            P_Avail:P_Avail
        })
    };

    const addProduct = () => {
        fetch('http://localhost/Avenue/Create/Prod',requestOptions).then((response)=> {
            if(response.message){
                alert("Please enter Valid Details");
            }
            else {
                // Read point 2 on notes.txt
                window.open('/Products','_self');
                alert("The Product was added successfully!")
                return;
            }
        })
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="add-products-container">
                    <form className="add-products-form" action="">
                        <p align="center" for="PName">Product Name : <input onChange={(e)=>setP_Name(e.target.value)} /><br /></p>
                        <p align="center" for="Pcode">Product Code &nbsp;: <input onChange={(e)=>setP_Code(e.target.value)} /><br /></p>
                        <p align="center" for="Pcost">Product Cost &nbsp;&nbsp;: <input onChange={(e)=>setP_Price(e.target.value)} /><br /></p>
                        <p align="center" for="Pdetails">Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setDescription(e.target.value)} /><br /></p>
                        <p align="center" for="Pavailability">Availability &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input onChange={(e)=>setP_Avail(e.target.value)} /><br /></p>
                        <div className="products-buttons">
                            <button align='' type="button" onClick={addProduct}> ADD PRODUCT </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/Products">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </>
    )
}
export default AddProducts