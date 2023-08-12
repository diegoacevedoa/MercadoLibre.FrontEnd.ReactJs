import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Search } from "../components/views/search/Search";
import { Result } from "../components/views/Result";
import { Detail } from "../components/views/Detail";
import { PATH } from "../helpers/constants";

export const DashBoardRouter = () => {
  return (
    <Routes>
      <Route path={PATH.SEARCH} element={<Search />} />
      <Route path={PATH.RESULT} element={<Result />} />
      <Route path={PATH.DETAIL} element={<Detail />} />
      <Route path={PATH.ALL} element={<Navigate to={PATH.SEARCH} />} />
    </Routes>
  );
};
