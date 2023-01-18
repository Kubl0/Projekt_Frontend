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
    <div>
      <div className="navBar" class="flex space-x-4 p-3 pl-5 bg-gray-600">
        <Link
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          to="/"
        >
          Strona główna
        </Link>
        <Link
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          to="statistics"
        >
          Statystyki
        </Link>
        <button
          type="submit"
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          id="user-menu-button"
          aria-expanded="false"
          onClick={() => saveJSON({ data })}
        >
          Pobierz wszystkie przepisy
        </button>
      </div>
    </div>
  );
}
