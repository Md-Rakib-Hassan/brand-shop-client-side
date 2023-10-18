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
import Error from "../pages/Error"
import ProductsBrand from "../pages/ProductsBrand";
import ProductDetails from "../pages/ProductDetails";


const mainRouterConf = createBrowserRouter(
    [{
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
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
            {
                path:'/:brand',
                loader:({params})=>fetch(`http://localhost:5000/${params.brand}`),
                element:<ProductsBrand></ProductsBrand>,
            },
            {
                path:'/product/:productId',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            }
        ]
    }
    ]
)






export default mainRouterConf;