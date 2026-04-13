import { useState } from 'react';
import './NavBar.css'
import { HiMiniBars3BottomRight } from "react-icons/hi2";

interface NavBarProps {
    logo: string;
    items: Array<string>;
}

const NavBar = ({ logo, items }: NavBarProps) => {
    const [show , setShow]= useState <boolean>(false)
    return (
        <>
        <nav>
            <div className="logo">
                <img src='/assets/img/logo.png' />
                <h1>{logo}</h1>
            </div>
            <ul className="nav-main">
                {items.map((item, index) => {
                    return (
                        <li className="nan-items" key={index}>{item}</li>
                    )
                })}
            </ul>
            <button className="bars" onClick={()=>setShow(!show)}><HiMiniBars3BottomRight /></button>
        </nav>
        <div className={`nav-menu ${show? "showmune" : ""}`}>
            <button className="close-btn" onClick={() => setShow(false)}>X</button>
            <div className="logo">
                <img src='/assets/img/logo.png' />
                <h1>{logo}</h1>
            </div>
            <ul className="nav-main">
                {items.map((item, index) => {
                    return (
                        <li className="nan-items" key={index}>{item}</li>
                    )
                })}
            </ul>

        </div>
        
        
        
        
        
        
        </>
    )
}

export default NavBar
