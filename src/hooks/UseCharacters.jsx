import { useState, useEffect } from "react";


const Base = 'https://codealo-commerce-cms.onrender.com'

const UseCharacters = Url => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch(`${Base}${Url}`).then(response => response.json())
            .then(data => setCharacters(data))
    }, [Url])
    return characters
}
export default UseCharacters;



export const AllCategories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`${Base}/categories`).then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    return categories
}