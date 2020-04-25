import styled from 'styled-components';

export const HeaderMain = styled.header `
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    background: #ffffff;
    color: #000000;
    z-index: 100;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const HeaderMainInner = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
`;

export const LogoContainer = styled.a.attrs(props => ({
    href: props.to
})) `
    width: 80px;
    height: 70px;
`;

export const LogoContainerImage = styled.img.attrs(props => ({ 
    src: props.logoImg,
    alt: 'Logo' 
})) `
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const HeaderMainNav = styled.nav `
    display: none;

    @media only screen and (min-width: 1024px){
        display: block;
        float: right;
    }
`;

export const HeaderMainNavList = styled.ul `
    list-style: none;
`;

export const HeaderMainNavListItem = styled.li `
    display: inline-flex;

    &:not(:last-child) {
        margin-right: 35px;
    }
`;

/* export const HeaderMainNavLink = styled(NavLink).attrs(props => ({
    to: props.to
})) `
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: color 0.3s ease-out;

    &:hover {
        color: #c59613;
    }

    &:active {
        color: #c59613;
    }
`; */