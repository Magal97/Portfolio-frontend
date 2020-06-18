import styled, {css} from 'styled-components';

import WebDevelopmentIconOrange from '../../assets/webIconOrange.png'
import WebDevelopmentIconBlack from '../../assets/webIconBlack.png'

import ApiDevelopmentIconOrange from '../../assets/ApiIconOrange.png';
import ApiDevelopmentIconBlack from '../../assets/ApiIconBlack.png';

import MobileDevelopmentIconOrange from '../../assets/mobileIconOrange.png';
import MobileDevelopmentIconBlack from '../../assets/mobileIconBlack.png';

interface HoverIcons {
    isHovered: boolean;
    
}

export const ServicesSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    background: #0F0F0F;
    padding: 120px 0;
    align-items: center;

    &:hover{
        
        h1:first-child{
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: #666;
            color: #161617;
            transition: all .3s;
        }
        
    }
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1140px;
`;


export const ContentSectionServices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media(max-width: 858px){
        flex-wrap: wrap;
        justify-content: center;
        
    }

`;


export const ServiceBox = styled.div`
    display: flex;
    width: 290px;
    height: 400px;
    background: #0a0a0c;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 20px 10px 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 20px;
    margin: 0 20px;
   
    @media(max-width: 858px){
        margin-bottom: 40px;
        
        &:last-child{
            margin-bottom: 0;
        }
    }

`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

   h1{
        margin: 45px 0 50px;
        color: rgba(255, 255, 255, 1);
        font-weight: 500;
        font-family: 'Roboto', Sans-Serif;
        font-size: 1.7rem;
    }

`;

export const BoxIcons = styled.div`
    display: flex;
    margin-top: 35px;
     
    width: 100%;
    justify-content: flex-end;

    ul{
        display: flex;
        margin-right: 20px;    


        li{
            display: flex;
            margin: 0 3px;
        }
    }

`;

export const ContentBoxIconWeb = styled.div<HoverIcons>`
    width: 100px;
    height: 100px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #161617;
    transition: all .4s;

    div{
        background-image: url(${WebDevelopmentIconOrange});
        width: 68px;
        height: 68px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${WebDevelopmentIconBlack});
        }
    `}
    
`;

export const ContentBoxIconApi = styled.div<HoverIcons>`
    width: 100px;
    height: 100px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #161617;
    transition: all .4s;
    
    div{
        background-image: url(${ApiDevelopmentIconOrange});
        width: 68px;
        height: 68px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${ApiDevelopmentIconBlack});
        }
    `}


    
`;


export const ContentBoxIconMobile = styled.div<HoverIcons>`
    width: 100px;
    height: 100px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #161617;
    transition: all .4s;

    div{
        background-image: url(${MobileDevelopmentIconOrange});
        width: 54px;
        height: 52px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${MobileDevelopmentIconBlack});
        }
    `}
`;



export const ContentBoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size: 1.5rem;
        color: rgba(255,255,255,.6);
        line-height: 2.0rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        margin-left: 10px;
    }

`;
