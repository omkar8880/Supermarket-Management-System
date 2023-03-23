import React from 'react'
import pic1 from ".././Images/1.jpg"
import pic2 from ".././Images/2.jpg"
import pic3 from ".././Images/3.jpg"
import pic4 from ".././Images/4.jpg"
import pic5 from ".././Images/5.jpg"
import pic6 from ".././Images/6.jpg"
import pic7 from ".././Images/7.jpg"
import pic8 from ".././Images/8.jpg"
import pic9 from ".././Images/9.jpg"
import AvenueLOGO from ".././Images/AvenueLOGO.png"
import LoginAdmin from './LoginAdmin.js'
import LoginSales from './LoginSales.js'
import LoginCashier from './LoginCashier.js'
import Homepage from './Homepage.js'
import Products from './Products.js'
import AddProducts from './AddProducts.js'
import AddEmployee from './AddEmployee.js'
import { Routes, Route } from "react-router-dom";
import Cashier from './Cashier.js'
import EditProducts from './EditProducts.js'
import LoginSelection from './LoginSelection.js'
import BillingRecipt from './BillingRecipt.js'
import Management from './Management.js'
import Employee from './Employee.js'
import ProductsList from './ProductsList.js'
import EmployeeList from './EmployeeList.js'
import ViewProduct from './ViewProduct.js'
import ViewEmployee from './ViewEmployee.js'

class Main extends React.Component {
    render() {
        return (
            <>
                <header className="header" style={{ height: "25vh", width: "100vw", backgroundColor: "#E7886A", overflow: "hidden" }}>
                    <nav>
                        <a href="/" id="heading-topic"><img style={{ height: "5vh" }} src={AvenueLOGO} alt="" /></a>
                        <a href="/" id="heading-logo" style={{transform:"translateX(0%)", color:"#E7886A"}}>&nbsp;</a>
                    </nav>
                    <hr id="header-hr" />
                    <div className="header-mainDiv">
                        <div className="header-images">
                            <img style={{ height: "14vh", width: "10vw" }} src={pic1} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic2} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic3} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic4} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic5} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic6} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic7} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic8} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic9} alt="" />
                        </div>
                        <div className="header-images2">
                            <img style={{ height: "14vh", width: "10vw" }} src={pic1} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic2} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic3} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic4} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic5} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic6} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic7} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic8} alt="" />
                            <img style={{ height: "14vh", width: "10vw" }} src={pic9} alt="" />
                        </div>
                    </div>
                </header>
    
                <div>
                    <main style={{ height: "70vh", width: "100vw", background: "linear-gradient(0deg, #C5C5F1, #C5C5F1)" }}>
                        <Routes>
                            {/* { setHeading("hrishubh") && <Route  exact path={`/`} element={<Homepage ></ Homepage>} ></ Route> } */}
                            <Route path={`/`} element={<Homepage />} />
                            <Route path={`/LoginAdmin`} element={<LoginAdmin />} />
                            <Route path={`/LoginSales`} element={<LoginSales />} />
                            <Route path={`/LoginCashier`} element={<LoginCashier />} />
                            <Route path={`/LoginSelection`} element={<LoginSelection />} />
                            <Route path={`/Products`} element={<Products />} />
                            <Route path={`/AddProducts`} element={<AddProducts />} />
                            <Route path={`/EditProducts`} element={<EditProducts />} />
                            <Route path={`/Cashier`} element={<Cashier />} />
                            <Route path={`/BillingRecipt`} element={<BillingRecipt />} />
                            <Route path={`/Management`} element={<Management />} />
                            <Route path={`/Employee`} element={<Employee />} />
                            <Route path={`/ProductsList`} element={<ProductsList />} />
                            <Route path={`/EmployeeList`} element={<EmployeeList />} />
                            <Route path={`/AddEmployee`} element={<AddEmployee />} />
                            {/* <Route path={`/ViewProduct`} element={<ViewProduct />} /> */}
                            <Route path={`/ViewEmployee`} element={<ViewEmployee />} />
    
                        </Routes>
                    </main>
                </div>
    
                <footer style={{ height: "4vh", width: "100vw", backgroundColor: "#000080" }}>
                    <p>Avenue Supermarket Management System - 2.1.1</p>
                </footer>
            </>
        )
    }
}

export default Main