import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import Modal from '../../modal/index'
import OnModalCart from "../onModalCard/OnModalCart";
//css
import { Card, Image, DivImage, H3, H2, Button, Span, DivPrice, SpanPrice } from "./StylesCards";


export const Cards = ({ name, image, createItemShop, character, price, category }) => {
    const [openModal, setOpenModal] = useState(false)

    const { darckMode } = useContext(AppContext)
    const makeDiscount = name.length
    const Price = `${makeDiscount}% off`

    const Porcentaje = () => {
        const percentage = name.length;
        const firtsModule = percentage / 100
        const secundModule = price * firtsModule
        const resultPercentage = price + secundModule
        const makeString = resultPercentage.toString()
        const result = makeString.substring(0, 4)
        return result
    }

    const viewDiscount = Porcentaje()

    const base = 'https://codealo-commerce-cms.onrender.com';

    const HandleModal = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <Card>
            <DivImage>
                <button onClick={HandleModal}>
                    <Image src={`${base}${image}`} alt="" />
                </button>
            </DivImage>
            <DivPrice>
                <H2 darckMode={darckMode}>${price}</H2>
                <SpanPrice darckMode={darckMode}>${viewDiscount}</SpanPrice>
            </DivPrice>
            <Span darckMode={darckMode}>{Price}</Span>
            <H3 darckMode={darckMode}>{name}</H3>
            <Button type="Button" onClick={() => createItemShop(character)}>Comprar</Button>

            {
                openModal && (<Modal>
                    <OnModalCart
                        image={image}
                        name={name}
                        price={price}
                        character={character}
                        createItemShop={createItemShop}
                        HandleModal={HandleModal}
                        category={category}
                    />
                </Modal>)
            }
        </Card>
    )
}