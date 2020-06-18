import React from 'react';
import { FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi';
import { Link } from 'react-scroll'

import {HomeSection, Aside, ContentAside, ContainerIcons, 
HomeParagraf, ButtonProject} from './styles';
const Home: React.FC = () => {
   
    return(
    <HomeSection id="home">
        <Aside>
            <ContentAside data-aos="fade-right" data-aos-easing="ease-in-out">
                <p>Follow-me!</p>
                <ContainerIcons>
                    <a href="https://www.instagram.com/magalsz/">
                        <FiInstagram size={20} color="#e94b3cff"/>
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-magalh%C3%A3es-araujo/">
                        <FiLinkedin size={20} color="#e94b3cff"/>
                    </a>
                    <a href="https://github.com/Magal97">
                        <FiGithub size={20} color="#e94b3cff"/>
                    </a>
                </ContainerIcons>
            </ContentAside>
        </Aside>
            <div data-aos="fade-right" data-aos-easing="ease-in-out">
                 <h1>Welcome!</h1>
                 <h1>I'm  <span>Developer</span>.</h1>
                <HomeParagraf>
                    <p>A young man in love with the development of</p>
                    <p>web applications and mobile.</p>
                </HomeParagraf>
                <ButtonProject>
                    <Link to="portfolio" spy={true} smooth={true}
                    offset={-70} duration={1000}><button>View work</button></Link>
                    <Link to="contact" spy={true} smooth={true}
                    offset={-70} duration={1000}><button>Hire me!</button></Link>
                </ButtonProject>
            </div>
    </HomeSection>
    );
}

export default Home;