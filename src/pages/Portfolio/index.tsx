import React from 'react';

import TitleSection from '../../components/TitleSection';

import EcoletaRepo from '../../assets/EcoletaRepo.png';
import typescriptIcon from '../../assets/typescriptIcon.png';
import twitterRepo from '../../assets/twitterRepo.png';
import gitExplorerRepo from '../../assets/gitExplorerRepo.png';
import beTheHeroRepo from '../../assets/beTheHeroRepo.png';
import goFinancesRepo from '../../assets/goFinancesRepo.png';
import goBarberRepo from '../../assets/goBarberRepo.png';

import { GoDatabase  } from "react-icons/go";
import { IoLogoJavascript  } from "react-icons/io";
import { FaReact, FaNodeJs  } from "react-icons/fa";

import {PortfolioSection, Container, RepoContainer, InfoRepo, DetailsRepoNav, 
ButtonsDetails, ContentSectionPortfolio} from './styles';

const Portfolio: React.FC = () => {

    return(
        <PortfolioSection id="portfolio">
            <Container>
            <TitleSection title="Portfólio" />
                <ContentSectionPortfolio>
                    <RepoContainer data-aos="fade-up" data-aos-easing="ease-in-out" isRowReverse={false}>
                        <img src={EcoletaRepo} />
                        <InfoRepo>
                            <h2>Ecoleta</h2>
                            <p>Ecoleta is a project developed based on international environment week. That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.</p>
                            <DetailsRepoNav>
                            <ul>
                                <li><img src={typescriptIcon}/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                                <li><FaNodeJs size={20} color="#80ff00"/></li>
                                <li><GoDatabase size={20} color="#ffbf00"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/nwl-01" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>
                        
                    </RepoContainer>
                    <RepoContainer data-aos="fade-bottom" data-aos-easing="ease-in-out" isRowReverse={true}>
                        <img src={twitterRepo} />
                        <InfoRepo>
                            <h2>Twitter interface</h2>
                            <p>
                                This project is a copy of the twitter user profile layout. Performed to train some skills in the FlexBox and play a little.
                                </p>
                            <DetailsRepoNav>
                            <ul>
                                <li><img src={typescriptIcon}/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/TwitterInterface" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>                    
                    </RepoContainer>
                    <RepoContainer data-aos="fade-up" data-aos-easing="ease-in-out" isRowReverse={false}>
                        <img src={gitExplorerRepo} />
                        <InfoRepo>
                            <h2>GitExplorer</h2>
                            <p>
                                Project developed based on the public API of GitHub, which allows us to search the name of a repository and provides us with relevant data.
                            </p>
                            <DetailsRepoNav>
                            <ul>
                                <li><img src={typescriptIcon}/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                                <li><FaNodeJs size={20} color="#80ff00"/></li>
                                <li><GoDatabase size={20} color="#ffbf00"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/GitExplorer" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>
                    </RepoContainer>
                    <RepoContainer data-aos="fade-bottom" data-aos-easing="ease-in-out" isRowReverse={true}>
                        <img src={beTheHeroRepo} />
                        <InfoRepo>
                            <h2>Be The Hero</h2>
                            <p>
                            An application where you can be the hero and save the world, but not by the conventional way, but by helping some NGOs to raise funds for their causes.
                            </p>
                            <DetailsRepoNav>
                            <ul>
                                <li><IoLogoJavascript size={20} color="#d9d300"/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                                <li><FaNodeJs size={20} color="#80ff00"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/SemanaOmniStack11" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>
                    </RepoContainer>
                    <RepoContainer data-aos="fade-up" data-aos-easing="ease-in-out" isRowReverse={false}>
                        <img src={goFinancesRepo} />
                        <InfoRepo>
                            <h2>GoFinances</h2>
                            <p>
                                Application that simulates a financial balance. It imports .csv files and allows you to Drag end Drop them, making possible to upload the financial data. All actions taken by the API in NodeJs.
                            </p>
                            <DetailsRepoNav>
                            <ul>
                                <li><img src={typescriptIcon}/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                                <li><FaNodeJs size={20} color="#80ff00"/></li>
                                <li><GoDatabase size={20} color="#ffbf00"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/gostack-template-fundamentos-reactjs" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>
                    </RepoContainer>
                    <RepoContainer data-aos="fade-bottom" data-aos-easing="ease-in-out" isRowReverse={true}>
                        <img src={goBarberRepo} />
                        <InfoRepo>
                            <h2>GoBarber</h2>
                            <p>
                                Application that simulates a financial balance. It imports .csv files and allows you to Drag end Drop them, making possible to upload the financial data. All actions taken by the API in NodeJs.
                            </p>
                            <DetailsRepoNav>
                            <ul>
                                <li><img src={typescriptIcon}/></li>
                                <li><FaReact size={20} color="#00ffff"/></li>
                                <li><FaNodeJs size={20} color="#80ff00"/></li>
                                <li><GoDatabase size={20} color="#ffbf00"/></li>
                            </ul>
                            <ButtonsDetails>
                                <a href="https://github.com/Magal97/GoBarber" target="_blank">Repository</a>
                            </ButtonsDetails>
                        </DetailsRepoNav>
                        </InfoRepo>
                    </RepoContainer>
                </ContentSectionPortfolio>
            </Container>
        </PortfolioSection>
    );
}

export default Portfolio;