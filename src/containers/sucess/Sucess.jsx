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
                            <H2>Thanks for Buying!!</H2>
                            <Span>Your order will arrive in 3 days to the address you chose</Span>
                        </ConWord>
                    </DivWords>
                </AllConSuccess>
            </Welcome>
        )
    }
}

export default Success;