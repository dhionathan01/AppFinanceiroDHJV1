import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, {createContext, useState} from "react";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({
        nome: 'Dhionthan Jobim'
    })
    const navigation = useNavigation();

    async function signUp(email, password, nome) {
        console.log('Email digitado:', email)
        console.log('Senha digitada:', password)
        console.log('Nome digitado:', nome)
        try {
            const response = await api.post('/users', {
                email: email,
                password: password,
                name: nome
            })
            navigation.goBack();
        } catch (err) {
            console.error('Error ao cadastrar usuário')
            console.log(err)
        }
    
    }
    return (
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;