import React from 'react';
import { Link, HashRouter } from 'react-router-dom';


const Navigation =() =>(
<HashRouter>
<nav>
    <div className="nav-wrapper">
        <a className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/" ><h3>Welcome to React</h3></Link></li>
            <li><Link to="/books" ><h3>Books Store</h3></Link></li>
            <li><Link to="/banks" ><h3>Banks</h3></Link></li>
            <li><Link to="/lenova" ><h3>Lenova Mobiles</h3></Link></li>
            <li><Link to="/apple" ><h3>Apple Mobiles</h3></Link></li>

        </ul>
    </div>
</nav>
</HashRouter>
);
 
export default Navigation;