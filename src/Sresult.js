import React from "react";

function Sresult(props) {
  const img = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`;
  return (
    <div>
      <img src={img} alt="aditya" />
    </div>
  );
}

export default Sresult;
