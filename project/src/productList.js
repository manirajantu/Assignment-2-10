import { useState } from "react";
import React from "react";
import "./App.css";

function ProductList() {

    const [productNo, setProductNo] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productList, setProductList] = useState([]);

    const handleProductNo = (e) => {
        console.log(e.target.value);
        setProductNo(e.target.value);
    };


    const handleProductName = (e) => {
        console.log(e.target.value);
        setProductName(e.target.value);
    };

    const handleProductPrice = (e) => {
        console.log(e.target.value);
        if (e.target.validity.valid) {
        setProductPrice(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductList = [...productList, {productNo, productName, productPrice}];
        setProductList(newProductList);
        setProductNo("");
        setProductName("");
        setProductPrice("");
    };

    console.log("Product No:", productNo);
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
    console.log("Product List", productList);

    return (
        <div className="product-list">
            <h1> Product Number, Price and Input</h1>

            <div className="form-section">
                <form>


                    <table className="table1">
                        <tbody>
                        <tr><td>Code: </td>
                            <td><input className="box" type="text" 
                                placeholder="Product No"
                                name="product-no"
                                onChange={handleProductNo}
                                value={productNo}>
                            </input></td></tr>

                            <tr><td>Product: </td>
                            <td><input className="box" type="text" 
                                placeholder="Product Name"
                                name="product-name"
                                onChange={handleProductName}
                                value={productName}>
                            </input></td></tr>

                            <tr><td>Price: </td>
                            <td><input className="box" type="tel"
                                pattern="^-?[0-9]\d*\.?\d*$"
                                placeholder="Product Price"
                                name="product-price"
                                onChange={handleProductPrice}
                                value={productPrice}>
                            </input></td
                            ><td><button onClick={handleSubmit}>Submit</button></td></tr>
                        </tbody>
                    </table>
                </form>
            </div>

<br>
</br>
<h1> Product List</h1>
<table className="table2">
                        <tbody>
                            <tr>
                                <ul>
                                    {
                                        productList.map((item) => {
                                            return (
                                            <li key={'${item.productName}-${item.productList}'}>
                                               Product Code: {item.productNo}, Product Name: {item.productName}, Price: {item.productPrice}
                                            </li>
                                        );
                                        })}
                                </ul>       


                            </tr>
                        </tbody> </table>





        </div>
    )
}

export default ProductList;