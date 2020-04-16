import React from 'react';
import { Link } from 'react-router-dom';
import './SpeakerCard.scss';


const SpeakerCard = props => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox__SpeakerIcon"></div>
                <h2 className="InfoBox__Title">{props.title}</h2>
            </div>
            <p className="InfoBox__About">{props.about}</p>
            <div className="InfoBox__Footer">
                <Link class="InfoBox__Btn-Join">{props.link}</Link>
            </div>
        </div>
    );
};

export default SpeakerCard;