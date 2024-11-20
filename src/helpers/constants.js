export const PATH = {
  INIT: "*",
  ALL: "/*",
  SEARCH: "/",
  RESULT: "/items",
  RESULTR: "/items?search={query}",
  DETAIL: "/item/:id",
  DETAILR: "/item/{id}",
};

export const API = {
  SEARCH: "items?q={query}",
  DETAIL: "item/{id}",
};

export const VIEWS = {
  SEARCH: "search",
  RESULT: "result",
  DETAIL: "detail",
};
