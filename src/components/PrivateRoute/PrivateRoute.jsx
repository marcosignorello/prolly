import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(Component, rest);
  const {
    state: { isAuthorised },
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(...props) =>
        true ? <Component {...props} /> : <Redirect to={"/signin"} />
      }
    />
  );
};

export default PrivateRoute;
