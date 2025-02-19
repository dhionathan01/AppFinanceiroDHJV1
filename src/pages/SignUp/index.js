import React, {useContext, useState} from 'react';
import { View, Text, Platform } from 'react-native';

// import { Container } from './styles';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
    const { signUp } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSignUp() {
        signUp(email, password, nome);
    }
    return (
       <Background>
            <Container
               behavior={Platform.OS === 'ios' ? 'padding' : false}
                enabled>
                <AreaInput>
                    <Input
                        placeholder={"Seu nome"}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder={"Seu email"}
                        value={email}
                        onChangeText={(text)=> setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder={"Sua senha"}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>
                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>
            </Container>
       </Background>
    )   
}