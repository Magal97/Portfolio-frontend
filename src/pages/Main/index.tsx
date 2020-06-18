import React from 'react';


import Header from '../../components/HeaderComponent'
import Home from '../Home';
import AboutMe from '../AboutMe';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../../components/Footer';
import AOS from 'aos';

const Main: React.FC = () => {
    
    AOS.init({
        offset: 400,
        duration: 900,
      });
    

    return(
        <>
        <Header/>
            <Home/>
            <AboutMe/>
            <Services/>
            <Portfolio/>
            <Contact/>
        <Footer/>
        </>
    );
};

export default Main;