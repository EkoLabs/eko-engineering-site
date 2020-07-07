import React from "react";
import {withRouter} from "react-router";
import { configureAnchors } from 'react-scrollable-anchor'

import "./Header.scss";

configureAnchors({offset: -60, scrollDuration: 600})

function Header({ location: { hash, pathname } }){
    return (
        <header>
           <a href="/" className="logo">eko <span>Engineering</span></a>
           <nav>
               <a href="/" className={(pathname==='/' && hash==='')?'selected':''}>Home</a>
               <a href="/#about" className={hash==='#about'?'selected':''} >About</a>
               <a href="/#tech" className={hash==='#tech'?'selected':''}>Tech</a>
               <a href="/sonorous" className={pathname.includes('sonorous')?'selected':''}>Open Source</a>
               <a href="/#careers" className={hash==='#careers'?'selected':''} >Careers</a>
               <a href="/#ecosystem" className={hash==='#ecosystem'?'selected':''} >Ecosystem</a>
               <a href="/#contact" className={hash==='#contact'?'selected':''} >Contact</a>
           </nav>
        </header>
    )


}

export default withRouter(Header);
