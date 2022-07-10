import React, { createContext, useState, useMemo, useEffect } from "react";
import UseCharacters from './hooks/UseCharacters'
import { AllCategories } from "./hooks/UseCharacters";
const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const UrlProducts = '/products'
    const characters = UseCharacters(UrlProducts)
    const [darckMode, setDarckMode] = useState(false)
    const [car, setCar] = useState([])
    //filtro de busqueda de categories
    const [nameCategory, setNameCategory] = useState('back')
    const category = AllCategories()
    //busqueda a la api y filtro de busqueda
    const [search, setSearch] = useState('')
    //state de cantidad del carrito
    const [productLength, setProductsLength] = useState(0)
    //states de usuario
    const [register, setRegister] = useState(false)
    const [jwt, setJwt] = useState('')
    const [loading, setLoading] = useState(true)

    const FiltedRedUers = useMemo(() =>
        characters.filter((user) => {
            return user.title.toLowerCase().includes(search.toLowerCase())
        }),
        [characters, search])

    //carritos

    function createItemShop(character) {
        const inCart = car.find((productInCart) => productInCart.id === character.id)
        if (inCart) {
            setCar(
                car.map((productInCart) => {
                    if (productInCart.id === character.id) {
                        return { ...inCart, amount: inCart.amount + 1 }
                    } else return productInCart;
                })
            )
        } else {
            setCar([...car, { ...character, amount: 1 }])
        }
    }

    //ver precio total

    const TotalPay = () => {
        const number = car.reduce((previous, current) =>
            previous + current.amount * current.price, 0)
        const makeString = number.toString()
        const result = makeString.substring(0, 4)
        return result
    }

    //ver cantidad en el carrito
    useEffect(() => {
        setProductsLength(
            car.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [car])

    return (
        <AppContext.Provider value={{
            darckMode, setDarckMode,
            search, setSearch,
            FiltedRedUers,
            setCar,
            car,
            TotalPay,
            setNameCategory,
            nameCategory,
            category,
            createItemShop,
            productLength,
            register,
            setRegister,
            setJwt,
            jwt,
            loading,
            setLoading

        }}>
            {children}
        </AppContext.Provider>
    )
}
export {
    AppContext
}