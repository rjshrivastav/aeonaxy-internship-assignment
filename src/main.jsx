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
    path: "/myapp/",
    element: <App />,
    children: [
      {
        path: "/myapp/",
        element: <SignupPage />,
      },
      {
        path: "/myapp/createprofile",
        element: <SelectAvatar />,
      },
      {
        path: "/myapp/chooseyouroption",
        element: <SelectCards />,
      },
      {
        path: "/myapp/varifyemail",
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
