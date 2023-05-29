import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return (
    <React.Fragment>
      <Route {...rest} element={<Element />} />
    </React.Fragment>
  );
};

export default PrivateRoute;