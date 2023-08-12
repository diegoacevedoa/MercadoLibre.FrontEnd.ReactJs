import React, { createContext, useCallback, useState } from "react";
import { getAllProducts } from "../api/product/product";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([]);

  const handleGetAllProducts = useCallback(async (query) => {
    setLoading(true);

    const response = await getAllProducts(query);

    if (response.apiIsError) {
      Swal.fire(
        "Error",
        response.apiMessage + " " + (response.apiErrors ?? ""),
        "error"
      );
    } else {
      if (response.apiData != null && response.apiData.length > 0) {
        const newOptions = [
          ...response.apiData.map(({ code, name, abbreviation }) => ({
            value: code,
            label: name,
            abbreviation: abbreviation,
          })),
        ];

        setAllData(newOptions);
      } else {
        Swal.fire(
          "Advertencia",
          "La consulta no retornó registros. ",
          "warning"
        );
      }
    }

    setLoading(false);
  });

  const handleGetOneProduct = useCallback(async (id) => {
    setLoading(true);

    const response = await getOneProduct(id);

    if (response.apiIsError) {
      Swal.fire(
        "Error",
        response.apiMessage + " " + (response.apiErrors ?? ""),
        "error"
      );
    } else {
      if (response.apiData != null && response.apiData.length > 0) {
        const newOptions = [
          ...response.apiData.map(({ code, name, abbreviation }) => ({
            value: code,
            label: name,
            abbreviation: abbreviation,
          })),
        ];

        setAllData(newOptions);
      } else {
        Swal.fire(
          "Advertencia",
          "La consulta no retornó registros. ",
          "warning"
        );
      }
    }

    setLoading(false);
  });

  return (
    <ProductContext.Provider
      value={{
        loading,
        allData,
        handleGetAllProducts,
        handleGetOneProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
