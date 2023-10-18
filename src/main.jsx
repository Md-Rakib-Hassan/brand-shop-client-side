import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import mainRouterConf from './router/mainRouterConf';
import MainWithFunc from './MainWithFunc';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <MainWithFunc>
      <RouterProvider router={mainRouterConf}></RouterProvider>
    </MainWithFunc>



  </React.StrictMode>,
)
