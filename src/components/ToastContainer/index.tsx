import React from 'react';
import {Container} from './styles';
import Toast from './Toast';
import {ToastMessage} from '../../hooks/ToastContext';
import {useTransition} from 'react-spring';

interface ToastContainerProps{
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%'},
      enter: { right: '0%'},
      leave: {right: '-120%'},
    },
  );

  return(
    <Container>
      {messagesWithTransitions.map(({item, key, props}) => (
           <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );

};

export default ToastContainer;
