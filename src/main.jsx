import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App.jsx";
import ErrorPage from "./components/Error-Page/error-pag.jsx";
import About from "./routes/About/About.jsx";
import "./index.css";
// bootstrap//
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Volunteers from "./routes/Volunteers/Volunteers.jsx";
import Kids from "./routes/Kids/Kids.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/volunteers",
    element: <Volunteers/>,
  },
  {
    path: "/kids",
    element: <Kids/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
