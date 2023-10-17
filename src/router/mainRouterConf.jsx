import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


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
        ]
    }
    ]
)






export default mainRouterConf;