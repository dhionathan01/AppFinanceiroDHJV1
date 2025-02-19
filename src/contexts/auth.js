import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, {createContext, useState} from "react";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const navigation = useNavigation();

    async function signUp(email, password, nome) {
        console.log('Email digitado:', email)
        console.log('Senha digitada:', password)
        console.log('Nome digitado:', nome)
        setLoadingAuth(true)
        try {
            const response = await api.post('/users', {
                email: email,
                password: password,
                name: nome
            })
            setLoadingAuth(false)
            navigation.goBack();
        } catch (err) {
            console.error('Error ao cadastrar usuário')
            console.log(err)
            setLoadingAuth(false)
        }
    
    }
    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;