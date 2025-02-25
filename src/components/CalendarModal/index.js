import React, {useState} from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Container,ButtonFilter, ButtonFilterText, ModalContent } from "./styles";

import { Calendar, LocaleConfig } from 'react-native-calendars';
/* import { ptBR } from "./localeCalendar";

LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br'; */
export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markeddates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        console.log(date.dateString);
        setDateNow(new Date(date.dateString));
        const markedDay = {};
        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#00BFFF',
            textColor: '#FFF'
        }
        setMarkedDates(markedDay)
    }
    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible()
    }
    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex: 1}}></View>
            </TouchableWithoutFeedback>
            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markeddates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',

                    }}
                />
                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}