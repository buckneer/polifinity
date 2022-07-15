import "./Search.scss";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";
import {Recipe} from "../../types/Recipe";
import RecipeItem from "../recipeitem/RecipeItem";

export default function Search() {

    let queryString = useLocation().search;
    let searchParams = new URLSearchParams(queryString);
    const query = searchParams.get("q");

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [subIngredients, setSubIngredients] = useState<string[]>([]);
    const [matchedRecipes, setMatchedRecipes] = useState<Recipe[]>([]);


    // Get all data
    useEffect(() => {
        projectFirestore.collection("recipes").onSnapshot(
            (snapshot) => {
                if(snapshot.empty) {
                    console.log("Empty")
                } else {
                    let results : Recipe[] = []
                    snapshot.docs.forEach(item => {
                        let data = item.data()
                        results.push({name: data.name, ingredients: [...data.ingredients]})
                    })

                    setRecipes(results)
                }
            }
        )

    }, []);

    useEffect(() => {

        let hits : Recipe[] = []

        recipes.map((recipe) => {
            recipe.ingredients.map(ingredient => {

                ingredient.subIngredient?.filter(subIng => {
                    if(subIng.match(new RegExp(query!, "i"))) {
                        hits.push(recipe)

                    }
                })
            })
        })
        let uniqSet = new Set(hits)
        let uniq = Array.from(uniqSet)
        setMatchedRecipes(uniq)


    }, [query]);



    return (
        <div className="Search mt-5">
            <div className="container">
                <div className="text-center">
                    <h3 className="text-black">Searching by: {query}</h3>
                </div>
            </div>


            <div className="row justify-content-center mt-5">
                {matchedRecipes.map(recipe => (
                    <RecipeItem key={recipe.name} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}
