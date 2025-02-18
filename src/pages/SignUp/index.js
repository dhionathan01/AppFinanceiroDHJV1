import React from 'react';
import { View, Text, Platform } from 'react-native';

// import { Container } from './styles';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {
    return (
       <Background>
            <Container
               behavior={Platform.OS === 'ios' ? 'padding' : false}
                enabled>
                <AreaInput>
                    <Input placeholder={ "Seu nome"} />
                </AreaInput>
                <AreaInput>
                    <Input placeholder={ "Seu email"} />
                </AreaInput>
                <AreaInput>
                    <Input placeholder={ "Sua senha"} />
                </AreaInput>
                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
       </Background>
    )   
}