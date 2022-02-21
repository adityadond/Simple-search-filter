import React from "react";
import { useState } from "react";
import "./Search.css";
import Sresult from "./Sresult";

function Search() {
  const [img, setImg] = useState("");
  const inputEvent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
          Type something:<br></br>
        <input
          type="text"
          placeholder="Search Anything"
          onChange={inputEvent}
          value={img}
        />
       {img==="" ? null :<Sresult name={img} />} 
      </div>
    </>
  );
}

export default Search;
