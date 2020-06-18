import React, {useState} from 'react';
import logoMColored from '../../assets/logoMColored.png';

import { FooterContainer, FooterContent, ContentBoxIconInstagram,
ContentBoxIconLinkedin, ContentBoxIconGitHub, Container } from './styles';


const Footer: React.FC = () => {
    const [hoveredInstagram, setHoveredInstagram] = useState(false);
    const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
    const [hoveredGitHub, setHoveredGitHub] = useState(false);

    const toggleHoverInstagram = (event: boolean) => {
        if(event){
            setHoveredInstagram(true);
        }else{
            setHoveredInstagram(false);
        }
    };

    const toggleHoverLinkedin = (event: boolean) => {
        if(event){
            setHoveredLinkedin(true);
        }else{
            setHoveredLinkedin(false);
        }
    };

    const toggleHoverGitHub = (event: boolean) => {
        if(event){
            setHoveredGitHub(true);
        }else{
            setHoveredGitHub(false);
        }
    };

    return (
        <FooterContainer>
            <Container >
                <FooterContent>
                    <img src={logoMColored} />
                    <ul>
                        <a href="https://www.instagram.com/magalsz/">
                        <li onMouseEnter={() => toggleHoverInstagram(true)} onMouseLeave={() => toggleHoverInstagram(false)}>
                            <ContentBoxIconInstagram isHovered={hoveredInstagram}>
                                <div/>
                            </ContentBoxIconInstagram>
                        </li>
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-magalh%C3%A3es-araujo/">
                        <li onMouseEnter={() => toggleHoverLinkedin(true)} onMouseLeave={() => toggleHoverLinkedin(false)}>
                            <ContentBoxIconLinkedin isHovered={hoveredLinkedin}>
                                <div/>
                            </ContentBoxIconLinkedin>
                        </li> 
                        </a>
                        <a href="https://github.com/Magal97">
                        <li onMouseEnter={() => toggleHoverGitHub(true)} onMouseLeave={() => toggleHoverGitHub(false)}> 
                            <ContentBoxIconGitHub isHovered={hoveredGitHub}>
                                <div>
                               
                   
                                </div>
                            </ContentBoxIconGitHub>
                        </li>
                        </a>
                    </ul>
                    <h1>© 2020 - Matheus Magalhães. All rights reserved.</h1>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
};

export default Footer;