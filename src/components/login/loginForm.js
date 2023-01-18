import React from "react";
import { useFormik } from "formik";
import users from "../../data/users.json";
import "../../style.css";
export default function LoginForm({ isLogged, setIsLogged, user, setUser }) {
  const validate = (values) => {
    const errors = {};
    if (!values.username) errors.username = "Enter your username";
    if (!values.password) errors.password = "Enter your password";
    return errors;
  };

  const reset = () => {
    setUser({});
    setIsLogged(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if (
        users.find(
          (user) =>
            user.username === values.username &&
            user.password === values.password
        ) !== undefined
      ) {
        setIsLogged(true);
        setUser(
          users.find(
            (user) =>
              user.username === values.username &&
              user.password === values.password
          )
        );
      } else alert("Wrong username or password");
    },
  });

  if (isLogged === false)
    return (
      <div
        className="loginForm"
        class="min-h-full items-center sm:px-6 lg:px-8 fixed right-5 top-3.5"
      >
        <form onSubmit={formik.handleSubmit}>
          <input
            class="px-2 py-0.5 rounded-md mr-2"
            id="username"
            name="username"
            placeholder="Nazwa użytkownika"
            type="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          <input
            class="px-2 py-0.5 rounded-md mr-2"
            id="password"
            name="password"
            type="password"
            placeholder="Hasło"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button
            type="submit"
            class="bg-gray-900 text-white px-2 py-1.5 rounded-md text-sm font-medium"
          >
            Login
          </button>
        </form>
      </div>
    );
  else
    return (
      <div
        className="loginForm"
        class="min-h-full items-center sm:px-6 lg:px-8 fixed right-5 top-3.5"
      >
        <h3 class="text-white px-3 py-2 rounded-md fixed top-2.5 right-40">
          Logged as {formik.values.username}
        </h3>
        <button
          type="submit"
          class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium fixed top-3 right-5"
          onClick={reset}
        >
          Logout
        </button>
      </div>
    );
}
