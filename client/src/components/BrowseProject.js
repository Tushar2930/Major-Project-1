import React from "react";

const customstyle = {
  display: "inline"
};
function Browseproject() {
  return (
    <div>
      <span>
        <img
          src="https://skywarriorthemes.com/fundingpress/wp-content/uploads/2020/08/mainimg-1.jpg"
          alt=""
        />
      </span>
      <span>
        <h1 style={customstyle}>Support our community projects</h1>
        <h3>
          FundingPress campaigns make ideas into reality. It’s where creators
          share new visions for creative work with the communities that will
          come together to fund them.
        </h3>
        <button type="submit">Browse Projects</button>
      </span>
    </div>
  );
}
export default Browseproject;
