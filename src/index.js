import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Contributors from './pages/Contributors';
import LocationContributorsMap from './pages/LocationContributorsMap';

import "./index.css"
import "./fonts/Chalk/Chalk-3.ttf";
import "./i18nextConfig.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Contributors",
    element: <Contributors/>,
  },
  {
    path: "/contributors-map",
    element: <LocationContributorsMap/>,
  },
]);
root.render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
