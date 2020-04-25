import React, { useEffect } from 'react';
import Progress from 'rsup-progress';

// Components
import Hero from '../components/Hero/Hero';
import More from '../components/More/More';
import LastYear from '../components/LastYear/LastYear';

const Home = () => {

    const progress = new Progress({
        color: '#9e7911'
    });

    useEffect(() => {
        progress.start();
        setTimeout(() => {
            progress.end();
        }, 2000);
    }, [progress]);

    return (
        <>
            <Hero />
            <More />
            <LastYear />
        </>
    );
}

export default Home;