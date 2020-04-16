import React from 'react';
import { Link } from 'react-router-dom';
import './More.scss';

// Components
import Card from '../Card/Card';

// Images
import About from '../../assets/img/about.jpg';
import Speakers from '../../assets/img/speakers.jpg';
import Calendar from '../../assets/img/calendar.jpg';
import Partner from '../../assets/img/partner.jpg';


const More = () => {
    return (
        <section className="SectionMore">
            <div className="SectionMore-Inner">
                <div className="SectionMore-ContainerDescription">
                    <p className="SectionMore-About">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius maxime natus, qui doloremque aliquid labore corporis 
                    modi non amet repellat expedita fugiat eum, aut libero totam 
                    veniam sed ullam ut tenetur. Impedit ut doloribus perferendis 
                    ipsum, amet quasi omnis, ducimus necessitatibus expedita magnam 
                    enim consequatur repellendus, delectus earum iste dolorem eius 
                    sequi asperiores beatae laboriosam doloremque sit. Consequuntur 
                    laborum dolores architecto dolorem iusto hic tenetur. Nobis, omnis 
                    dolores vero sed.</p>
                    <Link className="Btn">Saznaj više</Link>
                </div>
                <div className="SectionMore-Cards">
                    <Card image={About} altText="About">O tjednu karijera</Card>
                    <Card image={Speakers} altText="Speakers">Izlagači</Card>
                    <Card image={Calendar} altText="Calendar">Raspored događanja</Card>
                    <Card image={Partner} altText="Partner">Partneri</Card>
                </div>
            </div>
        </section>
    );
}

export default More;