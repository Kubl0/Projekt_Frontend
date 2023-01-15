import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import DrinkInfo from "./drinkInfo";
import { loggedContext } from "../../App";
import DrinkForm from "./drinkForm";
export default function DrinkList() {
  const isLogged = useContext(loggedContext);
  const drinks = useSelector((state) => state.drinks);

  const [search, setSearch] = React.useState("");
  const [filteredDrinks, setFilteredDrinks] = React.useState(drinks);
  const [searchErr, setSearchErr] = React.useState("");

  useEffect(() => {
    setFilteredDrinks(
      drinks.filter((drink) =>
        drink.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    if (filteredDrinks.length === 0) {
      setSearchErr("Nie znaleziono drinka o podanej nazwie");
    } else {
      setSearchErr("");
    }
  }, [search, drinks, filteredDrinks.length]);

  return (
    <div className="drinkList" key="drinkList">
      {isLogged.user.type === "admin" ? (
        <div className="drinkAdminForm">
          <DrinkForm />
        </div>
      ) : null}
      <input
        type="text"
        placeholder="Wyszukaj drinka"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredDrinks.map((drink) => (
        <DrinkInfo drink={drink} key={drink.id} />
      ))}
      {searchErr ? <p>{searchErr}</p> : null}
    </div>
  );
}
