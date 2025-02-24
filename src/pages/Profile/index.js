import React from "react";
import {
    Container,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogountText,
} from "./styles";
import Header from "../../components/Header";
export default function Profile() {
    return (
        <Container>
            <Header title={"Meu perfil"}/>
            <Message>Hey, bem vindo de volta!</Message>
            <Name numberOfLines={1}>
                Dhionathan
            </Name>
            <NewLink>
                <NewText>Fazer registro</NewText>
            </NewLink>

            <LogoutButton>
                <LogountText>Sair</LogountText>
            </LogoutButton>
        </Container>
    )
}