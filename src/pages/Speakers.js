import React from 'react';

// Components
import SpeakerCard from '../components/SpeakerCard/SpeakerCard';
import CardsGrid from '../components/CardsGrid/CardsGrid';

// Data
import speakers from '../lib/speakers';

const Speakers = () => {
    return (
        <>
            <CardsGrid>
                {speakers.map(speaker => <SpeakerCard 
                                            title={speaker.title}
                                            about={speaker.about}
                                            link={speaker.link} />
                )}
            </CardsGrid>
        </>
    );
}

export default Speakers;