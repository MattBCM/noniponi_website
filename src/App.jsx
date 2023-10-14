import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import { useRoutes, useLocation } from "react-router";
import { useEffect } from "react";
import Art from "./Art";
import TOS from "./TOS";

function App() {
  let location = useLocation();

  useEffect(() => {
    if (document.getElementsByClassName("modal-backdrop")[0]) {
      document.getElementsByClassName("modal-backdrop")[0].remove();
      document
        .getElementsByClassName("modal-open")[0]
        .style.removeProperty("overflow");
      document
        .getElementsByClassName("modal-open")[0]
        .classList.remove("modal-open");
    }
  }, [location]);

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
