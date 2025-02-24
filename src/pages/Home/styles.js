import styled from "styled-components";

export const Background = styled.SafeAreaView`
flex: 1;
`;
export const Title = styled.Text`
    margin-left: 4px;
    color: #121212;
    margin-bottom: 14px;
    font-weight: bold;
    font-size: 18px;
`;
export const ButtonMenu = styled.TouchableOpacity``;
export const ListaBalance = styled.FlatList`
    max-height: 190px;
    height: 190px;
`
export const Area = styled.View`
    margin-top: 24px;
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
    padding-right: 14px;
    padding-left: 14px;
    padding-top: 14px;
    align-items: baseline;
`;
export const List = styled.FlatList`
    flex: 1;
    background-color: #FFF;
`;