import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

export default () => {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3000/meals');
                if (!response.ok) {
                    // 
                }
                const meals = await response.json();
                setLoadedMeals(meals);
            }
            catch (err) {

            }
        }
        fetchMeals();
    }, []);
    return (
        <ul id="meals">{loadedMeals.map(mealItem=><MealItem mealItem={mealItem} key={mealItem.id}/>)}</ul>
    )
}