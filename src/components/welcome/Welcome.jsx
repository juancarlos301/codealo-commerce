import React, { useContext } from "react";
import { AppContext } from "../../context";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { DivNav, DivContainer, DivComponent, DivFoot } from "./StylesWelcome";

const Welcome = ({ children }) => {

    const { darckMode } = useContext(AppContext)
    return (
        <DivContainer darckMode={darckMode}>
            <DivNav>
                <Navbar />
            </DivNav>
            <DivComponent>
                {children}
            </DivComponent>
            <DivFoot>
                <Footer darckMode={darckMode} />
            </DivFoot>
        </DivContainer>
    )
}

export default Welcome;