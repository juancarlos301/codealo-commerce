import React, { useContext } from "react";
import { Cards } from '../cards/Cards'
import { DivList } from "../../stylesPages/StylesHome";
import { AppContext } from "../../context";

export const ListOfCards = () => {

    const { FiltedRedUers } = useContext(AppContext)



    return (
        <DivList>
            {FiltedRedUers.map((character, i) => (
                <Cards key={i}
                    name={character.title}
                    image={character.image?.url}
                    character={character}
                    price={character.price}
                    category={character.categories[0].name}
                />
            ))}
        </DivList>
    )
}