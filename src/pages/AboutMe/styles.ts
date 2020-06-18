import styled, {css} from 'styled-components';
import { shade } from 'polished';


export const AboutMeSection = styled.section`
    background: #161617;
    display: flex;
    flex-direction: column;
    padding: 120px 0;
    width: 100%;
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


export const ContentSectionAboutMe = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 858px){
        flex-direction: column-reverse;
        
    }
`;


export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    align-items: center;

    @media(max-width: 858px){
        margin-right: 0;
        order: 2;

        a{
            
            margin-bottom: 54px;
        }
    }

    img{
        width: 300px;
        height: 420px;
        border-radius: 10px;
        display: flex;
    }

    a{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255,255,255,.9);
        font-size: 15px;
        transition: 0.5s;
        overflow: hidden;
        letter-spacing: 2px;
        background: #161617;
        width: 180px;
        height: 60px;
        margin-top: -30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400px;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        border-radius: 6px;

        span{
            position: absolute;
            display: block;
        }

        span:nth-child(1){
            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #e94b3cff);
            animation: animate1 1s linear infinite;
        }

        @keyframes animate1{
            0%{
                left: -100%;
            }
            50%, 100%{
                left: 100%;
            }
        }
        

        span:nth-child(2){
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #e94b3cff);
            animation: animate2 1s linear infinite;
            animation-delay: 0.25s;
        }

        @keyframes animate2{
            0%{
                top: -100%;
            }
            50%, 100%{
                top: 100%;
            }
        }

        span:nth-child(3){
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(270deg, transparent, #e94b3cff);
            animation: animate3 1s linear infinite;
            animation-delay: 0.5s;
        }

        @keyframes animate3{
            0%{
                right: -100%;
            }
            50%, 100%{
                right: 100%;
            }
        }

        span:nth-child(4){
            bottom: -100%;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #e94b3cff);
            animation: animate4 1s linear infinite;
            animation-delay: 0.75s;
        }

        @keyframes animate4{
            0%{
                bottom: -100%;
            }
            50%, 100%{
                bottom: 100%;
            }
        }

    }
    a:hover{
        background: #e94b3cff;
        color: rgba(255,255,255,1);
        box-shadow: 0 0 5px #e94b3cff,
                    0 0 25px #e94b3cff,
                    0 0 50px #e94b3cff,
                    0 0 200px #e94b3cff;
        opacity: 0.9;

    }

   

`;



export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
     
    @media(max-width: 858px){
        p{
            order: -1;
        }
        
    }

    p{
        
        color: rgba(255,255,255,.9);
        line-height: 2.2rem;
        font-weight: 400;
        font-family: 'Roboto', Serif;
        /*font-family: 'RedHatDisplay', serif;*/
      
    } 

    h1{
        font-size: 3.6rem;
        color: rgba(255,255,255,1);
        font-weight: 400;
        font-family: 'Red Hat Display',Sans-Serif;
        display: flex;
        justify-content: center;
        margin: 3.5rem 0;
        text-align: center;
    }

    h2{
        font-size: 2.6rem;
        color: #e94b3cff;
        font-weight: 300;
        font-family: 'Roboto',Sans-Serif;
        display: flex;
        margin-bottom: 15px;

    }
   
`;

export const SkillsAboutMe = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media(max-width: 858px){
        img{
            order: 3;
        }
    }

    @media(max-width: 395px){
        flex-direction: column;
        align-items:center;

        div{
            margin-bottom: 20px;
        }

        div:last-child{
            margin-bottom: 0;
        }
        
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    ul{
        list-style:circle !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        li{
            
            display: flex;
            color: rgba(255,255,255,0.8);
            font-weight: 400;
            font-family: 'Roboto',Sans-Serif;
            margin-bottom: 12px;
            cursor: pointer;
            
        }
        li:hover{
            color: ${shade(0.5, '#FFFFFF')}
        }
    }

`;
