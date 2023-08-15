import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PATH } from "../helpers/constants";
import { DashBoardRouter } from "./DashBoardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={PATH.ALL} element={<DashBoardRouter />} />
          <Route path={PATH.INIT} element={<Navigate to={PATH.ALL} />} />
        </Routes>
      </div>
    </Router>
  );
};
