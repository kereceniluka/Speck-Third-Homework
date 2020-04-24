import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingIcon.scss';

const LoadingIcon = () => {
    return (
        <Loader
            className="Loader"
            type="ThreeDots" 
            color="#c59613" 
            height={100} 
            width={100}
        />
    );
}

export default LoadingIcon;