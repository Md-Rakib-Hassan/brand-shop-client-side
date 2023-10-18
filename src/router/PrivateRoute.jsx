import { useContext } from 'react';
import { myContext } from '../MainWithFunc';
import { Navigate } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage';



const PrivateRoute = ({ children }) => {

    const context = useContext(myContext);
    const { user, isLoding } = context;

    if (isLoding) return <LoadingPage></LoadingPage>

    if (user) return children

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;