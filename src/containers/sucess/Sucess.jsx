import React, { useState } from "react";
import { AllConSuccess, H2, Span, DivWords, ConWord, ButtonNext, DivButtonNext } from "./StylesSuccess";
import Welcome from '../../components/welcome/Welcome'
import Loader from '../../components/loader/Loader'
import { useNavigate } from "react-router-dom";

const Success = () => {

    const [onLoading, setOnLoading] = useState(true)

    setTimeout(() => {
        setOnLoading(false)
    }, 2900)

    const navigate = useNavigate()

    const PasstoHistory = () => {
        navigate("/history")


    }
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
                        <DivButtonNext>

                            <ButtonNext onClick={() => PasstoHistory()}>
                                <H2>View shopping history</H2>
                            </ButtonNext>
                        </DivButtonNext>
                    </DivWords>
                </AllConSuccess>
            </Welcome>
        )
    }
}

export default Success;