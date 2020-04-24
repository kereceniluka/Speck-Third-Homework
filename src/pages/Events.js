import React, { useState, useEffect } from 'react';

// Components
import CardsGrid from '../components/CardsGrid/CardsGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/LoadingIcon/LoadingIcon';

// Assets
import eventIcon from '../assets/img/event-icon.png';

// Data
import eventsData from '../lib/events';

const Events = () => {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsData);
        }, 1000);
    }, []);


    const searchInputHandler = e => {
        setSearch(e.target.value);
    }

    const filteredEventCards = events.filter(event => event.title.toLowerCase().startsWith(search.toLowerCase()));

    const eventCards = filteredEventCards.map(eventCard => <InfoBox
                                                                key={eventCard.id}
                                                                isTypeEvent={true}
                                                                icon={eventIcon}
                                                                title={eventCard.title} 
                                                                location={eventCard.location} 
                                                                dateTime={eventCard.dateTime} 
                                                                about={eventCard.about} 
                                                                link={eventCard.link} />);


    return (
        <>
            <h1 className="PageTitle">Događaji</h1>
            <SearchBar searchType="Search events..." onInputChange={searchInputHandler}/>
            {events.length === 0 ? <Loader /> : <CardsGrid>{eventCards}</CardsGrid>}    
        </>
    );
}

export default Events;