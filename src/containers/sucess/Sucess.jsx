import React, { useState } from "react";
import { AllConSuccess, H2, Span, DivWords, ConWord } from "./StylesSuccess";
import Welcome from '../../components/welcome/Welcome'
import Loader from '../../components/loader/Loader'

const Success = () => {

    const [onLoading, setOnLoading] = useState(true)

    setTimeout(() => {

        setOnLoading(false)

    }, 2900)

    if (onLoading) {
        return <Loader />
    } else {
        return (
            <Welcome>
                <AllConSuccess>
                    <DivWords>
                        <ConWord>

                            <H2>Gracias por tu compra!!</H2>
                            <Span>tu pedido llegará en 3 días a la dirección que elejiste</Span>
                        </ConWord>
                    </DivWords>
                </AllConSuccess>
            </Welcome>
        )
    }
}

export default Success;