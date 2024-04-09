import React from 'react'
import { RouterProvider, createBrowserRouter, ReactDOM } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Signup from './components/Signup.jsx'
import ProfileCreation from './components/ProfileCreation.jsx'
import Cards from './components/Cards.jsx'
import EmailVarification from './components/EmailVarification.jsx'


const router = createBrowserRouter([
  {
    path: "/myapp/",
    element: <App />,
    children: [
      {
        path: "/myapp/",
        element: <Signup />,
      },
      {
        path: "/myapp/createprofile",
        element: <ProfileCreation />,
      },
      {
        path: "/myapp/chooseyouroption",
        element: <Cards />,
      },
      {
        path: "/myapp/varifyemail",
        element: <EmailVarification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
