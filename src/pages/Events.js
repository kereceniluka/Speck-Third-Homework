import React, { useState, useEffect } from 'react';
import { PageTitle } from '../lib/styles/GeneralStyles';

// Components
import CardsGrid from '../components/CardsGrid/CardsGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/LoadingIcon/LoadingIcon';

// Assets
import eventIcon from '../assets/img/event-icon.png';

// Services
import { getEvents } from '../services/events';

const Events = () => {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    

    useEffect(() => {
        getEvents(localStorage.getItem('token'))
            .then(res => setEvents(res.events));
    }, []);


    const searchInputHandler = e => {                        
        setSearch(e.target.value);
    }

    const filteredEventCards = events.filter(event => event.title.toLowerCase().startsWith(search.toLowerCase()));

    const eventCards = filteredEventCards.map(eventCard => <InfoBox
                                                                key={eventCard._id}
                                                                isTypeEvent={true}
                                                                icon={eventIcon}
                                                                title={eventCard.title} 
                                                                location={eventCard.location} 
                                                                dateTime={eventCard.dateTime} 
                                                                about={eventCard.about} 
                                                                link={eventCard.link} />);


    return (
        <>
            <PageTitle>Events</PageTitle>
            <SearchBar searchType="Search events..." onInputChange={searchInputHandler} isDisabled={events.length === 0 ? true : false} />
            {events.length === 0 ? <Loader /> : <CardsGrid>{eventCards}</CardsGrid>}    
        </>
    );
}

export default Events;