import React, { useContext } from "react";
import {
    AllContainer, InformationCon,
    ConButtons, SlideBar,
    InfoItem, InfoElement, H2, ContainerA, Title,
    ButtonBuy, Linked, Span
} from "./StylesInformation";

import RegisterAndLogin from "../../components/user/userRegisterAndLogin";

import { useNavigate } from "react-router-dom";
import Welcome from '../../components/welcome/Welcome'
import { AppContext } from "../../context";

const Information = () => {
    const navigate = useNavigate()
    const { car, TotalPay, register, darckMode, jwt, setLoading } = useContext(AppContext)

    const HandleSubmit = () => {
        navigate("/checkout/success")

        if (jwt.length > 0) {
            setLoading(true)
            const response = localStorage.getItem('history')
            const result = JSON.parse(response)
            const con = car.concat(result)
            const send = JSON.stringify(con)
            localStorage.setItem('history', send)
            setLoading(false)
        }
    }

    return (
        <Welcome>
            <AllContainer darckMode={darckMode}>
                <InformationCon darckMode={darckMode}>
                    <ContainerA>
                        <div>
                            <RegisterAndLogin />
                        </div>
                        <ConButtons>
                            <div >
                                <Linked to="/checkout">
                                    To return
                                </Linked>
                            </div>
                            {
                                register && <ButtonBuy onClick={HandleSubmit}>
                                    Buy
                                </ButtonBuy>
                            }
                        </ConButtons>
                    </ContainerA>
                    <SlideBar>
                        <H2>{car.length > 0 ? "Order" : "You Haven't Orders :("}</H2>
                        {
                            car.length > 0 && <H2>Total to pay: ${TotalPay()}</H2>
                        }
                        {car.map((item) => (
                            <InfoItem key={item.id}>
                                <InfoElement>
                                    <Title>{item.title}</Title>
                                    <Span>Amount: {item.amount}</Span>
                                </InfoElement>
                            </InfoItem>
                        ))}
                    </SlideBar>
                </InformationCon>
            </AllContainer>
        </Welcome>
    )
}
export default Information;
