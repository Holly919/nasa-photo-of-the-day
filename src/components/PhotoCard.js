import React from "react";

const PhotoCard = props => {
  return (
    <div className="POD">
      <h2>Photo from: {props.title}</h2>
      <p>Date: {props.date}</p>
      <div className="bottom">
      <p>{props.description}</p>
      </div>
    </div>
  );
};
export default MovieCard;