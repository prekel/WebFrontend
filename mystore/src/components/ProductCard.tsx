import React, { useState } from "react";

export const ProductCard: React.FunctionComponent<{
  msg: string;
  onClick: () => void;
}> = ({ msg, onClick }) => {
  const [n, setN] = useState(-1);

  return (
    <div className="input">
      <input type="text" id="title"></input>
      <label htmlFor="title" className="active">
        {msg}
      </label>
      <button onClick={() => onClick()}></button>
      {n}
      <button
        className="btn-primary"
        onClick={(event: React.MouseEvent) => setN(event.button)}
      ></button>
    </div>
  );
};
