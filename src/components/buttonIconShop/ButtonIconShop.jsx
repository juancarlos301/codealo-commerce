import React, { useContext } from "react";
import { AppContext } from "../../context";
import { BsCart, BsCartFill } from "react-icons/bs";
//css
import { DivEmoti, H4, Linked } from './StylesButtonIconShop'
const ButtonIconShop = () => {

    const { car, darckMode } = useContext(AppContext)
    return (
        <DivEmoti darckmode={darckMode}>
            <Linked to="/checkout" >
                {darckMode ? <BsCart /> : <BsCartFill />}
            </Linked>
            <H4>{car.length}</H4>
        </DivEmoti>
    )
}
export default ButtonIconShop