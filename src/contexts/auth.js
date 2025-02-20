import { useNavigation } from "@react-navigation/native";
import React, {createContext, useState, useEffect} from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@Auth:token')
            if (storageUser) { 
                const response = await api.get('/me', {
                    headers: {
                        Authorization: `Bearer ${storageUser}`
                    }
                })
                    .catch(() => {
                        console.error('Erro ao fazer tentar recuperar o token!')
                        setLoading(false) 
                        setUser(null);
                    })
                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false) 
            }
            setLoading(false)
        }
        loadStorage();
    }, [])
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

    async function signIn(email, password) {
        setLoadingAuth(true)
        console.log('Email teste', email)
        console.log('Senha teste', password)
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })
            const { id, name, token } = response.data;
            const data = {
                id,
                name,
                token,
                email
            };
            await AsyncStorage.setItem('@Auth:token', token);
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser({
                id,
                name,
                email
            });
            setLoadingAuth(false)
        } catch (err) {
            console.error('Error ao logar')
            console.log(err)
            setLoadingAuth(false)
        }
    }
    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
            setUser(null)
        })
    }
    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp,signIn, signOut, loadingAuth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;