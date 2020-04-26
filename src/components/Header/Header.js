import React from 'react';
import { HeaderMain, HeaderMainInner, LogoContainer, LogoContainerImage, HeaderMainNav, HeaderMainNavList, HeaderMainNavListItem, HeaderMainNavLink } from './HeaderStyle';

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
                    <LogoContainerImage src={logo} />
                </LogoContainer>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink to="/speakers">{links.speakers}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink to="/events">{links.events}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink to="/contact">{links.contact}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink to="/sign-in">{links.sign_in}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;