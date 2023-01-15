import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { loggedContext } from "../../App";

export default function DrinkInfo({ drink }) {
  const isLogged = useContext(loggedContext);

  const dispatch = useDispatch();

  return (
    <div className="drinkInfo">
      <img src={drink.image} alt={drink.name} className="drinkImage" />
      <h2>{drink.name}</h2>
      <p>{drink.type}</p>
      {isLogged.user.type ? (
        <button
          className="deleteButton"
          onClick={() => dispatch({ type: "DELETE_DRINK", payload: drink.id })}
        >
          Usuń
        </button>
      ) : null}
      <button className="detailsButton">
        <Link to={`/${drink.id}`}>Szczegóły</Link>
      </button>
    </div>
  );
}
