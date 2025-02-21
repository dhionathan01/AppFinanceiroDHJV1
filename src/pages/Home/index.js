import React, {useContext, useEffect, useState} from "react";
import { View, Text, Button } from "react-native"

import { AuthContext } from "../../contexts/auth";

import Header from '../../components/Header';
import { Background, ListaBalance } from "./styles";

import api from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";

export default function Home() {
    const { signOut, user } = useContext(AuthContext)
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date())

    useEffect(() => {
        let isActivate = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })
            if (isActivate) {
                setListBalance(balance.data)
            }
        }
        getMovements();

        return () => isActivate = false;
    }, [isFocused])
    return (
        <Background>
            <Header title={'Minhas movimentações'} />
            <ListaBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndcator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (
                    <BalanceItem data={item} />
                ) }
            />
        </Background>
    )
}