import axios from "axios";
import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return [response.jsonn, setPosts(response.data)];
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="posts">
      <h2>Posts</h2>
      <div className="d-flex justify-content-center">
        {posts[0] ? (
          <table>
            <thead>
              <tr>
                <th>UserID</th>
                <th>PostID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts
                .sort((post) => post.id)
                .map((post) => {
                  return (
                    <tr key={post.id}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h2> Posts are loading</h2>
        )}
      </div>
    </div>
  );
};
