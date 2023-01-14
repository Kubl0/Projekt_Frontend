export default function DrinkInfo({drink}){
    return(
        <div className="drinkInfo">
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <p>Price: {drink.price}</p>
            <p>Alcohol: {drink.alcohol}</p>
            <p>Volume: {drink.volume}</p>
        </div>
    );
}