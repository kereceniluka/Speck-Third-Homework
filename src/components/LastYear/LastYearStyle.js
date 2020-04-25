import styled from 'styled-components';

export const SectionLastYear = styled.section `
    width: 100%;
    background-color: #efefef;
`;

export const SectionLastYearInner = styled.div `
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const SectionLastYearTitle = styled.h6 `
    font-weight: bold;
    font-size: 26px;
    margin: 60px 0;
`;

export const SectionLastYearContainerBottom = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 35px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 25px 0;
    }
`;

export const SectionLastYearDescription = styled.p `
    text-align: justify;
    font-weight: bold;
    width: 45%;
    margin-right: 40px;

    @media screen and (max-width: 768px) {    
        width: 80%;
        margin-right: 0;
        margin-bottom: 40px;
    }
`;

export const SectionLastYearImage = styled.div `
    width: 50%;
    height: 300px;
    background: url(${props => props.lyImg}) no-repeat center;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 768px) { 
        width: 80%;
    }
`;