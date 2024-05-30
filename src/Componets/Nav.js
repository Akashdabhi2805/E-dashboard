import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">update Products</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
            </ul>
        </div>
    )

}

export default Nav