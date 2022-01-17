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
              <button
                id="button-remove"
                onClick={() => {
                  dispatch(deleteComment(comment.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
