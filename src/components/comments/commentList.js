import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CommentInfo from "./commentInfo";
import { useLocation } from "react-router-dom";

export default function CommentList() {
  const comments = useSelector((state) => state.comments);
  const [filteredComments, setFilteredComments] = React.useState(comments);
  const location = useLocation();

  useEffect(() => {
    let drinkId = location.pathname.split("/")[1];
    if (drinkId === "" || drinkId === "statistics") {
      drinkId = "global";
    }
    setFilteredComments(
      comments.filter((comment) => comment.drinkId === drinkId)
    );
  }, [location, comments]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[600px] text-center p-10 bg-stone-200 rounded-md">
        <b>Komentarze: </b>
        <br />
        <br />
        {filteredComments.length === 0 ? (
          <p>Brak komentarzy</p>
        ) : (
          filteredComments.map((comment) => (
            <CommentInfo comment={comment} key={comment.id} />
          ))
        )}{" "}
      </div>
    </div>
  );
}
