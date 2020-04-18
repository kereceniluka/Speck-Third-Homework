import React from 'react';
import { Link } from 'react-router-dom';
import './InfoBox.scss';


const displayInformationSection = props => {
    let informationSection = '';

    informationSection = (
        <div className="InfoBox__Information">
            <div className="InfoBox__Information-Inner">
                <div className="InfoBox__Information-Icon InfoBox__Information-Icon_Location"></div>
                <span className="InfoBox__Information-Text">{props.location}</span>
            </div>
            <div className="InfoBox__Information-Inner">
                <div className="InfoBox__Information-Icon InfoBox__Information-Icon_Time"></div>
                <span className="InfoBox__Information-Text">{props.dateTime}</span>
            </div>
        </div>
    );

    return informationSection;
}

const InfoBox = props => {
    return (
        <div className="InfoBox">
            <div className="InfoBox__Header">
                <img className="InfoBox__Icon" src={props.icon} alt="Speakers-Icon"/>
                <h2 className="InfoBox__Title">{props.title}</h2>
            </div>
            {props.isTypeEvent ? displayInformationSection(props) : null}
            <p className="InfoBox__About">{props.about}</p>
            <div className="InfoBox__Footer">
                <Link className="InfoBox__Btn-Join">{props.link}</Link>
            </div>
        </div>
    );
}

export default InfoBox;