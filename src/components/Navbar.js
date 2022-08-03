import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <NavLink className="navbar-brand ml-5" exact to='/oyodo'>OYODO</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item ">
                        <NavLink className="nav-link " exact to='/'>HOME </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/dapibu'>DAPIBU</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/ultricies'>ULTRICIES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/bibendum'>BIBENDUM</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/megna'>MEGNA</NavLink>
                    </li>

                </ul>

            </div>
        </nav>

    )
}
