import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";

const App: React.FunctionComponent<{ message: string }> = ({ message }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className="constainer">
        <Cart count={count}></Cart>
        <ProductCard
          msg="sdad1"
          onClick={() => setCount(count + 1)}
        ></ProductCard>
      </div>
    </>
  );
};

export default App;