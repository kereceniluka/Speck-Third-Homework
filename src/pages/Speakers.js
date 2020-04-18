import React from 'react';

// Components
import CardsGrid from '../components/CardsGrid/CardsGrid';
import InfoBox from '../components/InfoBox/InfoBox';

// Assets
import speakersIcon from '../assets/img/speakers-icon.png';

// Data
import speakers from '../lib/speakers';


const Speakers = () => {
    return (
        <>
            <h1 className="PageTitle">Sudionici</h1>
            <CardsGrid>
                {speakers.map(speaker => <InfoBox
                                            key={speaker.id}
                                            isTypeEvent={false}
                                            icon={speakersIcon} 
                                            title={speaker.title}
                                            about={speaker.about}
                                            link={speaker.link} />
                )}
            </CardsGrid>
        </>
    );
}

export default Speakers;