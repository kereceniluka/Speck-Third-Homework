import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderMain, HeaderMainInner, LogoContainer, LogoContainerImage, HeaderMainNav, HeaderMainNavList, HeaderMainNavListItem, HeaderMainNavLink } from './HeaderStyle';

// Assets
import logo from '../../assets/img/logo.png';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    registration: 'Register',
    login: 'Login',
    logout: 'Logout',
}

const Header = () => {

    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push('/');
    }

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
                        {localStorage.getItem('token') === null ?
                            <>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink to="/registration">{links.registration}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink to="/login">{links.login}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                            </> 
                            : 
                            <>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink to="/logout" onClick={logout}>{links.logout}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                            </>
                        }
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;