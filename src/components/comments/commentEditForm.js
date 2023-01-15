import { useFormik } from "formik";
import { useDispatch } from "react-redux";

export default function CommentEditForm({ comment }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user: comment.user,
      comment: comment.comment,
    },
    onSubmit: (values) => {
      dispatch({ type: "UPDATE_COMMENT", payload: values });
    },
  });

  return (
    <div className="commentEditForm">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="comment">Edytuj komentarz</label>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}
