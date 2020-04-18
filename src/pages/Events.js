import React from 'react';

// Components
import CardsGrid from '../components/CardsGrid/CardsGrid';
import InfoBox from '../components/InfoBox/InfoBox';

// Assets
import eventIcon from '../assets/img/event-icon.png';

// Data
import events from '../lib/events';

const Events = () => {
    return (
        <>
            <h1 className="PageTitle">Događaji</h1>
            <CardsGrid>
                {events.map(event => <InfoBox
                                        key={event.id}
                                        isTypeEvent={true}
                                        icon={eventIcon}
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