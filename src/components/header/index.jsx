import React from "react";
import "./header.scss";

function Header () {
    return (
        <header>
            <nav>
                <h2>Alexeis ROCHA</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;