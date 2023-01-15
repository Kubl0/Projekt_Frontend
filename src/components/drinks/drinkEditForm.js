import { useDispatch} from 'react-redux';
import { loggedContext } from '../../App';
import { useFormik } from 'formik';
import { useContext } from 'react';


export default function DrinkEdit({drink}) {

    const isLogged = useContext(loggedContext);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            id: drink.id,
            name: drink.name,
            type: drink.type,
            type_of_glass: drink.type_of_glass,
            recipe: drink.recipe,
            ingredients: drink.ingredients,
            image: drink.image,
        },
        onSubmit: (values) => {
            dispatch({type: 'UPDATE_DRINK', payload: values});
        }
    })
    
    return (
        <div className="drinkEditForm">
            {isLogged.user.type==='admin' ? 
            (<form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Nazwa drinka</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="type">Rodzaj drinka</label>
                <input type="text" id="type" name="type" onChange={formik.handleChange} value={formik.values.type}/>
                <label htmlFor="type_of_glass">Rodzaj szklanki</label>
                <input type="text" id="type_of_glass" name="type_of_glass" onChange={formik.handleChange} value={formik.values.type_of_glass}/>
                <label htmlFor="recipe">Przepis</label>
                <textarea id="recipe" name="recipe" onChange={formik.handleChange} value={formik.values.recipe}/>
                <label htmlFor="ingredients">Składniki</label>
                <textarea id="ingredients" name="ingredients" onChange={formik.handleChange} value={formik.values.ingredients}/>
                <label htmlFor="image">Link do zdjęcia</label>
                <input type="text" id="image" name="image" onChange={formik.handleChange} value={formik.values.image}/>
                <button type="submit">Zapisz zmiany</button>
            </form>) : null}
        </div>)
}