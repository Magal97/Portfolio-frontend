import styled from 'styled-components';

export const HomeSection = styled.section`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 30px 0;

h1{
   
    @media(max-width: 360px){
        font-size: 5.6rem;
    
    }

    font-size: 6.4rem;
    color: rgba(255, 255, 255, 1);
    line-height: 7.5rem;
    font-weight: 300;
    font-family: 'Roboto', Sans-Serif;


}

span{

    @media(max-width: 360px){
        font-size: 5.6rem;
    }

    font-family: 'Roboto', Sans-Serif;
    font-weight: 300;
    font-size: 6.4rem;
    color: #e94b3cff;
    line-height: 7.5rem;
      
}


img{
    width: 45%;
}


`;

export const Aside = styled.aside`
    position: absolute;
    top: 0;
    left:0;
    height: 100vh;
    width: 120px;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 14;

    @media(max-width: 768px){
        display: none;
    }
    
`;


export const ContentAside = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        transform: rotate(-90deg);
        color: rgba(255, 255, 255, 1);
        
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 40px;
    }
    
    img{
        cursor: pointer;
        bottom: 0;
        position: fixed;
        width: 65px;
        margin-bottom: 10px;
    }
`;


export const ContainerIcons = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 30px;

    a{
        transition: 0.8s;
    }

    a + a {
        margin-top: 20px;
    }

    a:hover{
      
        transform: rotate(360deg);
    }
    
`;


export const HomeParagraf = styled.div`
    padding: 10px 0 24px 0;
    p{
        @media(max-width: 360px){
            font-size: 1.4rem;
        }
       font-size: 1.5rem;
       color: rgba(255,255,255,.6);
       line-height: 2.0rem;
       font-weight: 300;
       font-family: 'Droid Serif', Serif;
       /*font-family: 'RedHatDisplay', serif;*/
      
    } 
`;

export const ButtonProject = styled.div`
   
    display: flex;
    margin-top: 25px;
    
    button{

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
        position: relative;


    }
    
    a {
        margin-right: 20px;

    }

    a:last-child{
        margin-right: 0;
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

    @media(max-width: 1014px){
        button{
            font-size: 1.5rem;

        }
        
    }
    
`;