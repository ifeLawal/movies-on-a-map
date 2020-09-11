import React from 'react'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const isActive = (match, location) => {
    console.log(match);
    console.log(location);
    return match && match.url === location.pathname;
}

export default function Navbar() {
    return (
        <div className="navbar">
            <Col className="justify-content-center d-flex">
                <NavLink 
                    to="/"
                    isActive={isActive}
                >
                    <div className="nav-link">List View</div>
                </NavLink>
                <NavLink 
                    to="/map-view" 
                    className="ml-3"
                    isActive={isActive}
                >
                    <div className="nav-link">Map View</div>
                </NavLink>
            </Col>
        </div>
    )
}
