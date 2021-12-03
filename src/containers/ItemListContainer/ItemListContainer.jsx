import React from "react";
import Footer from "../../components/footer/Footer";
import ItemList from "../../components/ItemList/ItemList";
import SliderPrincipal from "../../components/SliderPrincipal/SliderPrincipal";

export const ItemListContainer = () => {
  return (
    <>
      <div>
        <SliderPrincipal />
        <ItemList />
        <Footer />
      </div>
    </>
  );
};
