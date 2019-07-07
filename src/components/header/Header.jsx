import React, {useEffect} from "react";
import {withRouter} from "react-router";
import { configureAnchors, goToTop } from 'react-scrollable-anchor'

import "./Header.scss";

configureAnchors({offset: -60, scrollDuration: 600})

function Header({ location: { hash } }){
    console.log('11',hash);
    return (
        <header>
           <a className="logo">Eko <span>Engineering</span></a>
           <nav>
               <a href="/#" className={hash===''?'selected':''}>Home</a>
               <a href="/#about" className={hash==='#about'?'selected':''} >About</a>
               <a href="/#tech" className={hash==='#tech'?'selected':''}>Tech</a>
               <a href="/#ecosystem" className={hash==='#ecosystem'?'selected':''} >Ecosystem</a>
               <a href="/#careers" className={hash==='#careers'?'selected':''} >Careers</a>
               <a href="/#contact" className={hash==='#contact'?'selected':''} >Contact</a>
           </nav>
        </header>
    )


}

export default withRouter(Header);
