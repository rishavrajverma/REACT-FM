import Login from "../componentes/Login";
import Home from "../componentes/Home";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "login",
    element: <Login />,
    title: "login",
  },
];

export default pagesData;
