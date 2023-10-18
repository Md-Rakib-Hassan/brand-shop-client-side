import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from './Authconf';

const provider = new GoogleAuthProvider();
export const myContext = createContext(null);
const MainWithFunc = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const [brands, setBrands] = useState([]);



    const createUser = (email, password) => {
        setIsLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setIsLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignInbyPop = () => {
        setIsLoding(true)
        return signInWithPopup(auth, provider)
    }
    
    useEffect(() => {
        setIsLoding(true)
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data));
    }, []);

    useEffect(() => {

        const unsub = () => {
            onAuthStateChanged(auth, (curentUser) => {
                setUser(curentUser);
                console.log(curentUser);
                setIsLoding(false)

            })



        }
        return unsub();

    }, [])

    const logOut = () => {
        setIsLoding(true)
        return signOut(auth);
    }


  







    const allChildren = {
        createUser,
        signInUser,
        googleSignInbyPop,
        user,
        logOut,
        isLoding,
        auth,
        brands,

    }

    return (
        <div>
            <myContext.Provider value={allChildren}>
                {children}
            </myContext.Provider>

        </div>
    );
};

export default MainWithFunc;