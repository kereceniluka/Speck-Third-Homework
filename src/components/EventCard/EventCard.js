import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.scss';


const EventCard = props => {
    return (
        <div class="InfoBox">
            <div class="InfoBox-Header">
                <div class="InfoBox__EventIcon"></div>
                <h2 class="InfoBox__Heading">{props.title}</h2>
            </div>
            <div class="InfoBox-Information">
                <div class="Information-LeftBox">
                    <div class="Information__Icon"></div>
                    <p class="Information__Text">{props.location}</p>
                </div>
                <div class="Information-RightBox">
                    <div class="Information__Icon"></div>
                    <p class="Information__Text">{props.dateTime}</p>
                </div>
            </div>
            <div class="InfoBox__Text">
                <p>{props.about}</p>
            </div>
            <div class="InfoBox__Footer">
                <Link class="InfoBox__Btn-Join">{props.link}</Link>
            </div>
        </div>
    );
};

export default EventCard;
