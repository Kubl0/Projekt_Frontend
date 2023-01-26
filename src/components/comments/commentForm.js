import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import React, { useContext, useState, useRef, useEffect } from "react";
import { loggedContext } from "../../App";
import { addCommentAction } from "../../actions/commentAction";
import { useLocation } from "react-router-dom";

export default function CommentForm() {
  const [id, setId] = useState(0);

  const isLogged = useContext(loggedContext);

  const dispatch = useDispatch();

  const drinkId = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      drinkId.current = location.pathname.split("/")[1];
    } else {
      drinkId.current = "global";
    }
    console.log(drinkId.current);
  }, [location]);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values) => {
      if (values.comment === "") {
        alert("Kommentarz nie może być pusty");
        return;
      }
      dispatch(
        addCommentAction({
          id: id,
          comment: formik.values.comment,
          user: isLogged.user.username,
          drinkId: drinkId.current,
        })
      );
      setId(id + 1);
      formik.resetForm();
    },
  });

  return isLogged.isLogged ? (
    <div className="text-center mt-10 bg-stone-200 p-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Dodaj komentarz</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="px-2 py-1 rounded-md mr-2"
            value={formik.values.comment}
            name="comment"
            id="comment"
            placeholder="Komentarz"
            onChange={formik.handleChange}
          />
          <button
            type="submit"
            className="text-lg bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Dodaj komentarz
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="text-center mt-10 bg-stone-200 p-10">
      <p>
        <b>Musisz być zalogowany aby dodać komentarz</b>
      </p>
    </div>
  );
}
