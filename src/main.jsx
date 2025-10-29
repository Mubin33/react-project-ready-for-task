import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Register from "./component/page/Register.jsx";
import Login from "./component/page/Login.jsx";
import ContextHook from "./component/_ui/ContextHook.jsx";
import ResetPassEmail from "./component/page/ResetPassEmail.jsx";
import ChangePass from "./component/page/ChangePass.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "reset-password-email", element: <ResetPassEmail /> },
      { path: "/password-reset", element: <ChangePass /> },
      // { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextHook>
    <RouterProvider router={router} />
    </ContextHook>
  </React.StrictMode>
);
