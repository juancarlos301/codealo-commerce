import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import Welcome from "../../components/welcome/Welcome";

//css
import { InfoElement, Span, Title, H2, Imagen, DivOne, ContainerAll, DivTwo, Des, DivDes, DivH1 } from "./StylesOrdersHistory";
const OrdersHistory = () => {
    const { loading } = useContext(AppContext)

    const [getOrders, setGetOrders] = useState([])



    useEffect(() => {
        const response = localStorage.getItem('history')
        const result = JSON.parse(response)
        setGetOrders(result)

    }, [loading])

    const base = 'https://codealo-commerce-cms.onrender.com';

    return (
        <Welcome>
            <ContainerAll>
                <DivH1>
                    <H2>{getOrders.length > 1 ? "History of Shopping" : "no has comprado nada"}</H2>
                </DivH1>
                {getOrders.map((item, i) => (
                    <InfoElement
                        key={i}>
                        <DivOne>
                            <Imagen src={`${base}${item.image?.url}`} alt="" />
                            <Title>{item.title}</Title>
                            <DivTwo>
                                <Span>Price of article: ${item.price}</Span>
                                <Span>Buy amount:{item.amount}</Span>
                            </DivTwo>
                        </DivOne>
                        <DivDes>
                            <Des>Description: {item.description}</Des>
                        </DivDes>
                    </InfoElement>
                ))}
            </ContainerAll>
        </Welcome>
    )
}
export default OrdersHistory


