import React from 'react';
import { useFormik } from 'formik';
import users from '../../data/users.json';

export default function LoginForm({isLogged, setIsLogged, user, setUser}) {

    const validate = values => {
        const errors = {};
        if (!values.username)  errors.username = 'Enter your username'; 
        if (!values.password)  errors.password = 'Enter your password'; 
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            if(users.find(user => user.username === values.username && user.password === values.password) !== undefined){
                setIsLogged(true);
                setUser(values.username)}
            else alert("Wrong username or password");
        }
    });

    if(isLogged===false) 
        return(
            <div className="login">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    <button type="submit">Login</button>
                </form>
                </div>
        );
        else return(
            <div className="login">
                <h3>Logged as {user}</h3>
            </div>
        );
}