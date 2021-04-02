import React from 'react'
import Backdrop from "./Backdrop"

const MeasureIngredient = ({measure, ingredient, show}) => {
    const [one, two, three, four, five, six, seven] =  measure
    const [ingre1, ingre2, ingre3, ingre4, ingre5, ingre6, ingre7] = ingredient
    return (
        <div>
            <Backdrop clicked={show}/>
            <div className="para">
                <p className="p">{one} {ingre1}</p>
                <p className="p">{two} {ingre2}</p>
                <p className="p">{three} {ingre3}</p>
                <p className="p">{four} {ingre4}</p>
                <p className="p">{five} {ingre5}</p>
                <p className="p">{six} {ingre6}</p>
                <p className="p">{seven} {ingre7}</p>
            </div>
                {console.log(measure)}
        {console.log(ingredient)}
    </div>
    )
}

export default MeasureIngredient
