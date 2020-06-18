import React from 'react';

import {H1} from './styles';

interface HeaderProps{
    title: string;
}

const Title: React.FC<HeaderProps> = (props) => {
    return (
        
          <H1>{props.title}</H1>
        
    );
} 

export default Title;   