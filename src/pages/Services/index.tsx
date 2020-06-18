import React, {useState} from 'react';

import TitleSection from '../../components/TitleSection';

import {ContentSectionServices, Container, ServicesSection, ServiceBox, ContentBox, ContentBoxIconWeb,
ContentBoxIconApi, ContentBoxIconMobile, ContentBoxText} from './styles';

const Services: React.FC = () => {
    const [hoveredWebBox, setHoveredWebBox] = useState(false);
    const [hoveredApiBox, setHoveredApiBox] = useState(false);
    const [hoveredMobileBox, setHoveredMobileBox] = useState(false);

    const toggleHoverWebBox = (event: boolean) => {  
        if(event){
            setHoveredWebBox(true);
        }else{
            setHoveredWebBox(false);
        }
    };

    const toggleHoverApiBox = (event: boolean) => {
        if(event){
            setHoveredApiBox(true);
        }else{
            setHoveredApiBox(false);
        }
    };

    const toggleHoverMobileBox = (event: boolean) => {
        if(event){
            setHoveredMobileBox(true);
        }else{
            setHoveredMobileBox(false);
        }
    };

    return(
        <ServicesSection id="services">
            <Container>
            <TitleSection title="Services" />
            <ContentSectionServices>
                <ServiceBox data-aos="fade-up" data-aos-easing="ease-in-out" onMouseEnter={() => toggleHoverWebBox(true)} onMouseLeave={() => toggleHoverWebBox(false)}>
                    <ContentBox>
                        <ContentBoxIconWeb isHovered={hoveredWebBox} >
                            <div/>
                        </ContentBoxIconWeb>
                            <h1>Web Development</h1>
                        <ContentBoxText>
                            <p>I develop ReactJs websites in order to provide the best performance provided by the Framework.</p>
                        </ContentBoxText>
                        
                        
                    </ContentBox>    
                </ServiceBox>
                <ServiceBox data-aos="fade-bottom" data-aos-easing="ease-in-out" onMouseEnter={() => toggleHoverApiBox(true)} onMouseLeave={() => toggleHoverApiBox(false)}>
                <ContentBox>
                        <ContentBoxIconApi isHovered={hoveredApiBox}>
                            <div/>
                        </ContentBoxIconApi>
                         <h1>API Development</h1>
                        <ContentBoxText>
                            <p>I develop API's rest with Node'js in order to make a good communication between the server and the web.</p>
                        </ContentBoxText>
                        
                </ContentBox>    
                </ServiceBox>
                <ServiceBox data-aos="fade-up" data-aos-easing="ease-in-out" onMouseEnter={() => toggleHoverMobileBox(true)} onMouseLeave={() => toggleHoverMobileBox(false)}>
                <ContentBox>
                        <ContentBoxIconMobile isHovered={hoveredMobileBox}>
                          <div/>
                        </ContentBoxIconMobile>
                            <h1>Mobile Development</h1>
                        <ContentBoxText>
                            <p>I develop native mobile apps with React Native to make a single code useful for both IOS and Android.</p>
                        </ContentBoxText>
                        
                </ContentBox>    
                </ServiceBox>
            </ContentSectionServices>
            </Container>
        </ServicesSection>
    );
}

export default Services;