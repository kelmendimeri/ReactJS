import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Movie = ({ data }) => {
  return (
    <div id="Movie" style={{ textAlign: "center" }}>
      <div className="row">
        {data.slice(50, 60).map((movie, i) => {
          return (
            <div key={i} className="col col-sm-4">
              <div
                key={i}
                className="card"
                style={{
                  margin: "15px",
                  width: "18rem",
                  border: "1px solid black",
                }}
              >
                <img
                  style={{ padding: "5px" }}
                  width={"100%"}
                  className="card-img-top"
                  src={movie.Poster}
                  alt="There should be something"
                />
                <div className="card-body">
                  <h5 className="card-title">Title: {movie.Title}</h5>
                  <br />
                  <p className="card-text">Release date: {movie.Released}</p>
                  <br />
                  <p className="card-text">Plot: {movie.Plot}</p>
                  <br />
                  <p className="card-text">Gener: {movie.Genre}</p>
                  <br />
                  <a
                    href={movie.trailerLink}
                    target={"_blank"}
                    rel="nonreferrer noreferrer"
                    className="btn btn-danger"
                  >
                    Watch the trailer
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Movie };
