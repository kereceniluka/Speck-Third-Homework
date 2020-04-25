import React from 'react';
import { MainContainer } from './MainStyle';

const Main = props => {
    return (
        <MainContainer>
            {props.children}
        </MainContainer>
    );
}

export default Main;