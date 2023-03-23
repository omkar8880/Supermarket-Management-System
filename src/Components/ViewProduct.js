import React from "react";
import { Link } from "react-router-dom";

class ViewProduct extends React.Component {
    redner() {
        return (
            <>
                <div className="main-wrapper">
                    <div className="view-products-container">
                        <form className="view-products-form" action="">
                            <p align="center" for="PName">
                                Product Name :{" "}
                                <input type="text" id="PName" name="PName" />
                                <br />
                            </p>
                            <p align="center" for="Pcode">
                                Product Code &nbsp;:{" "}
                                <input type="text" id="Pcode" name="Pcode" />
                                <br />
                            </p>
                            <p align="center" for="Pcost">
                                Product Cost &nbsp;&nbsp;:{" "}
                                <input type="text" id="Pcost" name="Pcost" />
                                <br />
                            </p>
                            <p align="center" for="Pdetails">
                                Details
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                                <input
                                    type="text"
                                    id="Pdetails"
                                    name="Pdetails"
                                />
                                <br />
                            </p>
                            <p align="center" for="Pavailability">
                                Availability
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                                <input
                                    type="text"
                                    id="Pavailability"
                                    name="Pavailability"
                                />
                                <br />
                            </p>
                        </form>
                        <form className="add-products-form" action="">
                            <div className="products-buttons">
                                <button type="button">
                                    {" "}
                                    <Link
                                        to="/EditProducts"
                                        style={{
                                            color: "rgb(0, 0, 128)",
                                            textDecoration: "none",
                                        }}
                                    >
                                        UPDATE THIS PRODUCT
                                    </Link>{" "}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-navigator product-navigator">
                    <button className="button1">
                        <Link className="button1-link" to="/Products">
                            BACK
                        </Link>
                    </button>
                    <button className="button2">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </button>
                </div>
            </>
        );
    }
}
export default ViewProduct;
