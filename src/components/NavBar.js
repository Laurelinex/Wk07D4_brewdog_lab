import React from 'react';
import { Link} from 'react-router-dom'

const NavBar = () => {
    return(
    <ul>
        <li>
            <Link to="/">All Beers</Link>
        </li>
    </ul>
    )
};

export default NavBar;