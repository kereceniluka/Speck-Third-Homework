import React, { useState, useEffect } from 'react';
import { PageTitle } from '../lib/styles/GeneralStyles';

// Components
import CardsGrid from '../components/CardsGrid/CardsGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/LoadingIcon/LoadingIcon';
import SearchBar from '../components/SearchBar/SearchBar';

// Assets
import speakersIcon from '../assets/img/speakers-icon.png';

// Services
import { getSpeakers } from '../services/speakers';

const Speakers = () => {

    const [speakers, setSpeakers] = useState([]);
    const [search, setSearch] = useState('');
    

    useEffect(() => {
        getSpeakers(localStorage.getItem('token'))
            .then(res => setSpeakers(res.speakers));
    }, []);


    const searchInputHandler = e => {
        setSearch(e.target.value);
    }

    const filteredSpeakerCards = speakers.filter(speaker => speaker.title.toLowerCase().startsWith(search.toLowerCase()));

    const speakerCards = filteredSpeakerCards.map(speakerCard => <InfoBox 
                                                                    key={speakerCard._id}
                                                                    isTypeEvent={false}
                                                                    icon={speakersIcon}
                                                                    title={speakerCard.title}
                                                                    about={speakerCard.about}
                                                                    link={speakerCard.link} />);

    return (
        <>
            <PageTitle>Speakers</PageTitle>
            <SearchBar searchType="Search speakers..." onInputChange={searchInputHandler} isDisabled={speakers.length === 0 ? true : false} /> 
            {speakers.length === 0 ? <Loader /> : <CardsGrid>{speakerCards}</CardsGrid>}
        </>
    );
}

export default Speakers;