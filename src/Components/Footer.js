import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer>
            <img src="lemon.png" alt="lemon" height='230px'/>
            <ul className="doormat">
                <li><b>Doormat Navigation</b></li>
                <li><Link to="/home">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            
            <ul className="doormat">
                <li><b>Social Media</b></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
               
            </ul>
        </footer>
     );
}

export default Footer;