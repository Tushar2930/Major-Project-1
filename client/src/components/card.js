import React from "react";

function Card(props) {
  return (
    <div>
      <img src={props.src} alt="" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default Card;
