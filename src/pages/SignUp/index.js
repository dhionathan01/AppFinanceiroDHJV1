import React, {useContext} from 'react';
import { View, Text, Platform } from 'react-native';

// import { Container } from './styles';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
    const { user } = useContext(AuthContext)
    function handleSignUp() {
        console.log(user)
        alert('Teste')
    }
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
                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
       </Background>
    )   
}