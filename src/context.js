import React, { createContext, useState, useMemo } from "react";
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

    const FiltedRedUers = useMemo(() =>
        characters.filter((user) => {
            return user.title.toLowerCase().includes(search.toLowerCase())
        }),
        [characters, search])


    const viewAllPrice = () => {
        if (car.length === 0) {
            return 0
        } else {
            let newPrice = []
            for (let i = 0; i < car.length; i++) {
                const view = newPrice.concat(car[i].price)
                newPrice = view
            }
            const sumPrice = newPrice.reduce((a, b) => a + b)
            const makeString = sumPrice.toString()
            const result = makeString.substring(0, 4)
            return result
        }
    }

    const view = viewAllPrice()

    //carritos


    return (
        <AppContext.Provider value={{
            darckMode, setDarckMode,
            search, setSearch,
            FiltedRedUers,
            setCar,
            car,
            view,
            setNameCategory,
            nameCategory,
            category,

        }}>
            {children}
        </AppContext.Provider>
    )
}
export {
    AppContext
}