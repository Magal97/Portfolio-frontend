import styled from 'styled-components';

import chatSVG from '../../assets/chat.svg';

export const Container = styled.div`
    width: 90%;
    max-width: 1140px;
`;


export const ContentSectionContact = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    @media(max-width: 858px){
        flex-direction: column;
        
    }
`;

export const ContentSectionPortfolio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;


export const ContactSection = styled.section`
    display:flex;
    background: #0F0F0F;
    padding: 120px 0;
    width: 100%;
    justify-content: center;

    &:hover{
        
        h1:first-child{
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: #666;
            color: #161617;
            transition: all .3s;
        }
        
    }
    
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        
        @media(max-width: 565px){
            width: 90%;
            
        }
        button{

        background: transparent;
        text-align: center;
        font-family: 'Roboto-Slab', sans-serif;
        font-weight: 500;
        width: 18rem;
        height: 5rem;
        border-radius: 30px;
        border: 2px solid #fff;
        transition: all 0.5s;
        font-size: 1.4rem;
        color: #e94b3cff;
        margin-right: 20px;
        position: relative;
        margin: 10px 0 0 auto;

        }
   

    button::before, button::after{

        content: "";
        position: absolute;
        width: 8px;
        height: 3px;
        background: #000;
        transform: skewX(50deg);
        transition: .4s linear; 

    }
    /*ANTES = EM CIMA*/
    button::before{
        top: -3px;    
        left: 15%;
    }
    /*DPS = EM BAIXO*/
    button::after{
        bottom: -3px;
        right: 15%;
    }
    button:hover::before{
        left: 76%;
    }
    button:hover::after{
        right: 76%;
    }
        
    }

`;

export const RowForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media(max-width: 570px){
        flex-wrap: wrap;

    }
    
   
`;

export const InfoContact = styled.div`
    display: flex;  
    flex-direction: column;
    background-image: url(${chatSVG});
    background-position-x: right;
    width: 46.9rem;
    height: 35.3rem;
    background-size: auto;
    background-repeat: no-repeat;
    background-size: 30.0rem;
    margin-right: 10px;

   
    @media(max-width: 1200px){
        background-size: 70%;
    }

    @media(max-width: 475px){
        width: 90%;
    }
    
    
    
    h2{
        color: #DAA520;
        font-weight: 500;
        font-family: 'Roboto', Sans-Serif;
        margin-bottom: 4px;
        font-size: 1.7rem;
    }
    
    p{
        color: rgba(255,255,255,.8);
        line-height: 2.0rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 30px;

    }
`;

export const FormContact = styled.div`
    display: flex;
    
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
  

`;

