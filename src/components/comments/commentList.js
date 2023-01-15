import React from "react";
import { useSelector } from "react-redux";
import CommentInfo from "./commentInfo";

export default function CommentList() {
  const comments = useSelector((state) => state.comments);

  return (
    <div className="commentList">
      {comments.map((comment) => (
        <CommentInfo comment={comment} key={comment.comment} />
      ))}
    </div>
  );
}
