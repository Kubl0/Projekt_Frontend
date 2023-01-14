import {useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import React, {useContext} from 'react';
import { loggedContext } from '../../App';

export default function CommentForm({user}) {

    const isLogged = useContext(loggedContext);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            comment: '',
        }, 
        onSubmit: values => {
            dispatch({type: 'ADD_COMMENT', payload: {comment: values.comment, user: user}});
            formik.resetForm();
        }

    });

    return isLogged ? ( 
    <div className="commentForm">
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="comment">Comment</label>
        <input value={formik.values.comment} name="comment" id="comment" onChange={formik.handleChange}/>
        <button type="submit">Add comment</button>
    </form>
    </div>) : <div>You must be logged in to post a comment</div>
}