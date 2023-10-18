import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Carts from "../pages/Carts";
import AddProducts from "../pages/AddProducts";
import PrivateRoute from "./PrivateRoute";


const mainRouterConf = createBrowserRouter(
    [{
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Registration></Registration>,
            },
            {
                path:'/carts',
                element:<PrivateRoute><Carts></Carts></PrivateRoute> ,
            },
            {
                path:'/add-products',
                element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute> ,
            },
        ]
    }
    ]
)






export default mainRouterConf;