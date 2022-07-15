import './RecipeItem.scss';
import {Recipe} from "../../types/Recipe";


export default function RecipeItem({recipe} : {recipe: Recipe}) {
    return (
        <div className="col-sm-6 col-md-3 card m-2">
            <div className="card-title text-center pt-4">
                <h5>{recipe.name}</h5>
            </div>
            <div className="card-body">
                <ul className="">
                    {recipe.ingredients.map(ing => (
                        <li key={ing.name}>{ing.name}
                            <ul>
                                {ing.subIngredient && ing.subIngredient.map(subIng => (
                                    <li key={subIng}>{subIng}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=" text-center mb-4">
                <button className="btn btn-primary">Order Now!</button>
            </div>
        </div>
    )
}
