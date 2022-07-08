import React, { useContext } from "react";
import { ListOfCards } from "../components/listOfCards/ListOfCards";
import Navbar from "../components/navbar/navbar";
import { AppContext } from "../context";
import ButtonIconShop from "../components/buttonIconShop/ButtonIconShop";
//css
import {
    DivHome, Button, DivButton, DivAllList, DivContainerWel,
    DivContainerContent, H1, DivTitle
} from "../stylesPages/StylesHome";
import Footer from "../components/footer/footer";
export const Home = () => {
    const { setDarckMode, darckMode } = useContext(AppContext)



    const ChangeOnClick = () => {
        setDarckMode(prevState => !prevState)
    }


    return (
        <div>
            <DivContainerWel>
                <Navbar />
                <DivButton>
                    <Button onClick={ChangeOnClick} darckMode={darckMode}>{!darckMode ? "Darck Mode" : "Light Mode"}</Button>
                </DivButton>
            </DivContainerWel>
            <DivContainerContent>
                <DivHome darckMode={darckMode}>
                    <DivTitle>
                        <H1 darckMode={darckMode}>Products</H1>
                        <ButtonIconShop />
                    </DivTitle>
                    <DivAllList>
                        <ListOfCards />
                    </DivAllList>
                </DivHome>
            </DivContainerContent>
            <Footer darckMode={darckMode} />
        </div>
    )
}