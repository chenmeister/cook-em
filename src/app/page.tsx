import { ChangeEvent, useState } from "react";

interface GeneratedRecipe {
  title: string;
  picture: string;
  ingredients: string[];
  directions: string[];
}

export default function Home() {

  const [ingredients, setIngredients] = useState<string>('');
  const [recipe, setRecipe] = useState<GeneratedRecipe | undefined>(undefined);

  const handleIngredients = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredients(event.target.value);
  }

  const createARecipe = () => {
    console.log(`Create a recipe with the following ingredients: ${ingredients}
      Return Data in JSON with the following information:
      {
        title: <title_here>,
        picture: <link to picture here>
        ingredients: [place ingredients here]
        directions: [place step by step directions here]
      }
      `);
      setRecipe({
        title: 'Test',
        picture: 'image here',
        ingredients: ['broccoli', 'potatoes', 'steak'],
        directions: ['cook broccoli', 'cook potatoes', 'cook steak']
      })
  }

  return (
    <div className="container">
      <div>
        <h1>What do we have in the fridge?</h1>
        <input 
          type="text" 
          value={ingredients} 
          onChange={handleIngredients}
          placeholder="separate by commas ','"/>
        <button onClick={createARecipe}>Cook Something Up</button>
      </div>
      { recipe &&
        <div>
          {/** Only show recipe here once its loaded */}
          <h1>{recipe.title}</h1>
          {/** Picture here */}
          <h2>Ingredients</h2>
          <ul>
            { recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>) }
          </ul>
          <h2>Cooking Directions</h2>
          <ol>
            { recipe.directions.map((dir, index) => <li key={index}>{dir}</li>)}
          </ol>
        </div>
      }
    </div>
  );
}
