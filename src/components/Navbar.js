import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo.svg"
import cart from "../cart.png"

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={logo} alt="store" className="navbar-logo" />
            </Link>
            <div className="nav-item">
                <Link to="/" className="nav-link">
                    Products
                </Link>
            </div>
            <Link to="/cart" >
                <div className="button-container">
                    <img src={cart} alt="store" className="cart-logo" />
                    my cart
                </div>
            </Link>
        </div >
    );
}

