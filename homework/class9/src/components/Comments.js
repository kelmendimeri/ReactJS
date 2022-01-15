import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, fetchCommentsRequest } from "../actions/CommentsAction";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.CommentsReducer.comments);
  const error = useSelector((state) => state.CommentsReducer.error);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);
  return (
    <div id="comments">
      <label>Enter the id of comment you want to remove</label>
      <input
        type={"number"}
        id="comment-delete"
        onChange={(event) => {
          if (event.target.value < 1) {
            document.getElementById("button-remove").disabled = true;
          } else {
            document.getElementById("button-remove").disabled = false;
          }
        }}
      />
      <button
        disabled={true}
        id="button-remove"
        onClick={(event) => {
          dispatch(
            deleteComment(document.getElementById("comment-delete").value)
          );
        }}
      >
        Delete
      </button>
      {error !== undefined && <p>{error}</p>}
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <span>{comment.id}</span> &nbsp;
              <span>{comment.name}</span> &nbsp;
              <span>
                <Link to={`/comments/${comment.id}`}> Details... </Link>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
