import React, { createContext, useCallback, useState } from "react";
import { getAllProducts } from "../api/product/product";
import Swal from "sweetalert2";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const [detail, setDetail] = useState(null);

  const handleGetAllProducts = useCallback(async (query) => {
    setLoading(true);

    const response = await getAllProducts(query);

    if (response.apiIsError) {
      Swal.fire(
        "Error",
        response.apiMessage + " " + (response.apiErrors ?? ""),
        "error"
      );
      setAllData([]);
    } else {
      if (response.apiData != null) {
        setAllData(response.apiData);
      } else {
        Swal.fire(
          "Advertencia",
          "La consulta no retornó registros. ",
          "warning"
        );
        setAllData([]);
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
      setDetail(null);
    } else {
      if (response.apiData != null) {
        setDetail(response.apiData);
      } else {
        Swal.fire(
          "Advertencia",
          "La consulta no retornó registros. ",
          "warning"
        );
        setDetail(null);
      }
    }

    setLoading(false);
  });

  return (
    <ProductContext.Provider
      value={{
        loading,
        allData,
        detail,
        handleGetAllProducts,
        handleGetOneProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
