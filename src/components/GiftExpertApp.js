import React, { useState } from "react";

import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

import "./styles/GiftExpertApp.css";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Death Note"]);

  //   const handleAdd = () => {
  //     setCategories((categories) => [...categories, "Pokemon"]);
  //     // setCategories([...categories, "Pokemon"]);
  //   };

  return (
    <>
      <h1>Gift Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
