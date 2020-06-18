import React, {TextareaHTMLAttributes, useRef, useState, useCallback, useEffect} from 'react';
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';
import {FiAlertCircle} from 'react-icons/fi';
import {Container, Error} from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    
}

const TextArea: React.FC<TextAreaProps> = ({name, icon: Icon, ...rest}) => {
  
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isSize, setSize] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {fieldName, defaultValue, error, registerField } = useField(name);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  useEffect(() =>{
    registerField({
      name: fieldName,
      ref: textAreaRef.current, //ref - document.querySelector('input')
      path: 'value'  //ref - document.querySelector('input').value - ou seja, pega o valor dele
    });
  }, [fieldName, registerField]);

  return (
    <Container isErroed={!!error} isFocused={isFocused} isFilled={isFilled} >
      {Icon && <Icon size={20} />}
      <textarea maxLength={200} ref={textAreaRef} onFocus={handleInputFocus} onBlur={handleInputBlur} 
      defaultValue={defaultValue} {...rest}/>
      {error &&
      <Error title={error} > <FiAlertCircle color="#c53030" size={20} /> </Error>
      }
    </Container>
    );

}

export default TextArea;