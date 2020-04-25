import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderMain, HeaderMainInner, LogoContainer, LogoContainerImage, HeaderMainNav, HeaderMainNavList, HeaderMainNavListItem } from './HeaderStyle';

// Assets
import logo from '../../assets/img/logo.png';

const links = {
    speakers: 'Sudionici',
    events: 'Događaji',
    contact: 'Kontakt',
    sign_in: 'Prijavi se'
}

const Header = () => {
    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainer to="/">
                    <LogoContainerImage logoImg={logo} />
                </LogoContainer>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        <HeaderMainNavListItem>
                            <NavLink to="/speakers" activeStyle={{ color: '#9e7911' }}>{links.speakers}</NavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <NavLink to="/events" activeStyle={{ color: '#9e7911' }}>{links.events}</NavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <NavLink to="/contact" activeStyle={{ color: '#9e7911' }}>{links.contact}</NavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <NavLink to="/sign-in" activeStyle={{ color: '#9e7911' }}>{links.sign_in}</NavLink>
                        </HeaderMainNavListItem>
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;