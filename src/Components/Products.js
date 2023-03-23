import React, {useState} from 'react'
import { Link } from "react-router-dom"

const Products = (props) => {

    const [P_Name,setP_Name]=useState('')
    const [P_Code,setP_Code]=useState('')
    const [data, setdata] = useState('')


    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            P_Name:P_Name,
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
                });
                // window.open('/ViewProduct','_self');
                {var element = document.getElementById("main-wrapper");
                element.classList.add("mystyle");}
                {element = document.getElementById("mystyle2");
                element.classList.add("mystyle");}
                {element = document.getElementById("check1");
                element.classList.remove("mystyle");
                element = document.getElementById("check2");
                element.classList.remove("mystyle");}
                return;
            }  
        })
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
            {/* {check && <ViewProduct />} */}
            <div className="main-wrapper mystyle" id='check1'>
                <div className="view-products-container">
                    <form className="view-products-form" action="">
                        <p align="center" for="PName">Product Name : <input disabled value={data.P_Name}  type="text" id="PName" name="PName" /><br /></p>
                        <p align="center" for="Pcode">Product Code &nbsp;: <input disabled value={data.P_Code}  type="text" id="Pcode" name="Pcode" /><br /></p>
                        <p align="center" for="Pcost">Product Cost &nbsp;&nbsp;: <input disabled value={data.P_Price}  type="text" id="Pcost" name="Pcost" /><br /></p>
                        <p align="center" for="Pdetails">Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input disabled value={data.Description}  type="text" id="Pdetails" name="Pdetails" /><br /></p>
                        <p align="center" for="Pavailability">Availability &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input disabled value={data.P_Avail}  type="text" id="Pavailability" name="Pavailability" /><br /></p> 
                    </form>
                    <form className="add-products-form" action="">
                        <div className="products-buttons">
                            <button type="button"> <Link to="/EditProducts" style={{color: "rgb(0, 0, 128)",textDecoration: 'none'}}>UPDATE THIS PRODUCT</Link> </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="main-navigator product-navigator mystyle" id='check2'>
                <button className="button1" style={{cursor: 'pointer'}} onClick={back}>BACK</button>
                <button className="button2" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</button>
            </div>









            <div className="main-wrapper " id='main-wrapper'>
                <div className="products-container">
                    <div className="products-heading">
                        <h1>Products Details </h1>
                    </div>
                    <form className="products-form" action="">

                        <p align="center" for="P_Name">Product Name : <input onChange={(e)=>setP_Name(e.target.value)} /><br /></p>
                        <p align="center" for="P_Code">Product Code&nbsp; : <input onChange={(e)=>setP_Code(e.target.value)} /><br /></p>
                        <div className="products-buttons">
                        <button type="button" onClick={validateProduct}>Find Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="products-buttons-out" id='mystyle2'>
            <div className="products-buttons">
                <button style={{position: "relative", top: "-10vh" }}><Link className='button2-link' style={{color: "#000080"}} to="/AddProducts">Add Products</Link></button>
            </div>
            <div className="main-navigator product-navigator">
                <button className="button1"><Link className='button1-link' to="/LoginSelection">BACK</Link></button>
                <button className="button2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
            </div>

        </>
    )
}

export default Products