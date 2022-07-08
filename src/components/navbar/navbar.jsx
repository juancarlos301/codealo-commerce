import React, { useCallback, useContext, useRef, useState } from "react";
import { AppContext } from "../../context";
import { BsSearch, BsArrowDownShort } from "react-icons/bs";
//css
import {
    NavbarCon, Input, Linke, Anchor, Divinput, DivDropDown, Ul, Li, ButtonDrop,
    LinkToCat, ContainerBars, ButtonBar, SpanBar, ContainerAll
} from "./StylesNavbar";

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    const [click, setClick] = useState(false)

    const Ref = useRef(null)

    const { setSearch, search, setNameCategory } = useContext(AppContext)

    const HandleSearch = useCallback(() => {
        setSearch(Ref.current.value)
    }, [setSearch])

    const ChangeDrop = () => {
        setDropDown(PrevState => !PrevState)
    }

    const SelectCategory = (cat) => {
        setNameCategory(cat)
    }


    const handleClick = () => {
        setClick(!click)
    }
    return (
        <NavbarCon>
            <ContainerAll open={click}>
                <Linke to="/">Home</Linke>
                <Anchor href="http://juanca.herokuapp.com/" target="_blank" rel="noopener noreferrer">Contáctanos</Anchor>
                <DivDropDown>
                    <ButtonDrop onClick={() => ChangeDrop()}>Categories<BsArrowDownShort size="28px" /></ButtonDrop>
                    <Ul visible={dropDown}>
                        <LinkToCat to="/category">
                            <Li onClick={() => SelectCategory('back')}>Back</Li>
                            <Li onClick={() => SelectCategory('front')}>Front</Li>
                            <Li onClick={() => SelectCategory('ssg')}>SSG</Li>
                            <Li onClick={() => SelectCategory('container')}>Container</Li>
                            <Li onClick={() => SelectCategory('database')}>Database</Li>
                            <Li onClick={() => SelectCategory('other')}>Other</Li>
                        </LinkToCat>
                    </Ul>
                </DivDropDown>

                <Divinput>
                    <BsSearch fill="white" size="28px" /><Input type="text" value={search} ref={Ref} onChange={HandleSearch} />
                </Divinput>
            </ContainerAll>

            <ContainerBars>
                <ButtonBar onClick={handleClick}>
                    <SpanBar></SpanBar>
                    <SpanBar></SpanBar>
                    <SpanBar></SpanBar>
                </ButtonBar>
            </ContainerBars>
        </NavbarCon>
    )
}
export default Navbar;