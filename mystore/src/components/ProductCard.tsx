import React, { useState } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductCard: React.FunctionComponent<{
  msg: string;
  onClick: () => void;
}> = ({ msg, onClick }) => {
  const [n, setN] = useState(-1);

  return (
    <div className="input">
      <input type="text"  className="form-control" id="title"/>
      <label htmlFor="title" className="active">
        {msg}
      </label>
      <br/>
      <button type="button" 
        className="btn btn-danger" onClick={() => onClick()}>qasdas</button>
      {n}
      <button type="button"
        className="btn btn-primary"
        onClick={(event: React.MouseEvent) => setN(event.button)}
      >Qwertyt1</button>
    </div>
  );
};
