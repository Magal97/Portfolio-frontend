import styled, {css} from 'styled-components';
import ToolTip from '../ToolTip';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErroed: boolean;
  

}

export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 30px;
  border: 2px solid #232129;
  padding: 16px;
  color: #666360;
  display: flex;
  align-items:center;
  margin-bottom: 15px;
  width: 100%;

  
  @media(max-width: 570px){
      & + div{margin-left: 0;}
  }
  
  @media(min-width: 571px){
      & + div{
        margin-left: 14px;
      }
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
  

  input{
    flex: 1;
    background: transparent;
    border: 0;
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
