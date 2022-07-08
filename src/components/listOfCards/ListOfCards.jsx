import React, { useContext } from "react";
import { Cards } from '../cards/Cards'
import { DivList } from "../../stylesPages/StylesHome";
import { AppContext } from "../../context";
import { v4 as uuidv4 } from 'uuid';

export const ListOfCards = () => {

    const { FiltedRedUers, car, setCar } = useContext(AppContext)

    function createItemShop(character) {
        const newCharacter = { ...character, id: uuidv4() }
        setCar([...car, newCharacter]);
    }



    return (
        <DivList>
            {FiltedRedUers.map(character => (
                <Cards key={character.id}
                    name={character.title}
                    image={character.image?.url}
                    character={character}
                    createItemShop={createItemShop}
                    price={character.price}
                    category={character.categories[0].name}
                />
            ))}
        </DivList>
    )
}