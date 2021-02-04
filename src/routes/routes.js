import Login from "../containers/Auth/Login";
import SignUp from "../containers/Auth/SignUp";

const routes = [
  {
    id: 1,
    extact: true,
    path: "/login",
    component: Login,
  },
  {
    id: 2,
    extact: true,
    path: "/signup",
    component: SignUp,
  },
];

export default routes;
