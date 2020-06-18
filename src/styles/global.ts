import { createGlobalStyle } from 'styled-components';
import 'aos/dist/aos.css'; 

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        letter-spacing: 1px;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    ul{
        list-style: none;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        background: #000;
        font-size: 1.6rem;
    }

    html{
        font-size: 62.5%;
    }
    #root {
        margin: 0 auto;
        /* a cada 1rem será considerado 10px */

    }

    button {
        cursor: pointer;
    }

    
    @media(max-width: 1014px){
    html{
     
        font-size: 50%;
        scroll-behavior: smooth;
    }
    }

    @media(max-width: 325px){
        html{font-size: 48%;}
    }

`;
