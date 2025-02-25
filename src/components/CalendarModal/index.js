import React, {useState} from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Container,ButtonFilter, ButtonFilterText, ModalContent } from "./styles";

import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function CalendarModal({ setVisible }) {
    const [dateNow, setDateNow] = useState(new Date());
    const [markeddates, setMarkedDates] = useState({});

    function handleOnDayPress(date) {
        console.log(date.dateString);
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
                />
                <ButtonFilter>
                    <ButtonFilterText>Modal Content</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}