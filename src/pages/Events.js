import React from 'react';

// Components
import EventCard from '../components/EventCard/EventCard';
import CardsGrid from '../components/CardsGrid/CardsGrid';

// Data
import events from '../lib/events';

const Events = () => {
    return (
        <>
            <CardsGrid>
                {events.map(event => <EventCard 
                                        title={event.title} 
                                        location={event.location} 
                                        dateTime={event.dateTime} 
                                        about={event.about} 
                                        link={event.link} /> 
                )}
            </CardsGrid>
        </>
    );
}

export default Events;