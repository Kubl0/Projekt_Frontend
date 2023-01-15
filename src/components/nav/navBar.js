import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navBar">
            <h1>Coctails</h1>
            <Link to="/">Strona główna</Link>
        </div>
    );
}