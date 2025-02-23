import React, {useState} from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';

export default function New() {
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />
                <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
                    <Input
                        placeholder={"Descrição desse registro..."}
                        onChangeText={(text)=> setLabelInput(text) }
                        value={labelInput}
                    />
                    <Input
                        placeholder={"Valor desejado!"}
                        keyboardType={"numeric"}
                        onChangeText={(text)=> setValueInput(text) }
                        value={valueInput}
                    />
                    <SubmitButton>
                        <SubmitText>
                            Registrar
                        </SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}