import React, {useState} from 'react'
import MeasureIngredient from "./MeasureIngredient"

const FoodList = (props) => {
    const [ingredient, setIngredient] = useState([])
    const [measure, setMeasure] = useState([])
    const [toggle, setToggle] = useState(false)
    const handleClick = (item) => {
        const {strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
        } = item;
            console.log(strMeasure1)
            setMeasure([strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7])
            setIngredient([strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7])   
    }

    const backdropHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            {props.food.length === 0 ? <h1>No item found</h1>: 
                <div className="food">
                    {props.food.map((item, index) => (
                        <div key={index} className="food-content">
                            <img 
                            onClick={() => {
                            setToggle(!toggle)
                            handleClick(item)}}
                            src={item.strMealThumb} 
                            height="100px" 
                            width="100px"/>
                            <p>{item.strMeal}</p>
                        </div>
                    ))}
                       {toggle && <MeasureIngredient  ingredient={ingredient} measure={measure} show={backdropHandler}/>}
                </div>}
        </div>
    )
}

export default FoodList
