import React, {useState} from 'react';
import logoMColored from '../../assets/logoMColored.png';
import { FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi';
import {useTransition} from 'react-spring';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'
import { Header, Logo, HeaderContent, MenuSectionOn, ContainerIcons } from './styles';


const HeaderComponent = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false)
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, null, {
    from: { bottom: '-100%'},
    enter: { top: '0%' },
    leave: { bottom: '-100%' },
    });

    const handleMenuBar = () => {
        if(!menuBar){
            setMenuBar(true);
        }else{
            setMenuBar(false);
        }
    };
    
    const handleClickLink = () => {
        if(!displayMenu){
            setMenuBar(false);
        }else{
            setMenuBar(false);
        }
    };

    return (
        <Header>
            {transitions.map(({item, key, props}) => (
                <MenuSectionOn key={key} style={props} ishandled={menuBar} >
                    <nav>
                        <Link onClick={() => handleClickLink()} to="aboutme" spy={true} smooth={true}
                        offset={-70} duration={1000}>About me</Link>
                        <Link onClick={() => handleClickLink()} to="services" spy={true} smooth={true}
                        offset={-70} duration={1000}>Services</Link>
                        <Link onClick={() => handleClickLink()} to="portfolio" spy={true} smooth={true}
                        offset={-70} duration={1000}>Portfólio</Link>
                        <Link onClick={() => handleClickLink()} to="contact" spy={true} smooth={true}
                        offset={-70} duration={1000}>Contact</Link>
                    </nav>
                    <ContainerIcons>
                        <a href="https://www.instagram.com/magalsz/">
                            <FiInstagram size={34} color="#e94b3cff"/>
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-magalh%C3%A3es-araujo/">
                            <FiLinkedin size={34} color="#e94b3cff"/>
                        </a>
                        <a href="https://github.com/Magal97">
                            <FiGithub size={34} color="#e94b3cff"/>
                        </a>
                    </ContainerIcons>
            </MenuSectionOn>
            ))}
            <HeaderContent ishandled={menuBar}>
                <Logo>
                    <Link to="home" spy={true} smooth={true}
                    offset={-70} duration={1000}><img src={logoMColored} alt="logo"/></Link>
                </Logo>
                
                {menuBar ? <AiOutlineClose onClick={() => handleMenuBar()} size={36} color="#fff" />
                : <RiMenu3Line onClick={() => handleMenuBar()} size={36} color="#fff"/>}
                    <nav>
                    <Link to="aboutme" spy={true} smooth={true}
                        offset={-70} duration={1000}>About me</Link>
                        <Link to="services" spy={true} smooth={true}
                        offset={-70} duration={1000}>Services</Link>
                        <Link to="portfolio" spy={true} smooth={true}
                        offset={-70} duration={1000}>Portfólio</Link>
                        <Link to="contact" spy={true} smooth={true}
                        offset={-70} duration={1000}>Contact</Link>
                    </nav>
            </HeaderContent>
        </Header>
    );
};

export default HeaderComponent;