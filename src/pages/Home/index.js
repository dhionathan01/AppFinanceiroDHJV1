import React, {useContext, useEffect, useState} from "react";
import { View, Text, Button } from "react-native"

import { AuthContext } from "../../contexts/auth";

import Header from '../../components/Header';
import { Background } from "./styles";
export default function Home() {
    const { signOut, user } = useContext(AuthContext)
    const [listBalance, setListBalance] = useState([]);
    return (
        <Background>
            <Header title={'Minhas movimentações'} />
        </Background>
    )
}