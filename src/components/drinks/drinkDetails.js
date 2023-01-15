/* eslint eqeqeq: 0 */

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DrinkEdit from "./drinkEditForm";
import saveJSON from "./downloadDrink";

export default function DrinkDetails() {
  const { id } = useParams();
  const drinks = useSelector((state) => state.drinks);
  const drink = drinks.find((item) => item.id == id);

  const data =
    drink.id +
    1 +
    " Nazwa: " +
    drink.name +
    "\n Składniki: " +
    drink.ingredients +
    "\n Przepis: " +
    drink.recipe +
    "\n\n";
  return (
    <div className="drinkDetails">
      <img src={drink.image} alt={drink.name} className="drinkImage" />
      <h2>{drink.name}</h2>
      <p>{drink.type}</p>
      <p>{drink.type_of_glass}</p>
      Składniki:
      <ul>
        {" "}
        {drink.ingredients
          .split(",")
          .map((item) => (item !== "" ? <li key={item}>{item}</li> : null))}
      </ul>
      Przepis:{" "}
      <ul>
        {drink.recipe
          .split(".")
          .map((item) => (item !== "" ? <li key={item}>{item}</li> : null))}
      </ul>
      <button type="submit" onClick={() => saveJSON({ data })}>
        Pobierz przepis
      </button>
      <DrinkEdit drink={drink} />
    </div>
  );
}
