import React from "react";
import Card from "./card";
import details from "./details.js";
function CreateCard(prop) {
  return (
    <Card src={prop.src} name={prop.name} description={prop.description} />
  );
}

function FeaturedProject() {
  return (
    <div>
      <h1>Browse our featured projects</h1>
      {details.map(CreateCard)}
      <button type="submit">View all Projects</button>
    </div>
  );
}
export default FeaturedProject;
