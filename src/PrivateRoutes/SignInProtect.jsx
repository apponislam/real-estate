import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const SignInProtect = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ThreeCircles visible={true} height="100" width="100" color="#0356f9" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        );
    }

    if (!user) {
        return children;
    }

    // if (successLogin) {
    //     toast.success("Login successfully");
    //     console.log("Successfully logged");
    // }

    return (
        <div>
            <Navigate to="/"></Navigate>
        </div>
    );
};

SignInProtect.propTypes = {
    children: PropTypes.node,
};

export default SignInProtect;
