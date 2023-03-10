import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateCommentAction } from "../../actions/commentAction";

export default function CommentEditForm({ comment }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: comment.id,
      user: comment.user,
      comment: comment.comment,
      drinkId: comment.drinkId,
    },
    onSubmit: (values) => {
      if (values.comment === "") {
        alert("Komentarz nie może być pusty");
        return;
      }
      dispatch(updateCommentAction(values));
    },
  });

  return (
    <div className="commentEditForm">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="comment">Edytuj komentarz: </label>
        <input
          className="px-2 py-0.5 rounded-md mr-2"
          type="text"
          id="comment"
          comment="comment"
          placeholder="Edycja komentarza"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
        <button
          type="submit"
          className="text-lg bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium"
        >
          Zapisz
        </button>
      </form>
    </div>
  );
}
