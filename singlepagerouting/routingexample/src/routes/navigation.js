import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

const Navigations =()=>(
<HashRouter>
<nav>
    <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/"><h3>Welcome</h3></Link></li>
            <li><Link to="/loans"><h3>Loans Section</h3></Link></li>
            <li><Link to="/shopping"><h3>Online Groceries</h3></Link></li>
            <li><Link to="/currency"><h3>Currency Information</h3></Link></li>
            <li><Link to="/autoindustry"><h3>Auto Mobiles</h3></Link></li>
            <li><Link to="/travel"><h3>Travel Agency</h3></Link></li>
        </ul>
    </div>
</nav>
</HashRouter>
);
 
export default Navigations;