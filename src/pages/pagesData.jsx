import Login from "./Login";
import Customer from "./Customer";

const pagesData = [
  {
    path: "customer",
    element: <Customer />,
    title: "customer",
  },

  {
    path: "login",
    element: <Login />,
    title: "login",
  },
];

export default pagesData;
