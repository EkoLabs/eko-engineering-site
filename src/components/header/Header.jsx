import React from "react";
import "./Header.scss";

function Header(){
    return (
        <header>
           <a className="logo">Eko <span>Engineering</span></a>
           <nav>
               <a href="/" className="selected">Home</a>
               <a href="/about">About</a>
               <a href="/tech">Tech</a>
               <a href="/careers">Careers</a>
               <a href="/ecosystem">Ecosystem</a>
               <a href="/contact">Contact</a>
           </nav>
        </header>
    )


}

export default Header;
