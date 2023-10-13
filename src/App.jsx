import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { useRoutes } from "react-router";
import Art from "./Art";
import TOS from "./TOS";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/art",
      element: <Art />,
    },
    {
      path: "/tos",
      element: <TOS />,
    },
  ]);

  return (
    <div className="container-fluid pt-lg-0 p-0 overflow-hidden position-relative">
      <NavBar />
      {element}
    </div>
  );
}

export default App;
