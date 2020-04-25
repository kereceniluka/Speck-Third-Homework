import styled from 'styled-components';

export const SectionMore = styled.section `
    width: 100%;
`;

export const SectionMoreInner = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const SectionMoreContainerDescription = styled.div `
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionMoreAbout = styled.p `
    margin: 50px 0;
    text-align: justify;
    font-weight: bold;
`;

export const SectionMoreCards = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 20px;
    margin: 80px 0;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        gap: 30px 0;
    }
`;