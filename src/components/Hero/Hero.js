import React from 'react';
import { SectionHero, SectionHeroContainer, SectionHeroTitle, SectionHeroOrganizer, SectionHeroDate } from './HeroStyle';
import { Btn } from '../../lib/styles/GeneralStyles';

// Assets
import eventImg from '../../assets/img/event.jpg';

const Hero = () => {
    return (
        <SectionHero eventImg={eventImg}>
            <SectionHeroContainer>
                <SectionHeroTitle>Tjedan karijera</SectionHeroTitle>
                <SectionHeroOrganizer>FOI</SectionHeroOrganizer>
                <SectionHeroDate>20.10.2020. - 26.10.2020.</SectionHeroDate>
                <Btn>Prijavi se</Btn>
            </SectionHeroContainer>
        </SectionHero>
    );
}

export default Hero;