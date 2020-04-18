import React from 'react';
import './Card.scss';

const Card = props => {
    return (
        <div className="AboutCard">
            <img className="AboutCard__Image" 
                src={props.image} 
                alt={props.altText} />
            <p className="AboutCard__Title">{props.children}</p>
        </div>
    );
}

export default Card;