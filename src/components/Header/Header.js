import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Header.scss';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    contact: 'Kontakt',
    sign_in: 'Prijavi se'
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain__Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer-Image" src={Logo} alt="Logo"/>
                </Link>
                <nav className="HeaderMain-Nav">
                    <ul className="HeaderMain-NavList">
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/speakers">{links.speakers}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/events">{links.events}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/contact">{links.contact}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/sign-in">{links.sign_in}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;