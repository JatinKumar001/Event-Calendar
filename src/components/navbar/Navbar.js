import React from 'react'
import Logo from '../../img/10timeslogo.png'
import "./NavbarStyle.css"

export default function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='mini-logo'>
                    <img src={Logo} className='mlogo' alt='logo' />
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>Event</li>
                        <li>Calendar</li>
                        <li>Explore</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
