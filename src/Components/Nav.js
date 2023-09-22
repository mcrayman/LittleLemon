import { Link } from 'react-router-dom';

function Nav() {
    return ( 
        <nav>
            <ul className="headernav">
                <li><Link to="/home">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
     );
}

export default Nav;