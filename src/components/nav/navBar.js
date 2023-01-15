import React from "react";
import { Link } from "react-router-dom";
import saveJSON from "../drinks/downloadDrink";
import { useSelector } from "react-redux";

export default function NavBar() {
  const data = useSelector((state) => state.drinks)
    .map(
      (drink) =>
        drink.id +
        1 +
        " Nazwa: " +
        drink.name +
        "\n Składniki: " +
        drink.ingredients +
        "\n Przepis: " +
        drink.recipe +
        "\n\n"
    )
    .join("");

  return (
    <div className="navBar">
      <h1>Coctails</h1>
      <Link to="/">Strona główna</Link>
      <Link to="statistics">Statystyki</Link>
      <button type="submit" onClick={() => saveJSON({ data })}>
        Pobierz wszystkie przepisy
      </button>
    </div>
  );
}
