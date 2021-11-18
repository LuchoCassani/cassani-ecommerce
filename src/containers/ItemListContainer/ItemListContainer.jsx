import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import SliderPrincipal from "../../components/SliderPrincipal/SliderPrincipal";

export const ItemListContainer = () => {
  return (
    <>
      <div>
        <SliderPrincipal />
        <ItemList />
      </div>
    </>
  );
};
