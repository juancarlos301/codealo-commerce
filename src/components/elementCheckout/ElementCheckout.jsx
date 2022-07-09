import React, { useContext } from "react";
import { AppContext } from "../../context";

import { BsPlusSquare, BsDashSquare } from "react-icons/bs";

import { ElementCheck, ItemCheck, H4, H5, Button, Image, H5Amount, DivAmount } from "./StylesElementCheckout";

const ElementCheckout = ({ character }) => {

    const base = 'https://codealo-commerce-cms.onrender.com';

    const { setCar, darckMode, car, createItemShop } = useContext(AppContext)

    function deleteItemShop(character) {
        const inCart = car.find((productInCart) => productInCart.id === character.id)
        console.log(inCart.amount)
        if (inCart.amount === 1) {
            setCar(
                car.filter((productInCart) => productInCart.id !== character.id)
            )
        } else {
            setCar(
                car.map((productInCart) => {
                    if (productInCart.id === character.id) {
                        return { ...inCart, amount: inCart.amount - 1 }
                    } else return productInCart
                }
                ))
        }
    }

    const Total = () => {
        const number = character.amount * character.price
        const makeString = number.toString()
        const result = makeString.substring(0, 4)
        return result
    }
    return (
        <ItemCheck>
            <div>
                <Image src={`${base}${character.image.url}`} alt="" />
            </div>
            <ElementCheck darckMode={darckMode}>
                <div>
                    <H4 darckMode={darckMode}>{character.title}</H4>
                    <div>
                        <Button type="button" onClick={() => createItemShop(character)}
                            darckMode={darckMode}>
                            <BsPlusSquare size="25px" /></Button>
                        <Button type="button" onClick={() => deleteItemShop(character)}
                            red={true}
                            darckMode={darckMode}
                        >
                            <BsDashSquare size="25px" /></Button>
                    </div>
                </div>
                <div>
                    <DivAmount>
                        <H5Amount darckMode={darckMode}>{character.amount}</H5Amount>
                    </DivAmount>
                    <H5 darckMode={darckMode}>Total: ${Total()}</H5>
                </div>

            </ElementCheck>

        </ItemCheck>
    )
}
export default ElementCheckout;