import React from "react";
import { useSelector } from "react-redux";
import CommentInfo from "./commentInfo";

export default function CommentList() {
  const comments = useSelector((state) => state.comments);

  return (
    <div className="commentList" class="flex flex-col items-center">
      <div class="w-[600px] text-center p-10 bg-stone-200 rounded-md">
        <b>Komentarze: </b>
        <br />
        <br />
        {comments.length === 0 ? (
          <p>Brak komentarzy</p>
        ) : (
          comments.map((comment) => <CommentInfo comment={comment} />)
        )}{" "}
      </div>
    </div>
  );
}
