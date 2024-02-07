
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default () => {
    
    const {data : loadedMeals , isLoading , error} = useHttp('http://localhost:3000/meals', requestConfig,[]);

    if(isLoading) return <p className="center">Fetching meals...</p>
    // if(error) console.log('error occuredd')
    if(error) return <Error title="failed to fetch meals" message={error.message}></Error>
   
    return (
        <ul id="meals">{loadedMeals.map(mealItem=><MealItem mealItem={mealItem} key={mealItem.id}/>)}</ul>
    )
}