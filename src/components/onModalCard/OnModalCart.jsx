import React, { useContext } from "react";
import { AppContext } from '../../context'

//css
import {
    Container, ContainerImag, ContainerContent, Image,
    ContainerButton, H1, H2, ContainerText, Text, Button
} from "./StylesOnModalCart";

const OnModalCart = ({ image, name, character, price, createItemShop, HandleModal, category }) => {

    const { darckMode } = useContext(AppContext)

    const base = 'https://codealo-commerce-cms.onrender.com';

    return (
        <Container darckMode={darckMode}>
            <ContainerImag>
                <button onClick={() => HandleModal()}>
                    <Image src={`${base}${image}`} alt="" />
                </button>
            </ContainerImag>
            <ContainerContent>
                <ContainerText>
                    <H1 darckMode={darckMode}>{name}</H1>
                </ContainerText>
                <ContainerText>
                    <H2 darckMode={darckMode}>category: {category}</H2>
                </ContainerText>
                <Text darckMode={darckMode}>Price: ${price}</Text>
                <Text darckMode={darckMode}>{character.description}</Text>
                <ContainerButton>
                    <Button onClick={() => createItemShop(character)}
                        darckMode={darckMode}
                    >Comprar</Button>
                    <Button onClick={() => HandleModal()}
                        off={true}
                        darckMode={darckMode}
                    >
                        Close
                    </Button>

                </ContainerButton>
            </ContainerContent>
        </Container>
    )
}
export default OnModalCart