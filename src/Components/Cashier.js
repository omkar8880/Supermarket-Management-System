import React,{useState } from 'react'
import { Component } from 'react'
import plus from ".././Images/plus.png"
import { Link } from "react-router-dom"
import * as ReactBootStrap from 'react-bootstrap'



const Cashier = () => {
    let rows = []
    const [changed,setchanged] = useState([])
    const [P_Code,setP_Code]=useState('')
    const [data, setdata]= useState('')

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            P_Code:P_Code,
        })
    };

    const validateProduct = () => {
        fetch('http://localhost/Avenue/ProdBycode',requestOptions).then((response)=> {
            if(response.status===404){
                alert("Please enter valid Product Details!");
            }
            if(response.status===200){
                response.json().then(function(data) {
                    setdata(data);
                    addrows(data);
                });
                return;
            }  
        })
    }

    const addrows = (rowAdded) => {
        rows.push(
            {   
                name: rowAdded.P_Name,
                code: rowAdded.P_Code,
                quantity: rowAdded.quantity,
                price: rowAdded.P_Price
            } 
        )
        setchanged(rows)
        Component.forceUpdate();
    }
  

    return (
        <>
            <div className="main-wrapper2" >
                <div className="main-cashier-wrapper">
                    <div className="cashier-container">
                        <form className="products-form cashier-form" action="">
                            <p align="center" htmlFor="ProductName">Product Code : <input onChange={(e)=>setP_Code(e.target.value)} type="text" id="P_Code" name="P_Code" />
                                <span id="cashier" style={{ display: "inline" }}>
                                    <button onClick={validateProduct} type="button" value="Post" ><img height="25vh" src={plus} alt="" /></button>
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
                <p align="center">Purchased Products</p>
                <ReactBootStrap.Table striped bordered hover id='fullTable'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Quantity</th>
                            <th>Price per product</th>
                            <th>Cost</th>
                        </tr>
                    </thead > 
                    <tbody id='tableData'>
                        {changed.map((rows, index) => (
                            <tr key={index}>
                                <td>{rows.name}</td>
                                <td>{rows.code}</td>
                                <td>{rows.quantity}</td>
                                <td>{rows.price}</td>
                                <td>{rows.price*rows.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
            
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button className="button2"><Link className='button1-link' to="/BillingRecipt">Create Bill</Link></button>
            </div>

        </>
    )
}
export default Cashier