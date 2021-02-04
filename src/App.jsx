import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import routes from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <Switch>
        {routes.map(({ id, ...props }) => (
          <PrivateRoute key={id} {...props} />
        ))}
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
