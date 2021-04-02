import React from 'react'

const FoodInput = ({search, setSearch}) => {
    return (
        <div>
            <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)}/>
            <div>
            </div>
        </div>
    )
}

export default FoodInput
