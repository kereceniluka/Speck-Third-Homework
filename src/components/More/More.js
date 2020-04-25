import React from 'react';
import { SectionMore, SectionMoreInner, SectionMoreContainerDescription, SectionMoreAbout, SectionMoreCards } from './MoreStyle';
import { Btn } from '../../lib/styles/GeneralStyles';

// Components
import Card from '../Card/Card';

// Images
import about from '../../assets/img/about.jpg';
import speakers from '../../assets/img/speakers.jpg';
import calendar from '../../assets/img/calendar.jpg';
import partner from '../../assets/img/partner.jpg';


const More = () => {
    return (
        <SectionMore>
            <SectionMoreInner>
                <SectionMoreContainerDescription>
                    <SectionMoreAbout>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius maxime natus, qui doloremque aliquid labore corporis 
                    modi non amet repellat expedita fugiat eum, aut libero totam 
                    veniam sed ullam ut tenetur. Impedit ut doloribus perferendis 
                    ipsum, amet quasi omnis, ducimus necessitatibus expedita magnam 
                    enim consequatur repellendus, delectus earum iste dolorem eius 
                    sequi asperiores beatae laboriosam doloremque sit. Consequuntur 
                    laborum dolores architecto dolorem iusto hic tenetur. Nobis, omnis 
                    dolores vero sed.</SectionMoreAbout>
                    <Btn>Saznaj više</Btn>
                </SectionMoreContainerDescription>
                <SectionMoreCards>
                    <Card image={about} altText="About">O tjednu karijera</Card>
                    <Card image={speakers} altText="Speakers">Izlagači</Card>
                    <Card image={calendar} altText="Calendar">Raspored događanja</Card>
                    <Card image={partner} altText="Partner">Partneri</Card>
                </SectionMoreCards>
            </SectionMoreInner>
        </SectionMore>
    );
}

export default More;