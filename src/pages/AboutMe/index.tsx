import React from 'react';
import TitleSection from '../../components/TitleSection';
import DevPhoto from '../../assets/aboutMePhoto.jpeg';


import { AboutMeSection, Container, ContentSectionAboutMe, LeftSide, RightSide,
SkillsAboutMe } from './styles';

const AboutMe: React.FC = () => {
   
    
    return(
    
    <AboutMeSection id="aboutme" >
            <Container>
                    <TitleSection title="About Me" />
                <ContentSectionAboutMe  data-aos="fade-right" data-aos-easing="ease-in-out">
                        <LeftSide >
                            <img src={DevPhoto} />
                            <a>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Developer
                            </a>
                        </LeftSide>
                    <RightSide>
                            <p>
                            Hi, my name is Matheus, I'm 18 years old and I'm an enthusiast of Softwares development. 
                            I have developed this passion for programming when I first got on High School that was integrated to Technical. 
                            Now I'm on college doing analysis and systems development and working hard to beat my goals as a professional. 
                            </p>
                            <h1>My Stack</h1>
                            <SkillsAboutMe>
                                <div>
                                    <h2>Front-End</h2>
                                    <ul>
                                        <li>ASP.NET</li>
                                        <li>ReactJS</li>
                                        <li>VB.NET</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Back-End</h2>
                                    <ul>
                                        <li>NodeJS</li>
                                        <li>Docker</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2>Others</h2>
                                    <ul>
                                        <li>Styled Components</li>
                                        <li>Architecture MVC</li>
                                        <li>Architecture DDD</li>
                                        <li>React Native</li>
                                        <li>Git</li>
                                        <li>C#</li>
                                    </ul>
                                </div>
                            </SkillsAboutMe>
                    </RightSide>
                </ContentSectionAboutMe>
            </Container>
        </AboutMeSection>
    )
}

export default AboutMe;