import React, { useContext } from "react";
import {
    CheckoutCon, ButtonBar,
    AllContainer, H2,
    H3
} from './StylesCheckout'
import { Link } from "react-router-dom";
import Welcome from '../../components/welcome/Welcome'
import { AppContext } from "../../context";
import ElementCheckout from "../../components/elementCheckout/ElementCheckout";

const Checkout = () => {
    const { car, TotalPay, darckMode } = useContext(AppContext)


    return (
        <Welcome>
            <AllContainer darckMode={darckMode}>
                <CheckoutCon darckMode={darckMode} >
                    <div>
                        <H2 darckMode={darckMode}>Order List</H2>
                        {car.length > 0 ? " " : <H3>You Haven't Orders :(</H3>}
                        {car.map((character, i) => (
                            <ElementCheckout
                                key={i}
                                character={character}
                            />
                        ))}
                    </div>
                    <div>
                        <H3 darckMode={darckMode}>Total to pay: ${TotalPay()}</H3>


                        {car.length > 0 ? (<Link to="/checkout/information">
                            <ButtonBar type="button">Continuar Pedido</ButtonBar>
                        </Link>)
                            : (
                                <Link to="/">
                                    <ButtonBar type="button">Return to Home</ButtonBar>
                                </Link>
                            )}
                    </div>
                </CheckoutCon>
            </AllContainer>
        </Welcome>
    )
}

export default Checkout;