import React from 'react';
import { SectionLastYear, SectionLastYearInner, SectionLastYearTitle, SectionLastYearContainerBottom, SectionLastYearDescription, SectionLastYearImage } from './LastYearStyle';

// Assets
import lyImg from '../../assets/img/last-year.jpg';

const LastYear = () => {
    return (
        <SectionLastYear>
            <SectionLastYearInner>
                <SectionLastYearTitle>FOI tjedan karijera 2019</SectionLastYearTitle>
                <SectionLastYearContainerBottom>
                    <SectionLastYearDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur 
                    illum voluptatum magnam, unde eum modi dolorum similique earum beatae 
                    ullam cum, quos accusantium odit optio, neque in cumque quasi doloribus? 
                    Illo ut facere placeat totam animi illum libero, in perferendis ullam ab 
                    itaque fuga? Non iusto quis officiis tempora, officia eum provident quo? 
                    Suscipit vitae tempora aspernatur quos voluptatibus necessitatibus.</SectionLastYearDescription>
                    <SectionLastYearImage lyImg={lyImg} />
                </SectionLastYearContainerBottom>
            </SectionLastYearInner>
        </SectionLastYear>
    );
}

export default LastYear;