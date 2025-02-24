import React from "react";
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText
} from './styles'

import Icon from "react-native-vector-icons/Feather"
import { TouchableWithoutFeedback, Alert} from "react-native";
export default function HistoricoList({ data, deleteItem }) {
    function handleDeleteItem() {
        Alert.alert("Excluir", "Deseja excluir esse item?", [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Continuar',
                onPress: () => deleteItem(data.id)
            }
        ])
    }
    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                            name={ data.type === 'despesa' ? "arrow-down" : "arrow-up"}
                            size={20}
                            color={"#FFF"}
                        ></Icon>
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>
                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}