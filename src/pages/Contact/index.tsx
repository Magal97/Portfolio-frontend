import React, {useRef, useCallback, useState} from 'react';
import getValidationErrors from '../../utils/getValidationErrors';
import TitleSection from '../../components/TitleSection';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiMail, FiUser, FiMessageCircle, FiMessageSquare  } from "react-icons/fi";        

import {ContactSection, InfoContact, RowForm, Container, ContentSectionContact} from './styles';

interface ContactFormPros{
  name: string;
  email: string;
  subject: string;
  message: string;

}

const Contact: React.FC  = () => {
    
  
    const formRef = useRef<FormHandles>(null);
    const inputRef = useRef(null);

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputSubject, setInputSubject] = useState('');
    const [inputMessege, setInputMesse] = useState('');

    const { addToast } = useToast();

    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 6);
      }
    };


    const handleSubmite = () => {
      console.log('a')
      formRef.current?.reset();
      scrollToTop();
      
      addToast({
        type: 'sucess',
        title: 'Alert',
        description: 'This functionality still not working, you can text me on whatsApp if you want. 😀',
      });
      
    }
    
    //const handleSubmit = useCallback(async (data:ContactFormPros) => {

      /* try{
        console.log('foi')
         */
        /* const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string().required('E-mail required')
          .email('Digite um e-mail válido'),
          subject: Yup.string().required('Subject required'),
          message: Yup.string().required('Message required'),
        }); */
  
       /*  await schema.validate(data, {
          abortEarly: false,
        }); */

        /* await api.post('/form', data); */
      
      
        
  
    /*   }catch(err){
        if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);
  
          formRef.current?.setErrors(errors);
  
          return;
        }
  
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro no login',
        });
      }
  
    }, [addToast]); */
   

    return(
        <ContactSection id="contact">
            <Container>
                <TitleSection title="Contact" />
                <ContentSectionContact>
                    <InfoContact data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2>Phone:</h2>
                        <p>(11)98191-7662</p>

                        <h2>Address:</h2>
                        <p>Barueri, Brasil</p>

                        <h2>Email:</h2>
                        <p>magal97@outlook.com</p>
                    </InfoContact>
                        <Form data-aos="fade-up" data-aos-easing="ease-in-out" ref={formRef} onSubmit={handleSubmite}>
                            <RowForm>
                                <Input autocomplete="off" id="name" name="name" icon={FiUser} placeholder="Name" />
                                <Input autocomplete="off" id="email" name="email" icon={FiMail} type="email" placeholder="E-mail"/>
                            </RowForm>
                            <RowForm>
                                <Input autocomplete="off" id="subject" name="subject" icon={FiMessageCircle} placeholder="Subject" />
                            </RowForm>
                            <TextArea id="message" name="message" icon={FiMessageSquare} placeholder="Message" />
                            <button type="submit">Send Message</button>
                        </Form>
                </ContentSectionContact>
            </Container>
        </ContactSection>
    );
}

export default Contact;