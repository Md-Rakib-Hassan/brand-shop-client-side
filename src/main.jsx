import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import mainRouterConf from './router/mainRouterConf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={mainRouterConf}></RouterProvider>
 


  </React.StrictMode>,
)
