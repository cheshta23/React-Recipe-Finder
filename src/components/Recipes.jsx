import React, { useState } from "react";
import Axios from "axios";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";
function Recipes(){
    const [query,setQuery]=useState("");
    const [isLoading,setLoading]=useState(false);
    const [recipes, setRecipes] = useState([]);

    const url=`https://api.edamam.com/search?q=${query}&app_id=f96cc223&app_key=e5d23478c3050f4e635905516f338dd1`;
    function handleChange(event){
        setQuery(event.target.value);
    }

    const searchRecipes=async ()=>{
        setLoading(true);
        const res=await Axios.get(url);
        setRecipes(res.data.hits);
        console.log(res.data.hits);
        setLoading(false);
    }

    function handleSubmit(event){
        event.preventDefault();
        searchRecipes();
    }

    return <div className="container">
    <Searchbar isLoading={isLoading} handleChange={handleChange} query={query} handleSubmit={handleSubmit}/>
    <div className="recipes">
    {recipes.length>0? recipes.map((recipe,index)=>(
        <RecipeCard key={index}  recipe={recipe.recipe}/>
    )) :<h1 className="noRes">No Results Found :( </h1>}
    </div>
    </div>
}

export default Recipes;