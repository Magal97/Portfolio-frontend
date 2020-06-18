import styled, {css} from 'styled-components';
import ToolTip from '../ToolTip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErroed: boolean;
    
  
  }
  
  export const Container = styled.div<ContainerProps>`
  
    background: #232129;
    border: 2px solid #232129;
    padding: 16px;
    border-radius: 10px;
    color: #666360;
    display: flex;
    margin-bottom: 15px;
   
    @media(max-width: 565px){
      
        width: 98%;
       
    }

    ${(props) => props.isErroed && css`
      border-color: #c53030;
  
    `}
  
    ${(props) => props.isFocused && css`
      color: #DAA520;
      border-color: #DAA520;
  
    `}
  
    ${(props) => props.isFilled && css`
      color: #ff9000;
  
    `}
  
    textarea{
      flex: 1;
      background: transparent;
      border: 0;
      resize: none;
      width: 56.9rem;
      height: 10rem;
      color: #F4EDE8;
      font-size: 1.3rem;
  
      &::placeholder{
        color: #666360;
      }
  
    }
  
  svg{
      margin-right: 16px;
    }
  
  `;
  
  export const Error = styled(ToolTip)`
  
    height:20px;
    margin-left:16px;
  
    svg{
      margin: 0;
    }
  
    span{
      background: #c53030;
      color: #fff;
  
      &::before{
        border-color: #c53030 transparent;
  
      }
  
    }
  `;
  