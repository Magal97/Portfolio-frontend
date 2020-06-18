import React, {useState, useEffect} from 'react';
import {useTransition, animated} from 'react-spring';
import './styles';

const MainText = () => {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, null, {
    from: { display: 'flex', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    
    return (
        <span>
            {transitions.map(({ item, key, props }) => (
            item
            ? <animated.div style={props}>Matheus</animated.div>
            : <animated.div style={props}>Developer</animated.div>
            ))}
        </span>
    );
    
    
    
    
};
    
export default MainText;
