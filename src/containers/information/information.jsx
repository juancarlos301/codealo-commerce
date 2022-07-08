import React, { useContext, useRef } from "react";
import {
    AllContainer, InformationCon, Input,
    ConButtons, SlideBar,
    InfoItem, InfoElement, H2, ContainerA, Title,
    ButtonBuy, Linked, Span
} from "./StylesInformation";


import { useNavigate } from "react-router-dom";
import Welcome from '../../components/welcome/Welcome'
import { AppContext } from "../../context";

const Information = () => {
    const navigate = useNavigate()
    const { car } = useContext(AppContext)

    const form = useRef(null)

    const HandleSubmit = () => {
        navigate("/checkout/success")
    }

    return (
        <Welcome>
            <AllContainer>
                <InformationCon>
                    <ContainerA>
                        <div>
                            <H2>Contact Information</H2>
                        </div>
                        <div className="formulario">
                            <form ref={form}>
                                <Input type="text" placeholder="Name" name="name" />
                                <Input type="email" placeholder="Email" name="email" />
                                <Input type="text" placeholder="apto" name="apto" />
                                <Input type="text" placeholder="City" name="city" />
                                <Input type="text" placeholder="State" name="country" />
                                <Input type="text" placeholder="department" name="state" />
                                <Input type="text" placeholder="Postal Code" name="cp" />
                                <Input type="text" placeholder="Phone Number" name="phone" />
                            </form>
                        </div>
                        <ConButtons>
                            <div >
                                <Linked to="/checkout">
                                    To return
                                </Linked>
                            </div>
                            <ButtonBuy onClick={HandleSubmit}>
                                Buy
                            </ButtonBuy>
                        </ConButtons>
                    </ContainerA>
                    <SlideBar>
                        <H2>{car.length > 0 ? "Order" : "You Haven't Orders :("}</H2>

                        {car.map((item) => (
                            <InfoItem key={item.id}>
                                <InfoElement>
                                    <Title>{item.title}</Title>
                                    <Span>{item.price}</Span>
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