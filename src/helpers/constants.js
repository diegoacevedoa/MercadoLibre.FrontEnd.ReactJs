export const PATH = {
  INIT: "*",
  ALL: "/*",
  SEARCH: "/",
  RESULT: "/items",
  //   RESULT: "/items?search=",
  DETAIL: "/items/:id",
};

export const API = {
  SEARCH: "/items?q={query}",
  DETAIL: "/items/{id}",
};

export const VIEWS = {
  SEARCH: "search",
  RESULT: "result",
  DETAIL: "detail",
};
