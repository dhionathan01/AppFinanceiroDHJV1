import React, {useContext, useEffect, useState} from "react";
import { View, Text, Button, TouchableOpacity, Modal } from "react-native"

import { AuthContext } from "../../contexts/auth";

import Header from '../../components/Header';
import { Background, ListaBalance, Area, Title, List } from "./styles";

import api from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

export default function Home() {
    const { signOut, user } = useContext(AuthContext)
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date())
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] =  useState(false);

    useEffect(() => {
        let isActivate = true;

        async function getMovements() {
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')
            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })
            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })
            if (isActivate) {
                setMovements(receives.data)
                setListBalance(balance.data)
            }
        }
        getMovements();

        return () => isActivate = false;
    }, [isFocused, dateMovements])
    console.log(movements)
    async function handleDelete(id) {
        try {
            await api.delete(`/receives/delete/`, {
                params: {
                    item_id: id
                }
            })
            setDateMovements(new Date())
        } catch (err) {
            console.err(err)
        }
    }
    return (
        <Background>
            <Header title={'Minhas movimentações'} />
            <ListaBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (
                    <BalanceItem data={item} />
                ) }
            />
            <Area>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Icon name={"event"} color={"#121212"} size={30} />
                </TouchableOpacity>
                <Title>Ultimas movimentações</Title>
            </Area>
           
            <List
                data={movements}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contetnContainerStyle={{paddingBottom:20}}
                renderItem={({ item }) =>
                    <HistoricoList
                        data={item}
                        deleteItem={handleDelete}
                    />}
            />
            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <CalendarModal setVisible={()=> setModalVisible(false)} />
            </Modal>
        </Background>
    )
}