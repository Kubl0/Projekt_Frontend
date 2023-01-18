import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import React, { useContext, useState } from "react";
import { loggedContext } from "../../App";

export default function CommentForm({ user }) {
  const [id, setId] = useState(0);

  const isLogged = useContext(loggedContext);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: id,
      comment: "",
    },
    onSubmit: (values) => {
      if (values.comment === "") {
        alert("Kommentarz nie może być pusty");
        return;
      }
      dispatch({
        type: "ADD_COMMENT",
        payload: { comment: values.comment, user: user, id: id },
      });
      setId(id + 1);
      formik.resetForm();
    },
  });

  return isLogged.isLogged ? (
    <div className="commentForm" class="text-center mt-10 bg-stone-200 p-10">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">Dodaj komentarz</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            class="px-2 py-1 rounded-md mr-2"
            value={formik.values.comment}
            name="comment"
            id="comment"
            placeholder="Komentarz"
            onChange={formik.handleChange}
          />
          <button
            type="submit"
            class="text-lg bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Dodaj komentarz
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="commentForm" class="text-center mt-10 bg-stone-200 p-10">
      <p>
        <b>Musisz być zalogowany aby dodać komentarz</b>
      </p>
    </div>
  );
}
