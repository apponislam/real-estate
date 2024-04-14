import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [successLogin, setSuccessLogin] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const githubSignIn = () => {
        setLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    };

    const updateUser = (user, profileData) => {
        setLoading(true);
        return updateProfile(user, profileData);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Ovserver On State Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (mainUser) => {
            console.log(mainUser);
            setUser(mainUser);
            setLoading(false);
            if (successLogin) {
                toast.success("Login successfully");
                console.log("Successfully logged");
            }

            setSuccessLogin(false);
        });
        return () => unSubscribe();
    }, [successLogin]);

    const authInfo = { user, setUser, createUser, signInUser, logOut, googleSignIn, loading, setLoading, setSuccessLogin, githubSignIn, successLogin, updateUser };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
            <ToastContainer />
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
