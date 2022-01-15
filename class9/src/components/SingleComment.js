import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleComment = () => {
  const { IdComment } = useParams();
  const [commentDetail, setCommentDetail] = useState(undefined);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/" + IdComment)
      .then((res) => res.json())
      .then((json) => setCommentDetail(json))
      .catch((err) => {
        console.log(err);
      });
  }, [IdComment]);
  return (
    <div id="single-comment">
      <h2>Single Comment: {IdComment}</h2>
      {commentDetail && (
        <>
          <p>
            <span>Id: </span>
            {commentDetail.id}
          </p>
          <p>
            <span>PostId: </span>
            {commentDetail.postId}
          </p>
          <p>
            <span>Name: </span>
            {commentDetail.name}
          </p>
          <p>
            <span>Email: </span>
            {commentDetail.email}
          </p>
          <p>
            <span>Body: </span>
            {commentDetail.body}
          </p>
        </>
      )}
    </div>
  );
};
