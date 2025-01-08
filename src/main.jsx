import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Inscription from './Pages/Inscription/Inscription.jsx';
import Dashboard from './Dasboard/Dashboard.jsx';
import OtpCode from './Pages/OtpCode/OtpCode.jsx';
import CreateGroupe from './Components/Groupes/CreateGroupes/CreateGroupe.jsx';
import AppContextProvider, { AppContext } from './Components/Context/AppContext.jsx';


// import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Inscription",
    element: <Inscription />
  },
  {
    path: "/otp-code/:email/",
    element: <OtpCode />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/GroupePage",
    element: <CreateGroupe />
  }

  // modification de l'erreur 
  // {
  //   path: "/*",
  //   element: <h2 Url not fond />,
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppContextProvider>
          <RouterProvider router={router} />
      </AppContextProvider>
  </StrictMode>,
)

