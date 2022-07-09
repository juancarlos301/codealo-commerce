import React, { useContext } from "react";
import Welcome from '../../components/welcome/Welcome'
import { AppContext } from "../../context";
import { Cards } from '../../components/cards/Cards'
import ButtonIconShop from "../../components/buttonIconShop/ButtonIconShop";
// css

import { DivList, DivAllList, H1, DivTitle } from "../../stylesPages/StylesHome";

const Category = () => {

    const { category, nameCategory, darckMode } = useContext(AppContext)

    const FilterCategories = () => {
        if (nameCategory === '') { return category }
        else if (nameCategory === 'back') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        } else if (nameCategory === 'front') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        } else if (nameCategory === 'ssg') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        } else if (nameCategory === 'container') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        } else if (nameCategory === 'database') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        } else if (nameCategory === 'other') {
            const result = category.filter((x) => x.slug === nameCategory)
            return result[0].products
        }

    }

    const categoriesFoMap = FilterCategories()


    return (
        <Welcome>
            <DivAllList darckMode={darckMode}>
                <DivTitle>
                    <H1 darckMode={darckMode}>
                        {`El filtro es: ${nameCategory[0].toUpperCase()}${nameCategory.substring(1)}`}
                    </H1>
                    <ButtonIconShop />
                </DivTitle>
                <DivList>
                    {categoriesFoMap.map(character => (
                        <Cards key={character.id}
                            name={character.title}
                            image={character.image?.url}
                            character={character}
                            price={character.price}
                            category={nameCategory}
                        />))}
                </DivList>
            </DivAllList>
        </Welcome>
    )
}
export default Category;


