import { fetchSinToken } from "../../helpers/fetch";
import { API } from "../../helpers/constants";

export const getAllProducts = async (query) => {
  try {
    const response = await fetchSinToken(
      API.SEARCH.replace("{query}", query),
      {},
      "GET"
    );
    const body = await response.json();

    if (response.status === 200) {
      return {
        apiCode: response.status,
        apiData: body,
        apiIsError: false,
        apiErrors: "",
        apiMessage: body.msg,
      };
    } else {
      return {
        apiCode: response.status,
        apiData: null,
        apiIsError: true,
        apiErrors: JSON.parse(
          JSON.stringify(
            body.message.includes("Forbidden")
              ? "Usted no posee permisos para realizar esta acción. "
              : body.message
          )
        ).toString(),
        apiMessage: "",
      };
    }
  } catch (error) {
    console.log(error);

    return {
      apiCode: "401",
      apiData: null,
      apiIsError: true,
      apiErrors:
        error != null && error.toString() === "TypeError: Failed to fetch"
          ? "El sitio no está disponible. "
          : error.toString(),
      apiMessage: "",
    };
  }
};

export const getOneProduct = async (id) => {
  try {
    const response = await fetchSinToken(
      API.DETAIL.replace("{id}", id),
      {},
      "GET"
    );
    const body = await response.json();

    if (response.status === 200) {
      return {
        apiCode: response.status,
        apiData: body,
        apiIsError: false,
        apiErrors: "",
        apiMessage: body.msg,
      };
    } else {
      return {
        apiCode: response.status,
        apiData: null,
        apiIsError: true,
        apiErrors: JSON.parse(
          JSON.stringify(
            body.message.includes("Forbidden")
              ? "Usted no posee permisos para realizar esta acción. "
              : body.message
          )
        ).toString(),
        apiMessage: "",
      };
    }
  } catch (error) {
    console.log(error);

    return {
      apiCode: "401",
      apiData: null,
      apiIsError: true,
      apiErrors:
        error != null && error.toString() === "TypeError: Failed to fetch"
          ? "El sitio no está disponible. "
          : error.toString(),
      apiMessage: "",
    };
  }
};
