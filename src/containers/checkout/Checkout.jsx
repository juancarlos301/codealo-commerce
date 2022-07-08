import React, { useContext } from "react";
import {
    CheckoutCon, ItemCheck, ButtonBar, ElementCheck,
    AllContainer, ButtonDelete, H2, H4, H5,
    H3
} from './StylesCheckout'
import { Link } from "react-router-dom";
import Welcome from '../../components/welcome/Welcome'
import { BsFillTrashFill } from "react-icons/bs";
import { AppContext } from "../../context";

const Checkout = () => {
    const { car, setCar, view, darckMode } = useContext(AppContext)

    function deleteItemShop(character) {
        setCar(car.filter(item => item.id !== character.id));
    }
    return (
        <Welcome>
            <AllContainer darckMode={darckMode}>
                <CheckoutCon darckMode={darckMode} >
                    <div>
                        <H2 darckMode={darckMode}>Lista de pedidos</H2>
                        {car.length > 0 ? " " : <h5>usted no tiene pedidos :(</h5>}
                        {car.map((character) => (<ItemCheck key={character.id}>
                            <ElementCheck darckMode={darckMode}>
                                <H4 darckMode={darckMode}>{character.title}</H4>
                                <H5 darckMode={darckMode}> {character.price}</H5>
                            </ElementCheck>
                            <ButtonDelete type="button" onClick={() => deleteItemShop(character)}><BsFillTrashFill size="25px" /></ButtonDelete>
                        </ItemCheck>))}
                    </div>
                    <div>
                        <H3 darckMode={darckMode}>Total a Pagar: ${view}</H3>


                        {car.length > 0 ? (<Link to="/checkout/information">
                            <ButtonBar type="button">Continuar Pedido</ButtonBar>
                        </Link>)
                            : (
                                <Link to="/">
                                    <ButtonBar type="button">Volver a Home</ButtonBar>
                                </Link>
                            )}
                    </div>
                </CheckoutCon>
            </AllContainer>
        </Welcome>
    )
}

export default Checkout;