import styled, {css} from 'styled-components';

import InstagramIconOrange from '../../assets/instagramIconOrange.png';
import InstagramIconBlack from '../../assets/instagramIconBlack.png';

import linkedinOrange from '../../assets/linkedinOrange.png';
import linkedinBlack from '../../assets/linkedinBlack.png';

import gitHubOrange from '../../assets/gitHubOrange.png';
import gitHubBlack from '../../assets/gitHubBlack.png';

interface HoverIcons {
    isHovered: boolean;
    
}

export const Container = styled.div`
    width: 90%;
    max-width: 1140px;
    
`;

export const FooterContainer = styled.footer`
    display: flex;
    background: #161617;
    padding: 80px 0;
    justify-content:center;
    /*box-shadow: 0 0.5rem 2rem rgba(42,42,50,.3);*/

`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    h1{
    
        font-size: 1.4rem;
        color: rgba(255,255,255,1);
        font-weight: 500;
        font-family: 'Roboto',Sans-Serif;
        padding-top: 30px;
    }

    img{
        width: 80px;
        padding-bottom: 20px;
    }

    ul{
        list-style: none;
        display: flex;

        li{
            margin-right: 20px;
        }
        
    }
`
export const ContentBoxIconInstagram = styled.div<HoverIcons>`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #0F0F0F;
    transition: all .4s;

    div{
        background-image: url(${InstagramIconOrange});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        width: 40px;
        height: 40px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${InstagramIconBlack});
        }
    `}

`;


export const ContentBoxIconLinkedin = styled.div<HoverIcons>`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #0F0F0F;
    transition: all .4s;

    div{
        background-image: url(${linkedinOrange});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        width: 40px;
        height: 40px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${linkedinBlack});
        }
    `}

`;

export const ContentBoxIconGitHub = styled.div<HoverIcons>`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    background: #0F0F0F;
    transition: all .4s;

    div{
        background-image: url(${gitHubOrange});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 24px;
        width: 40px;
        height: 40px;
        transform: rotate(45deg);
    }

    ${(props) => props.isHovered && css`
        background: #e94b3cff;
        transform: rotate(0deg);

        div{
            transform: rotate(0deg);
            background-image: url(${gitHubBlack});
        }
    `}

`;