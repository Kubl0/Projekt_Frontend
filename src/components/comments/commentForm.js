import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import React, { useContext } from "react";
import { loggedContext } from "../../App";

export default function CommentForm({ user }) {
  const isLogged = useContext(loggedContext);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: { comment: values.comment, user: user },
      });
      formik.resetForm();
    },
  });

  return isLogged.isLogged ? (
    <div className="commentForm">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="comment">Komentarz</label>
        <input
          value={formik.values.comment}
          name="comment"
          id="comment"
          onChange={formik.handleChange}
        />
        <button type="submit">Dodaj komentarz</button>
      </form>
    </div>
  ) : (
    <div>Musisz być zalogowany aby dodać komentarz</div>
  );
}
