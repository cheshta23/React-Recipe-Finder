import React from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
function RecipeCard(props){
    const [show, setShow] = useState("");
    const { label, image, ingredients, url } = props.recipe;
    return <div className="recipeContainer">
         <Dialog
        onClose={() => console.log("adsadad")}
        aria-labelledby="simple-dialog-title"
        open={!!show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <span className="recipeName">{label}</span>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <span className="seeNew" onClick={() => window.open(url)}>See More</span>
          <span className="seeMore" onClick={() => setShow("")}>Close</span>
        </DialogActions>
      </Dialog>
      <img src={image} alt={label} className="coverImg" />
      <span className="recipeName">{label}</span>
      <span className="ingredientsText" onClick={() => setShow(!show)}>Ingredients</span>
      <span className="seeMore" onClick={() => window.open(url)}>See Complete Recipe</span>
    </div>;
}

export default RecipeCard;