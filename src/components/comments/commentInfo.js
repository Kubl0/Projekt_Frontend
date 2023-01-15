import { useDispatch } from "react-redux";
import { loggedContext } from "../../App";
import { useContext } from "react";
import CommentEditForm from "./commentEditForm";

export default function CommentInfo({ comment }) {
  const { isLogged, user } = useContext(loggedContext);
  const dispatch = useDispatch();

  return (
    <div className="commentInfo">
      <p>
        {comment.user}:{comment.comment}
      </p>
      {(isLogged && user.username === comment.user) ||
      (isLogged && user.type === "admin") ? (
        <div className="commentButtons">
          <button
            onClick={() =>
              dispatch({ type: "DELETE_COMMENT", payload: comment.id })
            }
          >
            Usuń komentarz
          </button>
          <CommentEditForm comment={comment} />
        </div>
      ) : null}
    </div>
  );
}
