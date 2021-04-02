import React, {useState, useEffect} from 'react'
import axios from "axios"
import FoodList from "./FoodList"
import FoodInput from "./FoodInput"

const Food = () => {
    const [food, setFood] = useState([])
    const [search, setSearch] = useState("")
        useEffect(() => {
            const loadData = async () => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                setFood(res.data.meals)
            
        }
           loadData()
        }, [search])
  
    return (
        <div className="header">
            <h1>Food recipe or ingredients</h1>
            <FoodInput search={search} setSearch={setSearch}/>
            <FoodList food={food}/>
        </div>
    )
}

export default Food
