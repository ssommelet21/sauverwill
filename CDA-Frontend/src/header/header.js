import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <div className="main-header">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact>
                            Musiques
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/films">
                            Films
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header