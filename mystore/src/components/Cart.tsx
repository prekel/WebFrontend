import React, { useState } from "react";

export const Cart: React.FunctionComponent<{ count: number }> = ({ count }) => {
  return (
    <>
      <p>{count}</p>
    </>
  );
};
