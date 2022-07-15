import './Home.scss';
import RecipeItem from "../recipeitem/RecipeItem";
import {Recipe} from "../../types/Recipe";
import {useEffect, useState} from "react";
import {projectFirestore} from "../../firebase/config";

export default function Home() {


    const [recipes, setRecipes] = useState<Recipe[]>([]);

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




    return (
        <div className="Home mt-5">
            <div className="container">
                <div className="text-center">
                    <h3 className="text-black">All Recipes</h3>
                </div>


                <div className="row justify-content-center mt-5">
                    {recipes.map(recipe => (
                        <RecipeItem key={recipe.name} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    )
}
