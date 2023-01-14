import React from 'react';
import { useSelector } from 'react-redux';
import DrinkInfo from './drinkInfo';

export default function DrinkList() {

    const drinks = useSelector((state) => state.drinks)

    return (
        <div className="drinkList">
            {drinks.map(drink => <DrinkInfo drink={drink}/>)}
        </div>
    );

}