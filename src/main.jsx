import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import EmailVarify from './components/EmailVarify.jsx';
import SignupPage from './components/SignupPage.jsx';
import SelectAvatar from './components/SelectAvatar.jsx';
import SelectCards from './components/SelectCards.jsx';


const router = createBrowserRouter([
  {
    path: "/aeonaxy-internship-assignment/",
    element: <App />,
    children: [
      {
        path: "/aeonaxy-internship-assignment/",
        element: <SignupPage />,
      },
      {
        path: "/aeonaxy-internship-assignment/createprofile",
        element: <SelectAvatar />,
      },
      {
        path: "/aeonaxy-internship-assignment/chooseyouroption",
        element: <SelectCards />,
      },
      {
        path: "/aeonaxy-internship-assignment/varifyemail",
        element: <EmailVarify />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
