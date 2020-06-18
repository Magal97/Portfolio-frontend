import styled, {css} from 'styled-components';

interface ContainerChangeDirection{
    isRowReverse: boolean;
}

export const PortfolioSection = styled.section`
    display: flex;
    width: 100%;
    background: #161617;
    padding: 120px 0;
    justify-content: center;

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



export const ContentSectionPortfolio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;


export const RepoContainer = styled.div<ContainerChangeDirection>`
    display: flex;
    width: 100%;
    background: #0F0F0F;
    padding: 40px 40px;
    transition: .4s;
    border-radius: 10px;
    margin-bottom: 50px;
    
    &+:last-child{
        margin-bottom: 0;
    }

    @media(max-width: 734px){
        flex-direction: column;
        align-items:center;
    }
   
    img{
        height: 100%;
        width: 280px;
        border-radius: 10px;
        margin-right: 40px;
        object-fit: cover;
    }

    ${(props) => props.isRowReverse && css`
        flex-direction: row-reverse;

        img{
            margin-right: 0;
            margin-left: 40px;
        }
    `}


    &:hover{
        box-shadow: 0 0 10px 5px;

        h2{
            color: #e94b3cff
        }

    }

`;

export const InfoRepo = styled.div`
    display: flex;
    flex-direction: column;
    
    h2{
        font-size: 2.6rem;
        color: rgba(255,255,255,1);
        font-weight: 400;
        font-family: 'Red Hat Display',Sans-Serif;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        text-align: center;
        transition: all .3s;
    }

    /*h1::after{
        content: '';
        display: block;
        width: 80px;
        height: 2px;
        background: #e94b3cff;
        
    }*/

    p{
        font-size: 1.5rem;
        color: rgba(255,255,255,.6);
        line-height: 2.3rem;
        font-weight: 500;
        font-family: 'Roboto', Serif;
        margin-left: 10px;
        margin-bottom: auto;
    }

`;

export const DetailsRepoNav = styled.nav`
    display: flex;
    justify-content: space-between;

    @media(max-width: 734px){
        margin-top: 20px;
    }

    ul{
        display: flex;
        align-items: center;

        li{
            display: flex;
            align-items: center;
            margin-right: 5px;

            img{
                width: 22px;
                margin: 0;
            }
        }
    }
`;


export const ButtonsDetails = styled.div`
    display: flex;
    
    a{
        background: transparent;
        text-align: center;
        font-family: 'Roboto-Slab', sans-serif;
        font-weight: 500;
        width: 14rem;
        height: 5rem;
        border-radius: 30px;
        border: 2px solid #fff;
        transition: all 0.5s;
        font-size: 1.3rem;
        color: #e94b3cff;
        margin-right: 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    a::before, a::after{

    content: "";
        position: absolute;
        width: 8px;
        height: 3px;
        background: #000;
        transform: skewX(50deg);
        transition: .4s linear; 

    }
    /*ANTES = EM CIMA*/
    a::before{
        top: -3px;    
        left: 15%;
    }
    /*DPS = EM BAIXO*/
    a::after{
        bottom: -3px;
        right: 15%;
    }
    a:hover::before{
        left: 76%;
    }
    a:hover::after{
        right: 76%;
    }

   
`;
