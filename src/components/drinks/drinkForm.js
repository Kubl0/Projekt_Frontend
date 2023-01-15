import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';

export default function DrinkForm() {
        const drinks = useSelector((state) => state.drinks) 

        const dispatch = useDispatch();
    
        const formik = useFormik({
            initialValues: {
                id: drinks[drinks.length-1].id+1,
                name: '',
                type: '',
                image: '',
                glass: '',
                ingredients: '',
                recipe: ''
            }, 
            onSubmit: values => {
                dispatch({type: 'ADD_DRINK', payload: values});
                formik.resetForm();
            }
    
        });
    
        return ( 
        <div className="drinkForm">
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={formik.values.name} name="name" id="name" onChange={formik.handleChange}/>
            <label htmlFor="type">Type</label>
            <input value={formik.values.type} name="type" id="type" onChange={formik.handleChange}/>
            <label htmlFor="image">Image</label>
            <input value={formik.values.image} name="image" id="image" onChange={formik.handleChange}/>
            <label htmlFor="glass">Glass</label>
            <input value={formik.values.glass} name="glass" id="glass" onChange={formik.handleChange}/>
            <label htmlFor="ingredients">Ingredients</label>
            <input value={formik.values.ingredients} name="ingredients" id="ingredients" onChange={formik.handleChange}/>
            <label htmlFor="recipe">Recipe</label>
            <input value={formik.values.recipe} name="recipe" id="recipe" onChange={formik.handleChange}/>
            <button type="submit">Add drink</button>
        </form>
        </div>)
}